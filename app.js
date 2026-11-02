(() => {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);
  const WA_PHONE = '919778446620';
  const formatRupee = num => '₹' + Number(num || 0).toLocaleString('en-IN');

  const getStorage = (key, fallback) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  };

  const setStorage = (key, val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {}
  };

  const escapeHtml = str =>
    String(str == null ? '' : str).replace(
      /[&<>"']/g,
      char =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        }[char])
    );

  const ROOM_TABS = [
    ['all', 'All Spaces'],
    ['living', 'Living Room'],
    ['bedroom', 'Bedroom'],
    ['office', 'Office'],
    ['dining', 'Dining'],
    ['custom', 'Custom Woodwork']
  ];

  const MATERIAL_LABELS = {
    'natural-wood': 'Solid Teak & Rosewood',
    'engineered': 'Reinforced Engineered Wood',
    'metal': 'Architectural Metal',
    'fabric': 'Upholstery & Cane'
  };

  let products = [];
  let currentRoom = 'all';
  let wishlist = getStorage('hw', []);
  let cart = getStorage('hc', []);
  let drawerMode = 'cart';
  let modalActiveProduct = null;

  const renderStars = rating => {
    if (!rating) return '';
    const rounded = Math.round(rating);
    return `<div class="st" aria-label="${rating} out of 5 stars">${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)}</div>`;
  };

  const createCardHtml = p => {
    const isDiscounted = p.mrp > p.price;
    const discountPercent = isDiscounted ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
    const inWishlist = wishlist.includes(p.id);

    return `
      <article class="card" data-product-id="${p.id}">
        <div class="ph">
          <img src="${p.img}" width="${p.w || 800}" height="${p.h || 800}" loading="lazy" alt="${escapeHtml(p.name)}">
          ${discountPercent > 0 ? `<span class="tag">Save ${discountPercent}%</span>` : ''}
          <button class="ic heart" data-w="${p.id}" aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
            ${inWishlist ? '♥' : '♡'}
          </button>
        </div>
        <div class="info">
          <h3>${escapeHtml(p.name)}</h3>
          ${renderStars(p.rating)}
          <div class="pr">
            <b>${formatRupee(p.price)}</b>
            ${isDiscounted ? `<s>${formatRupee(p.mrp)}</s>` : ''}
          </div>
        </div>
        <div class="act">
          <button class="btn ghost" data-view="${p.id}" style="color:var(--walnut);border-color:var(--border);">View Details</button>
          <button class="btn" data-c="${p.id}">Add to Cart</button>
        </div>
      </article>
    `;
  };

  function updateBadgeCounts() {
    const wcEl = $('#wc');
    const ccEl = $('#cc');
    if (wcEl) wcEl.textContent = wishlist.length;
    if (ccEl) ccEl.textContent = cart.length;
    setStorage('hw', wishlist);
    setStorage('hc', cart);

    // Update heart icons on screen
    $$('[data-w]').forEach(btn => {
      const id = btn.dataset.w;
      if (id) {
        const isFav = wishlist.includes(id);
        btn.textContent = isFav ? '♥' : '♡';
        btn.setAttribute('aria-label', isFav ? 'Remove from wishlist' : 'Add to wishlist');
      }
    });
  }

  function renderCatalog() {
    const query = ($('#q')?.value || '').trim().toLowerCase();
    const material = $('#mat')?.value || '';
    const sort = $('#sort')?.value || '';

    let list = products.filter(p => {
      const matchesRoom = currentRoom === 'all' || p.room === currentRoom;
      const matchesMat = !material || p.mat === material;
      const searchable = (p.name + ' ' + (p.cat || '') + ' ' + (p.room || '')).toLowerCase();
      const matchesQuery = !query || searchable.includes(query);
      return matchesRoom && matchesMat && matchesQuery;
    });

    if (sort === 'lo') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'hi') {
      list.sort((a, b) => b.price - a.price);
    }

    const grid = $('#grid');
    const count = $('#count');

    if (list.length > 0) {
      grid.innerHTML = list.map(createCardHtml).join('');
    } else {
      if (currentRoom === 'office') {
        grid.innerHTML = `
          <div class="empty-state">
            <h3 style="margin-bottom:8px;font-size:22px;">Custom Ergonomic Office Furniture</h3>
            <p>We handcraft executive conference tables, solid teak desks, and ergonomic study units built to order.</p>
            <a class="btn" href="https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Hi Homeify, I would like to order custom office furniture for my space.')}" target="_blank" rel="noopener">Order Custom Office Furniture on WhatsApp</a>
          </div>
        `;
      } else {
        grid.innerHTML = `
          <div class="empty-state">
            <h3 style="margin-bottom:8px;font-size:22px;">No matching pieces found</h3>
            <p>Looking for a custom size or design? Our Erattupetta master workshop crafts any bespoke design to order.</p>
            <a class="btn" href="https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Hi Homeify, I am looking for custom furniture not listed in the catalog.')}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
          </div>
        `;
      }
    }

    if (count) {
      count.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
    }

    // Update active tab button
    $$('#rooms button').forEach(btn => {
      btn.classList.toggle('on', btn.dataset.r === currentRoom);
    });
  }

  function openDrawer(mode) {
    drawerMode = mode;
    const ids = mode === 'cart' ? cart : wishlist;
    const items = ids.map(id => products.find(p => p.id === id)).filter(Boolean);

    const titleEl = $('#dtitle');
    const listEl = $('#dlist');
    const sendEl = $('#dsend');

    if (titleEl) {
      titleEl.textContent = mode === 'cart' ? 'Your Enquiry Cart' : 'Saved Wishlist';
    }

    if (listEl) {
      if (items.length > 0) {
        let total = items.reduce((acc, cur) => acc + (cur.price || 0), 0);
        listEl.innerHTML = `
          <div style="margin-bottom:12px;font-size:14px;color:#7a6c60;">
            ${items.length} ${items.length === 1 ? 'item' : 'items'} ${mode === 'cart' ? `• Estimated Total: <b>${formatRupee(total)}</b>` : ''}
          </div>
          ${items
            .map(
              p => `
              <div class="row">
                <img src="${p.img}" width="60" height="60" alt="${escapeHtml(p.name)}">
                <div style="flex:1;">
                  <div style="font-size:14px;font-weight:600;line-height:1.3;">${escapeHtml(p.name)}</div>
                  <div style="font-size:14px;color:var(--walnut);margin-top:2px;"><b>${formatRupee(p.price)}</b></div>
                </div>
                <button class="ic" data-x="${p.id}" aria-label="Remove item" style="color:#9c9085;">✕</button>
              </div>
            `
            )
            .join('')}
        `;
      } else {
        listEl.innerHTML = `<p style="padding:40px 0;text-align:center;color:#8c7e73;">Your ${mode === 'cart' ? 'cart' : 'wishlist'} is currently empty.</p>`;
      }
    }

    if (sendEl) {
      if (items.length > 0) {
        const itemLines = items.map(p => `• ${p.name} (${formatRupee(p.price)})`).join('\n');
        const totalEstimate = items.reduce((sum, p) => sum + p.price, 0);
        const text =
          mode === 'cart'
            ? `Hi Homeify Furniture, I would like to request a quote and delivery timeline for:\n${itemLines}\n\nEstimated Total: ${formatRupee(totalEstimate)}\nPlease let me know availability and delivery details.`
            : `Hi Homeify Furniture, I saved these pieces from your collection:\n${itemLines}\n\nCould you share more details?`;
        sendEl.href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
        sendEl.style.display = 'inline-flex';
      } else {
        sendEl.style.display = 'none';
      }
    }

    $('#drawer')?.classList.add('on');
    $('#scrim')?.classList.add('on');
  }

  function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    modalActiveProduct = product;

    const pm = $('#pmodal');
    const pmImg = $('#pmimg');
    const pmCat = $('#pmcat');
    const pmTitle = $('#pmtitle');
    const pmStars = $('#pmstars');
    const pmPrice = $('#pmprice');
    const pmDesc = $('#pmdesc');
    const pmWa = $('#pmwa');
    const pmCart = $('#pmcart');

    if (pmImg) {
      pmImg.innerHTML = `<img src="${product.img}" width="${product.w || 800}" height="${product.h || 800}" alt="${escapeHtml(product.name)}">`;
    }
    if (pmCat) {
      pmCat.textContent = MATERIAL_LABELS[product.mat] || 'Solid Teak Wood';
    }
    if (pmTitle) {
      pmTitle.textContent = product.name;
    }
    if (pmStars) {
      pmStars.innerHTML = renderStars(product.rating);
    }
    if (pmPrice) {
      const isDiscounted = product.mrp > product.price;
      const discountPercent = isDiscounted ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
      pmPrice.innerHTML = `
        <b>${formatRupee(product.price)}</b>
        ${isDiscounted ? `<s>${formatRupee(product.mrp)}</s> <em>Save ${discountPercent}%</em>` : ''}
      `;
    }
    if (pmDesc) {
      pmDesc.textContent =
        product.desc ||
        `Handcrafted in seasoned solid teak with traditional mortise-and-tenon joints. Backed by Homeify's comprehensive 5-year structural warranty with free white-glove delivery and professional installation throughout Kerala.`;
    }
    if (pmWa) {
      const msg = `Hi Homeify, I would like to inquire about "${product.name}" (${formatRupee(product.price)}). Can you share delivery time and customization options?`;
      pmWa.href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    }
    if (pmCart) {
      const inCart = cart.includes(product.id);
      pmCart.textContent = inCart ? 'In Cart' : 'Add to Cart';
    }

    pm?.classList.add('on');
    $('#scrim')?.classList.add('on');
  }

  function closeAllOverlays() {
    ['#drawer', '#links', '#scrim', '#pmodal'].forEach(sel => {
      $(sel)?.classList.remove('on');
    });
  }

  function toggleArrayItem(arr, item) {
    const idx = arr.indexOf(item);
    if (idx < 0) {
      arr.push(item);
    } else {
      arr.splice(idx, 1);
    }
  }

  // Global Delegated Click Handler (Zero inline onclicks)
  document.addEventListener('click', event => {
    const target = event.target.closest('[data-w], [data-c], [data-x], [data-r], [data-room], [data-view]');

    if (target) {
      // Wishlist toggle
      if (target.dataset.w) {
        toggleArrayItem(wishlist, target.dataset.w);
        updateBadgeCounts();
        return;
      }

      // Add to cart
      if (target.dataset.c) {
        const id = target.dataset.c;
        if (!cart.includes(id)) {
          cart.push(id);
        }
        updateBadgeCounts();
        openDrawer('cart');
        return;
      }

      // Remove from cart/wishlist
      if (target.dataset.x) {
        const id = target.dataset.x;
        toggleArrayItem(drawerMode === 'cart' ? cart : wishlist, id);
        updateBadgeCounts();
        openDrawer(drawerMode);
        return;
      }

      // Filter by room from pills
      if (target.dataset.r) {
        currentRoom = target.dataset.r;
        renderCatalog();
        return;
      }

      // Filter by room from nav links
      if (target.dataset.room) {
        currentRoom = target.dataset.room;
        renderCatalog();
        closeAllOverlays();
        return;
      }

      // View details modal
      if (target.dataset.view) {
        openProductModal(target.dataset.view);
        return;
      }
    }
  });

  // Navigation and Drawer Controls
  $('#burger')?.addEventListener('click', () => {
    $('#links')?.classList.add('on');
    $('#scrim')?.classList.add('on');
  });

  $('#scrim')?.addEventListener('click', closeAllOverlays);
  $('#dclose')?.addEventListener('click', closeAllOverlays);
  $('#pmclose')?.addEventListener('click', closeAllOverlays);

  $('#cbtn')?.addEventListener('click', () => openDrawer('cart'));
  $('#wbtn')?.addEventListener('click', () => openDrawer('wish'));

  $('#pmcart')?.addEventListener('click', () => {
    if (modalActiveProduct) {
      if (!cart.includes(modalActiveProduct.id)) {
        cart.push(modalActiveProduct.id);
      }
      updateBadgeCounts();
      closeAllOverlays();
      openDrawer('cart');
    }
  });

  $$('.links a').forEach(link => {
    link.addEventListener('click', () => closeAllOverlays());
  });

  // Filter input listeners
  $('#q')?.addEventListener('input', renderCatalog);
  $('#mat')?.addEventListener('change', renderCatalog);
  $('#sort')?.addEventListener('change', renderCatalog);

  // Keyboard accessibility
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAllOverlays();
    }
  });

  // Render Category Tab Pills
  const roomsContainer = $('#rooms');
  if (roomsContainer) {
    roomsContainer.innerHTML = ROOM_TABS.map(
      tab => `<button data-r="${tab[0]}" class="${tab[0] === 'all' ? 'on' : ''}">${tab[1]}</button>`
    ).join('');
  }

  // Fetch data files asynchronously
  Promise.all([
    fetch('products.json').then(res => res.json()),
    fetch('highlights.json').then(res => res.json()),
    fetch('reviews.json').then(res => res.json())
  ])
    .then(([prodData, highlightIds, reviewData]) => {
      products = prodData;

      // Dynamic material dropdown (auto-hidden if only 1 material)
      const materials = [...new Set(products.map(p => p.mat).filter(Boolean))];
      const matSelect = $('#mat');
      if (matSelect) {
        matSelect.innerHTML =
          '<option value="">All Materials</option>' +
          materials.map(m => `<option value="${m}">${MATERIAL_LABELS[m] || m}</option>`).join('');
        matSelect.hidden = materials.length < 2;
      }

      // Render Best Sellers Rail
      const rail = $('#rail');
      if (rail && highlightIds) {
        const highlightProducts = highlightIds.map(id => products.find(p => p.id === id)).filter(Boolean);
        rail.innerHTML = highlightProducts.map(createCardHtml).join('');
      }

      // Render Reviews Rail
      const revRail = $('#rev');
      if (revRail && reviewData) {
        revRail.innerHTML = reviewData
          .map(
            r => `
            <div class="rev">
              <div class="st" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}</div>
              <p>“${escapeHtml(r.text)}”</p>
              <div>
                <b>${escapeHtml(r.name)}</b>, <span style="color:#7a6c60;">${escapeHtml(r.place)}</span>
                <small style="color:var(--gold);font-weight:600;display:inline-block;margin-left:6px;">✓ Verified Customer</small>
              </div>
            </div>
          `
          )
          .join('');
      }

      renderCatalog();
      updateBadgeCounts();
    })
    .catch(() => {
      const grid = $('#grid');
      if (grid) {
        grid.innerHTML = '<p class="empty-state">Unable to load furniture collection. Please try refreshing the page.</p>';
      }
    });
})();

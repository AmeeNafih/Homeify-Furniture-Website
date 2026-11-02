(()=>{const $=s=>document.querySelector(s),WA='919778446620',R=n=>'₹'+n.toLocaleString('en-IN');
const ls=(k,d)=>{try{return JSON.parse(localStorage[k])}catch{return d}},save=(k,v)=>{try{localStorage[k]=JSON.stringify(v)}catch{}};
const ROOMS=[['all','All'],['living','Living'],['bedroom','Bedroom'],['office','Office'],['dining','Dining'],['custom','Custom Woodwork']];
const MATS={'natural-wood':'Solid Wood','engineered':'Engineered Wood','metal':'Metal','fabric':'Fabric'};
let P=[],room='all',wish=ls('hw',[]),cart=ls('hc',[]),mode='cart';
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const stars=n=>n?`<div class="st" aria-label="${n} of 5">${'★'.repeat(Math.round(n))}${'☆'.repeat(5-Math.round(n))}</div>`:'';
const card=p=>{const d=p.mrp>p.price?Math.round(100-p.price/p.mrp*100):0;return`<article class="card"><div class="ph"><img src="${p.img}" width="${p.w}" height="${p.h}" loading="lazy" alt="${e(p.name)}">${d?`<span class="tag">Save ${d}%</span>`:''}<button class="ic heart" data-w="${p.id}" aria-label="Wishlist">${wish.includes(p.id)?'♥':'♡'}</button></div><div class="info"><h3>${e(p.name)}</h3>${stars(p.rating)}<div class="pr"><b>${R(p.price)}</b>${d?`<s>${R(p.mrp)}</s>`:''}</div></div><div class="act"><a class="btn" href="https://wa.me/${WA}?text=${encodeURIComponent('Hi Homeify, I am interested in: '+p.name)}" rel="noopener">View Details</a><button class="btn" data-c="${p.id}">Add to Cart</button></div></article>`};
function render(){const q=$('#q').value.toLowerCase(),m=$('#mat').value,s=$('#sort').value;
let l=P.filter(p=>(room=='all'||p.room==room)&&(!m||p.mat==m)&&(!q||(p.name+p.cat).toLowerCase().includes(q)));
if(s)l.sort((a,b)=>s=='lo'?a.price-b.price:b.price-a.price);
$('#grid').innerHTML=l.length?l.map(card).join(''):'<p>Nothing here yet. Message us on WhatsApp and we will build it to order.</p>';$('#count').textContent=l.length+' pieces';
$('#rooms').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.r==room))}
function counts(){$('#wc').textContent=wish.length;$('#cc').textContent=cart.length;save('hw',wish);save('hc',cart)}
function open(md){mode=md;const ids=md=='cart'?cart:wish,l=ids.map(i=>P.find(p=>p.id==i)).filter(Boolean);
$('#dtitle').textContent=md=='cart'?'Your Enquiry Cart':'Wishlist';
$('#dlist').innerHTML=l.length?l.map(p=>`<div class="row"><img src="${p.img}" alt=""><div style="flex:1"><div>${e(p.name)}</div><b>${R(p.price)}</b></div><button class="ic" data-x="${p.id}" aria-label="Remove">✕</button></div>`).join(''):'<p>Nothing saved yet.</p>';
const t=l.map(p=>'- '+p.name+' ('+R(p.price)+')').join('\n');$('#dsend').href=`https://wa.me/${WA}?text=${encodeURIComponent('Hi Homeify, I would like a quote for:\n'+t)}`;
$('#drawer').classList.add('on');$('#scrim').classList.add('on')}
const shut=()=>{['#drawer','#links','#scrim'].forEach(s=>$(s).classList.remove('on'))};
const tog=(a,i)=>{const k=a.indexOf(i);k<0?a.push(i):a.splice(k,1)};
document.addEventListener('click',ev=>{const t=ev.target.closest('[data-w],[data-c],[data-x],[data-r],[data-room]');
if(t){if(t.dataset.w){tog(wish,t.dataset.w);t.textContent=wish.includes(t.dataset.w)?'♥':'♡'}
if(t.dataset.c){if(!cart.includes(t.dataset.c))cart.push(t.dataset.c);open('cart')}
if(t.dataset.x){tog(mode=='cart'?cart:wish,t.dataset.x);open(mode)}
if(t.dataset.r){room=t.dataset.r;render()}
if(t.dataset.room){room=t.dataset.room;render();shut()}counts()}});
$('#burger').onclick=()=>{$('#links').classList.add('on');$('#scrim').classList.add('on')};$('#scrim').onclick=$('#dclose').onclick=shut;
$('#cbtn').onclick=()=>open('cart');$('#wbtn').onclick=()=>open('wish');
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',shut));
['#q','#mat','#sort'].forEach(s=>$(s).addEventListener('input',render));
const wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);$('#vizbtn').href=wa('Hi Homeify, here is a photo of my room. Which piece would suit it?');$('#consult').href=wa('Hi Homeify, I would like to book a free consultation.');
$('#rooms').innerHTML=ROOMS.map(r=>`<button data-r="${r[0]}">${r[1]}</button>`).join('');
Promise.all(['products','highlights','reviews'].map(f=>fetch(f+'.json').then(r=>r.json()))).then(([p,h,rv])=>{P=p;
const ms=[...new Set(P.map(x=>x.mat).filter(Boolean))];$('#mat').innerHTML='<option value="">All materials</option>'+ms.map(k=>`<option value="${k}">${MATS[k]||k}</option>`).join('');$('#mat').hidden=ms.length<2;
$('#rail').innerHTML=h.map(i=>P.find(x=>x.id==i)).filter(Boolean).map(card).join('');
$('#rev').innerHTML=rv.map(r=>`<div class="rev"><div class="st">${'★'.repeat(r.stars)}</div><p>${e(r.text)}</p><b>${e(r.name)}</b>, ${e(r.place)}${r.sample?' <small>(sample)</small>':''}</div>`).join('');render();counts()});
})();

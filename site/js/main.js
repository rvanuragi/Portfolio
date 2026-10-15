
const $=i=>document.getElementById(i),E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fig=(s,t)=>'<figure class="fig"><img src="'+E(s[1])+'"'+(s[2]?' data-fb="'+E(s[2])+'"':'')+' alt="'+E(t+' — '+s[0])+'" loading="lazy"><figcaption>'+E(s[0])+'</figcaption></figure>';
const L=a=>a.length?'<ul>'+a.map(x=>'<li>'+E(x)+'</li>').join('')+'</ul>':'';
document.title=DATA.name+' — Hardware Engineer';
$('brand').innerHTML='<i class="logo">RA</i>'+E(DATA.name);$('quote').textContent=DATA.quote;$('name').textContent=DATA.name;$('role').textContent=DATA.role;$('summary').textContent=DATA.summary;$('cv').href=DATA.cv;
$('stats').innerHTML=DATA.stats.map(s=>'<div class="stat"><b>'+E(s[0])+'</b><span>'+E(s[1])+'</span></div>').join('');
$('aboutText').innerHTML=DATA.about.map(p=>'<p>'+E(p)+'</p>').join('');
$('ds').innerHTML=DATA.datasheet.map(r=>'<div><span>'+E(r[0])+'</span><b>'+E(r[1])+'</b></div>').join('');
$('projList').innerHTML=DATA.projects.map(p=>'<article class="case"><div class="ch mo"><span class="ref">'+E(p.ref)+' · CASE STUDY</span><span>'+E(p.year)+'</span></div><h3>'+E(p.title)+'</h3><p class="sub mo">'+E(p.sub)+'</p>'+
'<div class="cols"><div><h4>THE BRIEF</h4><p>'+E(p.brief)+'</p></div><div><h4>THE BUILD</h4>'+L(p.build)+'</div><div><h4>THE RESULT</h4><p>'+E(p.result)+'</p></div></div>'+
'<div class="spec">'+p.spec.map(s=>'<div><span>'+E(s[0])+'</span><b>'+E(s[1])+'</b></div>').join('')+'</div>'+'<h4 class="mo">THE BOARDS</h4><div class="slots">'+p.slots.map(s=>fig(s,p.title)).join('')+'</div>'+
'<div class="tags">'+p.tags.map(t=>'<i>'+E(t)+'</i>').join('')+'</div></article>').join('');
$('skillList').innerHTML=DATA.skills.map(s=>'<div><b>'+E(s[0])+'</b><h3>'+E(s[1])+'</h3><p>'+E(s[2])+'</p></div>').join('');
$('jobs').innerHTML=DATA.jobs.map(j=>'<div class="job"><h3>'+E(j[0])+'</h3><div class="mo">'+E(j[1])+'</div>'+L(j[2])+'</div>').join('');
$('patents').innerHTML=DATA.patents.map(p=>'<div class="card"><code>DESIGN/PATENT '+E(p[0])+'</code><b>'+E(p[1])+'</b><p>'+E(p[2])+'</p></div>').join('')+'<a class="btn" href="'+E(DATA.certLink)+'" target="_blank" rel="noopener">View certificates</a>';
$('awards').innerHTML=DATA.awards.map(a=>'<div class="card"><b>'+E(a[0])+'</b><p>'+E(a[1])+'</p></div>').join('');
$('gallery').innerHTML=DATA.gallery.map(g=>fig(g,'Award photo')).join('');
$('courses').innerHTML='<div class="card"><code>COURSE · '+E(DATA.course[1])+'</code><b>'+E(DATA.course[0])+'</b><p>'+E(DATA.course[2])+'</p></div><a class="btn" href="'+E(DATA.course[3])+'" target="_blank" rel="noopener">View certificate</a>';
$('cbtn').innerHTML='<a class="btn p" href="mailto:'+E(DATA.email)+'">Email me</a><a class="btn" id="rdl" href="'+E(DATA.cv)+'" download>Download CV</a><a class="btn" href="'+E(DATA.linkedin)+'" target="_blank" rel="noopener">LinkedIn</a>';
fetch(DATA.cv,{method:'HEAD'}).then(r=>{if(!r.ok)throw 0}).catch(()=>{if(location.protocol!=='file:')['rdl','cv'].forEach(i=>{const a=$(i);a.removeAttribute('href');a.removeAttribute('download');a.textContent='CV coming soon';a.style.opacity='.6'})});
$('cline').textContent=DATA.cline;
$('pins').innerHTML=[['1 · EMAIL','mailto:'+DATA.email,DATA.email],['2 · PHONE','tel:'+DATA.phone.replace(/\s/g,''),DATA.phone],['3 · LINKEDIN',DATA.linkedin,'ravi-anuragi']].map(p=>'<a class="pin" href="'+E(p[1])+'"><i>'+p[0].split(' · ')[0]+' '+p[0].split(' · ')[1].slice(0,5)+'</i><b>'+E(p[2])+'</b></a>').join('');
$('foot').innerHTML='© 2026 · designed &amp; routed by '+E(DATA.name)+' · <a href="#top">BACK TO TOP</a>';
$('extra').innerHTML='<div class="edu">'+DATA.education.map(e=>'<div><b>'+E(e[0])+'</b><span>'+E(e[1])+'</span></div>').join('')+'</div><div class="bom"><h4>FOCUS / BILL OF MATERIALS</h4><div class="tags">'+DATA.focus.map(t=>'<i>'+E(t)+'</i>').join('')+'</div></div>';
/* hero PCB */
const NS='http://www.w3.org/2000/svg',svg=$('svg');
svg.innerHTML='<rect class="pcb" x="8" y="8" width="504" height="344" rx="14"/>'+[[24,24],[496,24],[24,336],[496,336]].map(h=>'<circle class="hole" cx="'+h[0]+'" cy="'+h[1]+'" r="6"/>').join('')+
['M140 170H200','M125 247H230V240','M320 180H380','M320 140H350V75H380','M320 220H350V257H380','M260 120V64','M130 65H165V150H200','M260 240V290'].map(d=>'<path class="tr" d="'+d+'"/>').join('');
const read=$('read');const set=p=>{document.querySelectorAll('.part').forEach(x=>x.classList.remove('on'));p.g.classList.add('on');read.innerHTML='<b>'+p.d[0]+' · '+E(p.d[1])+'</b><br>'+E(p.d[2])};
DATA.parts.forEach(d=>{const g=document.createElementNS(NS,'g');g.setAttribute('class','part');g.setAttribute('tabindex','0');g.setAttribute('role','button');g.setAttribute('aria-label',d[0]+' '+d[1]);
g.innerHTML='<rect x="'+d[3]+'" y="'+d[4]+'" width="'+d[5]+'" height="'+d[6]+'" rx="4"/><text x="'+(d[3]+d[5]/2)+'" y="'+(d[4]+d[6]/2-2)+'">'+E(d[0])+'</text><text x="'+(d[3]+d[5]/2)+'" y="'+(d[4]+d[6]/2+11)+'" style="fill:var(--mute)">'+E(d[1])+'</text>';
const o={g,d};['mouseenter','focus','click'].forEach(ev=>g.addEventListener(ev,()=>set(o)));svg.appendChild(g);if(d[0]==='U1')set(o)});
$('theme').onclick=()=>{const r=document.documentElement,dk=r.dataset.theme?r.dataset.theme==='dark':!matchMedia('(prefers-color-scheme: light)').matches;r.dataset.theme=dk?'light':'dark'};

document.addEventListener('click',e=>{const t=e.target;if(t.matches('.fig img')){$('lb').querySelector('img').src=t.src;$('lb').classList.add('on')}else if(t.closest('#lb'))$('lb').classList.remove('on')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('lb').classList.remove('on')});
document.querySelectorAll('.fig img').forEach(i=>i.addEventListener('error',()=>{if(i.dataset.fb&&!i.dataset.tried){i.dataset.tried=1;i.src=i.dataset.fb;return}const f=i.closest('.fig');if(!SHOW_PLACEHOLDERS){f.remove();return}const d=document.createElement('div');d.className='ph';d.innerHTML='<b>Add image</b><span>'+E(i.getAttribute('src'))+'</span>';i.replaceWith(d)}));

/* ===== Cursor-following robot ===== */
(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fixedBot=reduce||matchMedia('(pointer: coarse)').matches;
const b=document.createElement('div');b.id='bot';b.setAttribute('aria-hidden','true');
b.innerHTML='<div class="say"></div><svg viewBox="0 0 64 72"><line class="bt-ant" x1="32" y1="14" x2="32" y2="5"/><circle class="bt-led" cx="32" cy="4" r="3"/><rect class="bt-head" x="8" y="14" width="48" height="32" rx="10"/><rect class="bt-screen" x="14" y="20" width="36" height="20" rx="6"/><g id="bteyes"><circle class="eye bt-eye" cx="25" cy="29" r="4.3"/><circle class="eye bt-eye" cx="39" cy="29" r="4.3"/></g><path class="bt-mouth" d="M27 36h10"/><rect class="bt-body" x="16" y="49" width="32" height="14" rx="6"/><circle class="bt-head" cx="22" cy="67" r="4"/><circle class="bt-head" cx="42" cy="67" r="4"/></svg>';
document.body.appendChild(b);
const say=b.querySelector('.say'),mouth=b.querySelector('.bt-mouth'),eyes=b.querySelector('#bteyes');
const M={n:'M27 36h10',h:'M26 35q6 6 12 0',s:'M30 36a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'};
let mouse={x:innerWidth/2,y:innerHeight/2},pos={x:mouse.x,y:mouse.y},last=Date.now(),st=0,tm,mt;
const mood=(k,ms)=>{mouth.setAttribute('d',M[k]);clearTimeout(mt);if(ms)mt=setTimeout(()=>mouth.setAttribute('d',M.n),ms)};
const talk=t=>{say.textContent=t;say.classList.add('on');clearTimeout(tm);tm=setTimeout(()=>say.classList.remove('on'),1800)};
const wake=()=>{last=Date.now();if(b.classList.contains('sleep')){b.classList.remove('sleep');mood('s',500);talk('!')}};
addEventListener('pointermove',e=>{mouse={x:e.clientX,y:e.clientY};wake()},{passive:true});
addEventListener('pointerdown',e=>{mouse={x:e.clientX,y:e.clientY};wake();b.classList.add('jump');setTimeout(()=>b.classList.remove('jump'),450);mood('h',700);if(Math.random()<.5)talk('beep boop')});
const MSG=[['.part','Chip spotted!'],['.case','Nice board!'],['.card','Granted!'],['.fig img','Click to zoom'],['a[href^="mailto"]','Say hi!'],['#theme','Lights?'],['.lib div','Tools of the trade'],['a,button','Click me!']];
addEventListener('mouseover',e=>{for(const [s,t] of MSG){if(e.target.closest&&e.target.closest(s)){mood('h',1200);talk(t);return}}});
const secs={about:'Datasheet time',projects:'Boards!',skills:'My toolbox',experience:'Rev history',recognition:'Trophies!',contact:'Let\'s talk'};
new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting&&x.intersectionRatio>.35){mood('s',400);talk(secs[x.target.id]);}}),{threshold:.35}).observe&&Object.keys(secs).forEach(id=>{const el=document.getElementById(id);if(el)new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){mood('h',900);talk(secs[id])}}),{threshold:.4}).observe(el)});
setInterval(()=>{if(Date.now()-last>8000&&!b.classList.contains('sleep')){b.classList.add('sleep');mood('n');talk('zzz')}if(!b.classList.contains('sleep')&&Math.random()<.4){b.classList.add('blink');setTimeout(()=>b.classList.remove('blink'),140)}},2500);
const clamp=(v,a,c)=>Math.max(a,Math.min(c,v));
(function loop(){
const tx=fixedBot?innerWidth-76:clamp(mouse.x+22,0,innerWidth-60),ty=fixedBot?innerHeight-96:clamp(mouse.y+20,0,innerHeight-76);
if(fixedBot||reduce){pos.x=tx;pos.y=ty}else{pos.x+=(tx-pos.x)*.12;pos.y+=(ty-pos.y)*.12}
const tilt=fixedBot?0:clamp((tx-pos.x)*.15,-16,16);
b.style.transform='translate('+pos.x.toFixed(1)+'px,'+pos.y.toFixed(1)+'px) rotate('+tilt.toFixed(1)+'deg)';
const dx=clamp((mouse.x-pos.x-28)/40,-1,1)*3,dy=clamp((mouse.y-pos.y-30)/40,-1,1)*2;
eyes.setAttribute('transform','translate('+dx.toFixed(1)+' '+dy.toFixed(1)+')');
if(!reduce)requestAnimationFrame(loop)})();
})();

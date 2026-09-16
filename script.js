const header=document.querySelector('#siteHeader');
const menuToggle=document.querySelector('#menuToggle');
const nav=document.querySelector('#siteNav');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40),{passive:true});
menuToggle.addEventListener('click',()=>{const open=header.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.before-after').forEach(slider=>{
  let dragging=false;
  const setPosition=clientX=>{const rect=slider.getBoundingClientRect();const value=Math.min(100,Math.max(0,((clientX-rect.left)/rect.width)*100));slider.style.setProperty('--pos',`${value}%`);slider.setAttribute('aria-valuenow',String(Math.round(value)))};
  const start=Number(slider.dataset.start||50);slider.style.setProperty('--pos',`${start}%`);
  slider.addEventListener('pointerdown',event=>{dragging=true;slider.setPointerCapture(event.pointerId);setPosition(event.clientX)});
  slider.addEventListener('pointermove',event=>{if(dragging)setPosition(event.clientX)});
  slider.addEventListener('pointerup',()=>dragging=false);
  slider.addEventListener('pointercancel',()=>dragging=false);
  slider.addEventListener('keydown',event=>{const current=Number(slider.getAttribute('aria-valuenow'));if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();const next=Math.min(100,Math.max(0,current+(event.key==='ArrowRight'?3:-3)));slider.style.setProperty('--pos',`${next}%`);slider.setAttribute('aria-valuenow',String(next))}});
});

document.querySelectorAll('.accordion details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open){document.querySelectorAll('.accordion details').forEach(other=>{if(other!==detail)other.open=false})}}));

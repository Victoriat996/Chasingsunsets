const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>40));
document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

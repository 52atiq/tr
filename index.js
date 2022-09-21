const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav ul li a').
// forEach(link =>{
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add('active')
//     }
// })

document.querySelectorAll('.nav-link').forEach
(
    link=>{
        if(link.href === window.location.href){
            link.setAttribute('aria-current', 'page')
        }
    }
)
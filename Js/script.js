

const navBar = document.querySelector('nav');
window.addEventListener('scroll',()=>{
if(scrollY>612){
    navBar.classList.add('sticky');
    // document.body.style.backgroundColor="red";
}
else{
  navBar.classList.remove('sticky');
}
});


const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
let typed=new Typed(".multiple-text",{
    strings:["Web Development","DSA","Object Oriented"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

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
var typed=new Typed(".multiple-text",{
    strings:["Web Development","DSA","Object Oriented"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
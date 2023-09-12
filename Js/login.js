// const trigger=document.querySelector('.trigger');
const wrapper=document.querySelector('.modal_wrapper');
const closeBtn=document.querySelector('.close');
document.querySelectorAll('.trigger').forEach((trigger)=>{

    trigger.addEventListener('click',()=>{
        openModel();
    });
})
closeBtn.addEventListener('click',()=>{
    closeModel();
});
wrapper.addEventListener('click',(e)=>{
    if(e.target !== wrapper) return;//e. target means jaha hum click kar rahe agar wo wrapper nahi hai to kuchh nahi hoga
    closeModel();
});
document.addEventListener('keydown',(event)=>{
    if(event.key==='Backspace'){
        closeModel();
    }
})
function openModel(){
    wrapper.classList.add('active');
}
function closeModel(){
    wrapper.classList.remove('active');
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
loginForm.style.marginLeft = "-50%";
loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
loginForm.style.marginLeft = "0%";
loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
signupBtn.click();
return false;
});
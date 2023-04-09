
//Menu Login
const Loginform=document.querySelector('.Loginform')
const MainButton=document.querySelector('.MainButton')
const Registerform=document.querySelector('.Registerform')
const Registerbtn=document.querySelector('.Registerbtn')
MainButton.addEventListener('click',()=>{
  Loginform.classList.add('Loginform-box')
})
Registerbtn.addEventListener('click',() =>{
  Loginform.classList.remove('Loginform-box')
  Registerform.classList.add('Registerform-box')
  
})
//Media
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "#4EEE94";
  } else {
   document.body.style.backgroundColor = "#fff";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
//
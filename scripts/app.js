document.body.onload=()=>{
    document.querySelector('.loader').style.cssText='opacity:0; display:none;';
    console.log('Body Loaded');
};
const navbarOpenBtn=document.querySelector('.navbar_toggler_icon_open');
const sideNavOpen=document.querySelector('.navbar_top');

navbarOpenBtn.addEventListener('click',()=>{
  if(navbarOpenBtn.classList.contains('open_side_nav')){
    sideNavOpen.style.cssText='transform: scale(1);'
    console.log('Button press');
    navbarOpenBtn.classList.toggle('open_side_nav')
  }
  else{
    sideNavOpen.style.cssText='transform: scale(0);'
    navbarOpenBtn.classList.toggle('open_side_nav')
  }
    
});

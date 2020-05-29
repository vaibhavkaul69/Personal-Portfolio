document.body.onload=()=>{
    document.querySelector('.loader').style.cssText='opacity:0; display:none;';
    console.log('Body Loaded');
};
const navbarOpenBtn=document.querySelector('.navbar_toggler_icon_open');
const sideNavOpen=document.querySelector('.navbar_top');

navbarOpenBtn.addEventListener('click',()=>{
  if(navbarOpenBtn.classList.contains('open_side_nav')){
    sideNavOpen.style.opacity='0';
    navbarOpenBtn.classList.toggle('open_side_nav')
  }
  else{
    sideNavOpen.style.opacity='1';
    navbarOpenBtn.classList.toggle('open_side_nav')
  }
    
});

document.body.onload=()=>{
    document.querySelector('.loader').style.cssText='opacity:0; display:none;';
    console.log('Body Loaded');
};
const navbarOpenBtn=document.querySelector('.navbar_toggler_icon_open');
const sideNavOpen=document.querySelector('.navbar_top');
const imageArray=['/assets/vaibhav-photo.webp','/assets/vaibhav-photo-hover.png','/assets/vaibhav-photo-interval.png'];
const about=document.querySelector('.about');
const skills=document.querySelector('.skills');
const internships=document.querySelector('.internships');
const projects=document.querySelector('.projects');
const resume=document.querySelector('.resume');

about.addEventListener('click',()=>{

  document.getElementById('about_section').scrollIntoView();
});
skills.addEventListener('click',()=>{

  document.getElementById('skills_section').scrollIntoView();
});
internships.addEventListener('click',()=>{

  document.getElementById('internships_section').scrollIntoView();
});
projects.addEventListener('click',()=>{

  document.getElementById('projects_section').scrollIntoView();
});
resume.addEventListener('click',()=>{

  document.getElementById('resume_section').scrollIntoView();
});
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

/*
setInterval(()=>{
  let random=parseInt(Math.random()*3);
  console.log(random);

  document.querySelector('.default_display_image').src=imageArray[random];
},1000);
*/
let image=new Image();
    image=document.createElement('img');
    image.src='./assets/vaibhav-photo.png';
    
image.onload=()=>{
    document.getElementById('image').appendChild(image);
}

const createElementNode=(nodeElement)=>{
    return document.createElement(nodeElement);
}

const createTextNode=(elementNode,text)=>{
    elementNode.textContent=text;
    return;
}

const appendNode=(parent,child)=>{
    return parent.appendChild(createElementNode(child));
}

const setElementAttribute=(elementNode,attributeName,attributeValue)=>{
    return elementNode.setAttribute(attributeName,attributeValue);
}

const fadeInOut=()=>{
    document.getElementById('name_text').style.cssText='opacity:1;font-family:harryPotterFont;';
}

/*
let videoElement=appendNode(document.getElementById('intro_video'),'video');
console.log(videoElement);

let sourceElement=appendNode(videoElement,'source');
sourceElement.src='./assets/intro-back-bg-video.mp4';

videoElement.classList.add('intro_background-video');
setElementAttribute(videoElement,'loop','loop');
setElementAttribute(videoElement,'autoplay','autoplay');
setElementAttribute(sourceElement,'type','video/mp4');
*/
const nameArray=['V','a','i','b','h','a','v',' ','K','a','u','l'];


const video=document.querySelector('.intro_background-video');
video.addEventListener('timeupdate',()=>{
    console.log(video.currentTime.toFixed(1));
    if(video.currentTime.toFixed(1)==9.4){
        for(let i=0;i<12;i++){
            createTextNode(appendNode(document.getElementById('name_text'),'span'),nameArray[i]);
            fadeInOut();
        }
    }
});

video.addEventListener('ended',()=>{
    document.getElementById('image').scrollIntoView();
})

/*

document.getElementById('intro_video').innerHTML=`
    <div class="overlay"></div>
        <video loop autoplay  class="intro_background-video" >
            <source src="" type="video/mp4"/>
        </video>
`;
*/
if(typeof(Storage)!=undefined)
     {
       console.log("Local Storage Exists");
      /*Creates a variable which stores the NodeList of all 'a' tags as 
      returned by querySelectorall()
      */
       var linkHindiVideo=document.getElementById('videoRecommendHindi').querySelectorAll('a');

      /*Store value of the href attribute of the first node elements 
      'a' tag in the browsers local storage
      */

       linkHindiVideo[0].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkHindiVideo[0].href);
         linkHindiVideo[0].href='hindi-video-dashboard.html';
       });

       /*Store value of the href attribute of the second node elements 
      'a' tag in the browsers local storage
      */

      linkHindiVideo[1].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkHindiVideo[1].href);
         linkHindiVideo[1].href='hindi-video-dashboard.html';
       });

       /*Store value of the href attribute of the third node elements 
      'a' tag in the browsers local storage
      */

      linkHindiVideo[2].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkHindiVideo[2].href);
         linkHindiVideo[2].href='hindi-video-dashboard.html';
       });

       /*Creates a variable which stores the NodeList of all 'a' tags as 
      returned by querySelectorall()
      */
      var linkPunjabiVideo=document.getElementById('videoRecommendPunjabi').querySelectorAll('a');
      
      /*Store value of the href attribute of the first node elements 
      'a' tag in the browsers local storage
      */

      linkPunjabiVideo[0].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkPunjabiVideo[0].href);
         linkPunjabiVideo[0].href='punjabi-video-dashboard.html';
       });

       /*Store value of the href attribute of the second node elements 
      'a' tag in the browsers local storage
      */

      linkPunjabiVideo[1].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkPunjabiVideo[1].href);
         linkPunjabiVideo[1].href='punjabi-video-dashboard.html';
       });

       /*Store value of the href attribute of the third node elements 
      'a' tag in the browsers local storage
      */

      linkPunjabiVideo[2].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkPunjabiVideo[2].href);
         linkPunjabiVideo[2].href='punjabi-video-dashboard.html';
       });

        /*Creates a variable which stores the NodeList of all 'a' tags as 
      returned by querySelectorall()
      */
      var linkEnglishVideo=document.getElementById('videoRecommendEnglish').querySelectorAll('a');
      
      /*Store value of the href attribute of the first node elements 
      'a' tag in the browsers local storage
      */

      linkEnglishVideo[0].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkEnglishVideo[0].href);
         linkEnglishVideo[0].href='english-video-dashboard.html';
       });

       /*Store value of the href attribute of the second node elements 
      'a' tag in the browsers local storage
      */

      linkEnglishVideo[1].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkEnglishVideo[1].href);
         linkEnglishVideo[1].href='english-video-dashboard.html';
       });

       /*Store value of the href attribute of the third node elements 
      'a' tag in the browsers local storage
      */

      linkEnglishVideo[2].addEventListener('click',function(){
         localStorage.setItem('videoLink',linkEnglishVideo[2].href);
         linkEnglishVideo[2].href='english-video-dashboard.html';
       });
     }
     else
     {
       console.log("Local Storage Is Not available");
     }
    
     /*
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/media/hindi", true);
    xhr.responseType = 'document';
    xhr.onload = () =>
     {
      let imgArray=[];
        if (xhr.status === 200) 
        {
          var elements = xhr.response.getElementsByTagName("a");
          for (x of elements) 
          {
            if ( x.href.match(/\.(jpe?g|png|gif)$/) ) 
            { 
                let img = document.createElement("img");
                img.src = x.href;
                imgArray.push(img.src);
                localStorage.setItem("image",imgArray);
                img.style.cssText="height:200px;width:200px;";
                document.body.appendChild(img);
            } 
          };
     } 
  else {
    alert('Request failed. Returned status of ' + xhr.status);
  }
}
xhr.send()
*/
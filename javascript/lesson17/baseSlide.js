var i=0;
var images=[ "https://picsum.photos/id/1001/400/300","https://picsum.photos/id/1002/400/300","https://picsum.photos/id/1003/400/300"];

var duration=1000;

function slideImg() {
    document.slide.src= images[i];

    if(i<images.length-1)
    {
        i++;
    }else
    {
      i=0; 
    }
    setTimeout("slideImg()",duration);   
} 
window.onload=slideImg;
const slideshow = document.querySelectorAll(".slideshowimage");
const slideshowheading = document.querySelectorAll(".slideshowheading")
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let imageindex = 0;

for (let index = 1; index < slideshow.length; index++) {
    slideshow[index].style.display ="none";
    slideshowheading[index].style.display="none";
}

next.addEventListener("click",function(){

    if (imageindex<(slideshow.length-1)) {

        slideshowheading[imageindex].style.display="none"
        slideshow[imageindex].style.display="none";

        slideshow[imageindex+1].style.display = "";
        slideshowheading[imageindex+1].style.display="";

        imageindex = imageindex+1;
    }
    else if((imageindex)=(slideshow.length-1))
        {

            slideshowheading[imageindex].style.display="none";
            slideshow[imageindex].style.display="none";

            imageindex=0;

            slideshowheading[imageindex].style.display="";
            slideshow[imageindex].style.display="";
        }
})

setInterval(() => {
    if (imageindex<(slideshow.length-1)) {

        slideshowheading[imageindex].style.display="none"
        slideshow[imageindex].style.display="none";

        slideshow[imageindex+1].style.display = "";
        slideshowheading[imageindex+1].style.display="";

        imageindex = imageindex+1;
    }
    else if((imageindex)=(slideshow.length-1))
        {

            slideshowheading[imageindex].style.display="none";
            slideshow[imageindex].style.display="none";

            imageindex=0;

            slideshowheading[imageindex].style.display="";
            slideshow[imageindex].style.display="";
        }
}, 10000);
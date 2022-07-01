const descriptiondetail =document.querySelectorAll(".descriptiondetail");

const showmore= document.querySelectorAll(".showmore");

const showless = document.querySelectorAll(".showless");

descriptiondetail.forEach((element) => {
    element.style.display="none";
});

showless.forEach(element => {
    element.style.display="none";
});

showmore.forEach((element,index) => {
    element.addEventListener("click",function() {
        descriptiondetail[index].style.display="";
        showless[index].style.display="";
        this.style.display="none";
    })
});

showless.forEach((element,index) => {
    element.addEventListener("click",function() {
        descriptiondetail[index].style.display="none";
        showmore[index].style.display="";
        this.style.display="none";
    })
});
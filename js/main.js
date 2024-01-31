let navbarElement = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 10){
        navbarElement.style.backgroundColor = "#F8F9FA";
    }else{
        navbarElement.style.backgroundColor = 'transparent';
    }
});
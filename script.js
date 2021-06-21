window.addEventListener("scroll", function(){
    var top = document.querySelector(".top");
    top.classList.toggle("sticky", window.scrollY > 0);

    var header = document.querySelector(".sticky-header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

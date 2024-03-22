open=document.querySelector('.open')

nav = document.getElementById('nav-side')
console.log(nav)

open.addEventListener('click', function nav_open() {
    document.getElementById('nav-side').style.display = 'block';
    document.getElementById('op').style.opacity='0.5'
  

})

function nav_close() {
    document.getElementById('nav-side').style.display = 'none';
    document.getElementById('op').style.opacity='1'
}




var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";


    }
    myIndex++;
    if (myIndex > x.length) { 
        myIndex = 1 }
    x[myIndex - 1].style.display = "block";

    setTimeout(carousel, 2000);


}
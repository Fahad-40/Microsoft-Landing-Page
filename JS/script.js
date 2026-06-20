    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburgerBtn.addEventListener("click" , () =>{
mobileMenu.classList.toggle("translate-class");

console.log("button clicked!");
    });
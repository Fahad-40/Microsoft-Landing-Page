    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburgerBtn.addEventListener("click" , (e) =>{
mobileMenu.classList.toggle("translate-class");
e.stopPropagation();
console.log("button clicked!");
    });


  document.addEventListener("click" , (e) =>{

if (!mobileMenu.contains(e.target)) {
mobileMenu.classList.add("translate-class");    
}

  })  
let barBtn = document.querySelector(".fa-bars");

let ulItems = document.querySelector(".ul-items");

barBtn.addEventListener("click", function(){
ulItems.classList.toggle('active');
})
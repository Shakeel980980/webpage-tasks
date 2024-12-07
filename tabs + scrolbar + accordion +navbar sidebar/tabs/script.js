let tabBtn= document.querySelectorAll(".tablinks");
console.log(tabBtn);

for(let i=0; i< tabBtn.length; i++){
tabBtn[i].addEventListener("click", function(){
  let tabName =  this.dataset.tab;
  let tabContant = document.getElementById(tabName);


  let tabContantall= document.querySelectorAll(".tabcontant");
  for(let n=0; n<tabContantall.length; n++){
    tabContantall[n].classList.remove("active");
  }

  let alltabBtn= document.querySelectorAll(".tablinks");
  for(let m=0; m< alltabBtn.length; m++){
    alltabBtn[m].classList.remove("activeBtn");
  }

  tabContant.classList.add("active");
  this.classList.add("activeBtn");
});
}
document.querySelector(".tablinks").click();

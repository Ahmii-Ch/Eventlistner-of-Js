// let main = document.querySelector('#main');
  
// window.addEventListener("mousemove", function(dets){
//     main.style.top = dets.clientY + "px";
//     main.style.left = dets.clientX + "px";
// });


let ul = document.querySelector("ul");
ul.addEventListener("click" ,function(dets){
    dets.target.classList.toggle("lt");
});
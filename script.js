alert("done");


// console.log("Hello");

// input ka data jo input ma ha store krwane ka lie 
// hum use krte ha function(val){
//     console.log(val.data);
// };


// let inp = document.querySelector("input");
// inp.addEventListener("input" ,function(val){
//   if(val.data !== null){
// console.log(val.data);
//   }
// });

// for selcetion of option which you selceted
// let sel = document.querySelector("select");
// sel.addEventListener("change",function(val){
//    console.log(val.target.value);
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change",function(val){
// //    console.log(val.target.value);
//     device.textContent = "Device selected"
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");


// sel.addEventListener("change",function(val){
//    console.log(val.target.value);
//     device.textContent = `${val.target.value} Device secected`
// });

// let h1 = document.querySelector("h1")
// window.addEventListener("keydown",function(dets){
//     // h1.textContent = dets.key;
//     // console.log(dets);
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// });


// akh costum input batton banana jis ma input ko ispaly none kia jaya ha or us ma costum js lakhii jatti ha

// let btn =document.querySelector("#btn");
// let fileinp =document.querySelector("#fileinp");



// btn.addEventListener("click",function(){
//    fileinp.click();
// });

// fileinp.addEventListener("change",function(dets){
//     // agr hum select ki gaii file ka name show krna chahte ha toh ya tarqyie ha

//     //  console.log(dets.target.files[0].name);
//     // console.log(dets)
//     // btn.textContent = dets.target.files[0].name

//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });
// input custom banae ka lie 

// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", input[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = input[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = input[2].value;

//     let p = document.createElement("p");
//     p.textContent = input[3].value;


//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);


//     input.forEach(function(inp){
//         if(inp.type !== "submit"){
//         inp.value = "";
//         }
//     });

// });


let cool = document.querySelector("cool");

   cool.addEventListener('MouseOver' , function(){
    cool.style.backgroundColor = "yellow"
   });




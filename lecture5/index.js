// let h1 = document.getElementsByClassName("two")
// console.log(h1[0].innerText);

// let h3= document.querySelector("h3")
// let name = prompt("enter your name")
// h3.innerText="Name"+" "+ name


//EVENTS........................
//  let h1= document.querySelector("h1")

// let p= document.createElement("p") 
// p.innerText="hello"
  //creates paragraph in h1 tag
// h1.append(p)
// console.log("h1")
//h1.innerText="hello" // without writing hello in html we can print by inner text


//...............................

//any change in data results in event

// let inp= document.querySelector("input")

// inp.addEventListener("input",function(e){
//     console.log(e.target.value); // isko use krne se input field me jitna type hoga console me b aayega

// })

// let h2= document.querySelector("h2")
// inp.addEventListener("input",function(e){
//     h2.innerText=e.target.value //isko use krne se main page pe hi input karne se type hoga

// })

//................................
//ADDING BUTTON
let btn= document.querySelector("button")
btn.addEventListener("click",function(){
    console.log("hello");
       let data=inp.value
       h2.innerText=data
       
})
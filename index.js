//console.log("hehehhe");
console.log("kyaa");
    let btn=document.querySelector("#one") //if we have used id for name (button) then in query selector we write it with # and for class .
 //  let bt=document.querySelector(".two")
    let body=document.querySelector("body")


// let h1= document.getElementsByClassName("two")

// let btn= document.querySelector("button")

// btn.addEventListener("click",fn()=>{

// })


//let btn= document.getElementById("one") //this one doesnt need symbol as it directly gets the id
// if we are using getElementByClass then it wont work as it is in the form of array and it needs indexing for the button to work or loop

    btn.addEventListener("click",function(){ //function used to call 
        //console.log("hellloo"); //prints hello when add button is clicked
        body.style.backgroundColor="pink" // chnages color when button is clicked
    })

// let inp= document.querySelector('input[type="text"]');
// let buttons= document.querySelector('input [type="button"]') // button is an array

// for (let btn of buttons){
//     btn.addEventListener("click",()=>{
//         let btnText=btn.value;
//         console.log(btnText);

//         if(btnText==="AC"){
//             inp.value=""

//         }
//         else if(btnText==='='){
//             inp.value= eval(inp.value)

//         }else{
//             inp.value+=btnText
//         }
//     });
// }

let inp = document.querySelector('input[type="text"]');
let buttons = document.querySelectorAll('input[type="button"]');

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        let btnText = btn.value;

        if (btnText === "AC") {
            inp.value = "";
        }
        else if (btnText === "=") {
            inp.value = eval(inp.value);
        }
        else {
            inp.value += btnText;
        }
    });
}
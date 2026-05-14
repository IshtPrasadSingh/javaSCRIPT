const arr =[

'https://unsplash.com/photos/person-working-at-desk-with-laptop-and-phone-oTDuuLUhH20'

]
const imageEl = document.querySelector('img');
let num = 0;

setInterval(function(){
   imageEl.setAttribute('src', arr[num]);
   num = (num+1) % arr.length;
},2000)
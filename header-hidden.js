// window.addEventListener('scroll',(event) => { 
//     let scrollTop = window.scrollHeight;
//     // console.log('2');
//     event
//     let headerWrapper = document.querySelector('#jsHeader');
//     if(scrollTop >= 100){
//         headerWrapper.classList.add('_hide');
//         // console.log('2');
//     }else{    
//         headerWrapper.classList.remove('_hide');
//         // console.log('3');
//     }
// });

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("jsHeader").classList.add("_shrink");
//     document.getElementsByClassName("header__logo");
//     console.log('2')
//   } else {
//     document.getElementById("jsHeader").classList.remove("_shrink");
//   }
// }

document.addEventListener("scroll",
function(){
    const shrinkHeader = 5;
    let headerWrapper = document.querySelector('.header__logo');
    window.addEventListener('scroll', function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              headerWrapper.classList.add('_shrink');
           }
           else {
               headerWrapper.classList.remove('_shrink')
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   });
const nameInput = document.querySelector(".card-name-input");
const cardName = document.querySelector(".card-name");

const numInput = document.querySelector(".card-num-input");
const cardNum = document.querySelector(".card-number");

function updateCardName(event) {
  console.log(event.target.value);
  cardName.textContent = event.target.value;
}

function updateCardNum(event) {
  console.log(event.target.value);
  cardNum.textContent = event.target.value;
}

numInput.addEventListener("input", updateCardNum);
nameInput.addEventListener("input", updateCardName);











// import React from "react";
// import bgMobile from "./images/bg-main-mobile.png";
// import bgDesktop from "./images/bg-main-desktop.png";

// export default function App(){
// return(
//     <>
//     <section>
//     <div className ="absolute">
//     <picture>
//     <source media="(min-width: 1024px)" srcset={byDesktop} />
//     <img src={bgMobile} alt=""/>
//     </picture>
//     </div>
//     <div className ="grid grid-cols-1 gap-8 lg:grid-cols-2">
//     <div>
//     <article>Front credit card</article>
//     <article>back credit card</article>
//     </div>
//     <div>form</div>
//     </div>
//     </section>
//     </>
// )
// }

/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// <!-- ЗАДАЧА 7 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 7</p>
//       <div class="outerCircle">
//         <div class="innerCircle"></div>
//       </div>
//     </div>


const divEL = document.querySelector(".outerCircle");
divEL.addEventListener('click', onClick);

function onClick(event) {

    const item = event.currentTarget
    console.log(item)

    if (item.style.position === "absolute") {
        
        // item.style.position = "static";
        window.removeEventListener("mousemove", onMousemove);

        return;
    }
    item.style.position = "absolute";
    
    window.addEventListener("mousemove", onMousemove)
    


}

function onMousemove(event) {

    let left = event.pageX;
    let top = event.pageY;
    divEL.style.left = left - 15 + "px";
    divEL.style.top = top - 15  + "px";

}


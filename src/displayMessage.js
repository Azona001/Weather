export function displayMessage(a)  { 
   
   const display = document.querySelector('.message');
   const text = document.createElement('span');
   text.style.fontFamily = "Anta";
   text.style.fontSize = "1.5em";
   text.style.position = "fixed";
   text.style.zIndex = "10";
   text.style.color = "rgb(199, 6, 6)";
   text.style.top = "4em";
   text.style.left = "4em";
   text.style.right = "4em";
   text.style.textShadow = " 0.1em 0.0625em 5px rgba(9, 1, 49, 0.6)";
   text.style.backgroundColor = "rgba(43, 1, 1, 0.5)";
   text.style.padding = "1.2em 1em";


   display.appendChild(text);
   text.innerHTML = `${a}`;
} ;


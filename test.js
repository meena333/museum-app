let num1 = 15;
let num2 = -12;

function addTwoNumbers(num1, num2) {
    return (num1 + num2) ;
}

console.log("The sum of "+ num1+ " and "+num2+" is "+addTwoNumbers(num1, num2));


const paragraphsHTMLCollection = document.getElementsByTagName("h1");

const paragraphsArray = Array.from(paragraphsHTMLCollection)
const lastParagraph = paragraphsArray.pop() // works!  
console.log(lastParagraph); 
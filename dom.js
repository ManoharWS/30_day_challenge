
const element = document.getElementById("p1");
element.textContent = "Paragraph1"; //we can chnage the text content
element.id = "Para1"; //we can change the id attribute value 


const element1 = document.getElementsByClassName("para");
console.log(element1)

document.getElementById("Para1").textContent = "DOM";


const element2 = document.getElementsByTagName("p");

console.log(element2); //returns HTML collection as node list

element2.item(0); //we can access node list elements as specifying in the item method
//or
element2[0]; //we can specifyimg by index number as Array, though they act like Array but they are not

Array.from(element2).forEach((item) =>{ //we can iterate each element like this

    item.style.color = "red";
});


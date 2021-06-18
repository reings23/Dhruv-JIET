const inputHeading = document.querySelector("input[name='todo-name']");
const headingButton = document.querySelector(".heading-btn");
const listName = document.querySelector(".listName");

//list items
const inputItem = document.querySelector("input[name='todo-item']");
const itemButton = document.querySelector(".item-btn")
const itemUL = document.querySelector(".items")


function extractHeading(){
    if(inputHeading.value!=""){
        listName.innertext=inputHeading.value;
        listName.parentElement.classList.add("dashed-border")
        }
}

function extractItems(){
    if(inputItem.value!=""){
        let li = document.createElement("li");
        li.innerHTML = `<input type = "checkbox"> ${inputItem.value}`;
        itemUL.appendChild(li);
        inputItem.value="";
    }
}
headingButton.addEventListener("click",extractHeading);
itemButton.addEventListener("click", extractItems);
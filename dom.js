
const message = document.getElementById("message");

document.getElementById("changeText").addEventListener("click", function () {
    message.textContent = "The text was changed using JavaScript!";
});

const styleBox = document.getElementById("styleBox");

document.getElementById("changeColor").addEventListener("click", function () {
    styleBox.style.backgroundColor = "#fff0b3";
});

document.getElementById("changeSize").addEventListener("click", function () {
    styleBox.style.fontSize = "26px";
});

const itemList = document.getElementById("itemList");

document.getElementById("addItem").addEventListener("click", function () {
    const item = document.createElement("li");

    item.textContent = "Item " + (itemList.children.length + 1);

    itemList.appendChild(item);
});

document.getElementById("removeItem").addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});
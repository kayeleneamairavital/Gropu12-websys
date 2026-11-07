let message = document.getElementById("message");
let changeMessage = document.getElementById("changeMessage");
let changeBackground = document.getElementById("changeBackground");
changeMessage.addEventListener("click", function() {
    message.textContent = "Hello! Welcome to our webpage.";
});
changeBackground.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
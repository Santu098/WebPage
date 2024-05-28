// Add an event listener to the image
document.getElementById("img-div").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

document.getElementById("img-div").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
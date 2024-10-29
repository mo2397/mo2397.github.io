
alert("this is an alert");

//how to interact with the DOM
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1")
    document.getElementById("paragraph").innerHTML = "This is the new text in Hot Pink!";
    document.getElementById("paragraph").style.color = "hotpink";
    document.getElementById("DissapearingParagraph").style.display="none";

})

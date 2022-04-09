function getWeather() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);    
    document.getElementById("myList").appendChild(li);    
    document.getElementById("myInput").value = ""; 
}
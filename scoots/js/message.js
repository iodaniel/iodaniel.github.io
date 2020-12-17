function showAlert(){
    var day = new Date();
    if(day.getDay() == 5){
        document.getElementById("message").style.display = "block";
    }
    document.getElementById("conf").innerHTML =Math.floor(Math.random() * 1000);
}
function onSubmit() {
    var e = document.getElementById("education");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("demo").innerHTML = "Searching results for " + strUser + "students" ++;

}
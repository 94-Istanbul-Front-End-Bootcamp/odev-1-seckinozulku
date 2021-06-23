const myNameSurname = "Seçkin Özülkü";
const myAge = "26";

// Kendi yaptığım gibi
// btn.onclick = function ()

function myFunction() {
    document.getElementById("nameSurname").innerHTML = myNameSurname;
    document.getElementById("age").innerHTML = myAge;
    // Kendi yaptığım gibi 
    // document.getElementById("btn").style.display = "none";
    document.querySelector("button").style.display = "none";
}
document.getElementById("linkedinUrl").setAttribute("href", "https://www.linkedin.com/in/seckinozulku/");
document.getElementById("githubUrl").setAttribute("href", "https://github.com/seckinozulku/");



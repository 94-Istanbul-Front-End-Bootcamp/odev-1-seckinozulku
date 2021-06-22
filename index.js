const myNameSurname = "Seçkin Özülkü";
const myAge = "26";

btn.onclick = function () {
    document.getElementById("nameSurname").innerHTML = myNameSurname;
    document.getElementById("age").innerHTML = myAge;
    document.getElementById("btn").style.display = "none";
}
document.getElementById("linkedinUrl").setAttribute("href", "https://www.linkedin.com/in/seckinozulku/");
document.getElementById("githubUrl").setAttribute("href", "https://github.com/seckinozulku/");



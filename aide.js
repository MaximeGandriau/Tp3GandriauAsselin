function append(parent, element) {
    return parent.appendChild(element);
}
 
const empl = document.getElementById("employees");
console.log(empl);
const url = "http://localhost:8080/ords/hr2/employees";
 
fetch(url)
    .then((resultat) => resultat.json())//return sous objet : data
    .then(function (data) {
        let employees = data.items;
        //Pour chaque employee
        return employees.map(function (employe) {
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.innerHTML = `${employe.empno} ${employe.ename}`;
            append(li, span);//ajout du span en bas du li
            append(empl, li);
        })
    })
    .catch((error) => {
        //affiche l'erreur sous forme json
        console.log(JSON.stringify(error));
    })
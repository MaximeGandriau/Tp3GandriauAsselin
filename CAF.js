function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const CAF_ul = document.getElementById("clavierAvecFiles");
const url = "http://localhost:8080/ords/hr2/clavierAvecFile";
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let ClavierAvecFiles = data.items; //.results;
        return ClavierAvecFiles.map(function (clavierAvecFile) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${clavierAvecFile.nom} - ${clavierAvecFile.comp} - $${clavierAvecFile.prix} - ${clavierAvecFile.dtls}`;
            append(li, span);
            append(CAF_ul, li);
            // }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
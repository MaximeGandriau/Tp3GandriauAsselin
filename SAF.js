function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const SAF_ul = document.getElementById("sourisAvecFil");
const url = "http://localhost:8080/ords/hr2/sourisAvecFil";
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let SourisAvecFiles = data.items; //.results;
        return SourisAvecFiles.map(function (sourisAvecFil) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${sourisAvecFil.nom} - ${sourisAvecFil.comp} - $${sourisAvecFil.prix} - ${sourisAvecFil.dtls}`;
            append(li, span);
            append(SAF_ul, li);
            // }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
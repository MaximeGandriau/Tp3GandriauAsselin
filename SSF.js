function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const SSF_ul = document.getElementById("sourisSansFil");
const url = "http://localhost:8080/ords/hr2/sourisSansFil";
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let SourisSansFil = data.items; //.results;
        return SourisSansFil.map(function (sourisSansFil) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${sourisSansFil.nom} - ${sourisSansFil.comp} - $${sourisSansFil.prix} - ${sourisSansFil.dtls}`;
            append(li, span);
            append(SSF_ul, li);
            // }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const CSF_ul = document.getElementById("ClavierSansFiles");
const url = "http://localhost:8080/ords/hr2/clavierSansFile";
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let ClavierSansFiles = data.items; //.results;
        return ClavierSansFiles.map(function (clavierSansFile) {
            // if (employee.job=='CLERK') {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${clavierSansFile.nom} - ${clavierSansFile.comp} - $${clavierSansFile.prix} -  ${clavierSansFile.dtls}`;
            append(li, span);
            append(CSF_ul, li);
            // }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
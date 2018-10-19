
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

let cont = 0;
let bitacoras = [];
let formulario = document.getElementById("bitacora");


formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    formulario.style.borderStyle="solid";

    let fecha=document.getElementById("fecha");
    let descp=document.getElementById("descp");
    let cant=document.getElementById("cant");

    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    console.log(bitacora.fecha);
    if (bitacora.fecha!='' && bitacora.descripcion!='' && bitacora.descripcion!="" && bitacora.cantidad!=0) {
        formulario.style.borderColor="green";
        bitacoras.push(bitacora);
        cont++;
        mostrar();
        fecha.style.borderStyle="solid";
        fecha.style.borderColor="green";
        descp.style.borderStyle="solid";
        descp.style.borderColor="green";
        cant.style.borderStyle="solid";
        cant.style.borderColor="green";
    }
    else{
        if(bitacora.fecha==''){
            fecha.style.borderStyle="solid";
            fecha.style.borderColor="red";
        }
        else{
            fecha.style.borderColor="green";
        }
        if(bitacora.descripcion==''){
            descp.style.borderStyle="solid";
            descp.style.borderColor="red";
        }
        else{
            descp.style.borderColor="green";
        }
        if(bitacora.cantidad==0){
            cant.style.borderStyle="solid";
            cant.style.borderColor="red";
        }
        else{
            cant.style.borderColor="green";
        }
    }
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
};

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
};

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
};

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
};
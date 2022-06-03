`use strict`

/*
 * Berisso, Paula Daniela | Rojas, Matias
 */

let discografia = [];


// Discos:
const Cargar = () => {
    let disco = {
        nombre: ``,
        autor: ``, 
        codigoNumerico: ``,
        pistas: [],
        constructor() {
            return alert(`Nuevo disco creado`);
        },
        obtenerNombre() {
        

            do {
                alerta=false;
                disco.nombre = prompt(`Ingrese el nombre del disco`);
               if ((disco.nombre === "")) {
                   alert("el nombre del disco por lo menos debe tener un caracter")
                   alerta=true;
                   
               }
            } while (alerta);
          
        },
        obtenerAutor() {
            
            do {
                alerta = false;
                disco.autor = prompt(`Ingrese el nombre del autor`);
                
                if ((disco.autor === "")) {
                    alert("el nombre del autor por lo menos debe tener un caracter")
                    alerta=true;
                    
                } 
               
               
            } while (alerta)  
             
        },
        obtenerCodigoNumerico() {
            alerta = false;
           do {
                disco.codigoNumerico = parseInt(prompt(`Ingrese el código numérico (entre 1 y 999)`));

            if (isNaN(disco.codigoNumerico)) {
                    alerta = true;
                    alert ('No ha ingresado un número.');
                } else {
                    alerta = false;
                    
                }

              
            
            if (disco.codigoNumerico > 0 && disco.codigoNumerico < 1000) {
                    control = false;
                    } else if (disco.codigoNumerico <=0) {
                        alert ('Todo número igual o menor a 0 no es válido.')
                        alerta = true;
                    } else if (disco.codigoNumerico > 999) { 
                        alerta = true;
                        alert ('Todo número mayor o igual a 1000 no es válido.')
                    }   

                
            for (let index = 0; index < discografia.length; index++) {
                let element = discografia[index];
                if (discografia[index].codigoNumerico === disco.codigoNumerico) {
                    alert ("el código ingresado ya está utilizado")
                    alerta = true;
                    
                }
                
            }

            

            
             
           } while (alerta);
              

           
        },

        agregarDisco() {
            discografia.push(disco)
        },
        agregarPista() {
            do {
                let pista = {
                    nombre: ``,
                    duracion: ``,
                    constructor() {
                        console.log(`nueva pista creada`);
                    }
                }
                do {
                    pista.nombre = prompt(`ingrese el nombre de la pista`);
                } while ((pista.nombre===""))
                do {
                    pista.duracion = parseInt(prompt(`ingrese la duracion de la pista (entre 0 y 7200 s)`));
                } while (!(pista.duracion > 0 && pista.duracion <= 7200))
                disco.pistas.push(pista)
            } while (confirm(`desea ingresar otra pista`));
        },
        duracionTotal() {
            let acum = 0;
            for (let pista of this.pistas) {
                acum += pista.duracion
            }
            return acum
        },
        promedio() {
            let promedio = this.duracionTotal() / this.pistas.length;
            return promedio.toFixed(2);
        },
        mayorDuracion() {
            let cont = 0;
            let max;
            for (let pista of this.pistas) {
                cont++;
                if (cont === 1) {
                    max = pista.duracion
                } else {
                    max = pista.duracion > max ? pista.duracion : max;
                }
            }
            return max;
        },

    }
    disco.obtenerNombre();
    disco.obtenerAutor();
    disco.obtenerCodigoNumerico();
    disco.agregarPista();
    disco.agregarDisco();  
}

// Función Mostrar:
const Mostrar = () => {

    let html = ``;
    html += `<h2>Cantidad de discos: ${discografia.length}</h2>` 

    for (let disco of discografia) {
        
        html += `<p>Nombre: ${disco.nombre}</p>`
        html += `<p>Autor: ${disco.autor}</p>`
        html += `<p>Codigo Numérico: ${disco.codigoNumerico}</p>`
        html += `<p>Duracion Total: ${disco.duracionTotal()}</p>`
        html += `<p>Promedio: ${disco.promedio()}</p>`
        html += `<p>Pista de mayor duracion: ${disco.mayorDuracion()}</p>`
        html += `<p>Cantidad de pistas: ${disco.pistas.length}</p>`
        html += `<ul>`
        for (let pista of disco.pistas) {
            html += `<li class="${pista.duracion > 180 ? "pistaLarga" : ``}">Nombre: ${pista.nombre} - Duracion: ${pista.duracion}</li>`
        }
        html += `</ul>`
        html += `<br>`
    }

    document.querySelector(`#info`).innerHTML = html;

}
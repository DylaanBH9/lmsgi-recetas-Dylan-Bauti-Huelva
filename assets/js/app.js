const document =

const xmlRecetas = await fetch("recetas.xml")
const xmlRecetasTexto = await  xmlRecetas.text()

const parser = new DOMParser()
const documentoRecetas = parser.parseFromString(xmlRecetasTexto, "application/xml")
const listaRecetasXml = documentoRecetas.querySelectorAll("receta")
const listaRecetasJson = []

listaRecetasXml.forEach(nodo => {

    let receta = {
        id: nodo.getAttribute("id"),
        tiempo: Number(nodo.querySelector("tiempo").textContent),
        dificultad: nodo.querySelector("dificultad").textContent
    }
    listaRecetasJson.push(receta)
    })

const tablaIndex = document.querySelector()

listaRecetasJson.forEach(receta => {

    const tr

    })
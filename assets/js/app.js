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
        categoria: nodo.querySelector("categoria").textContent,
        nombre: nodo.querySelector("dificultad").textContent,
        tiempo: Number(nodo.querySelector("tiempo").textContent),
        dificultad: nodo.querySelector("dificultad").textContent
    }
    listaRecetasJson.push(receta)
    })

const tablaIndex = document.querySelector("table")

listaRecetasJson.forEach(receta => {

    const tr = document.createElement("tr")
    const tdCategoria= document.createElement("td")
    const tdNombre = document.createElement("td")
    const tdTiempo= document.createElement("td")
    const tdDificultad = document.createElement("td")

    tdCategoria.textContent = receta.categoria
    tr.appendChild(tdCategoria)

    tdNombre.textContent = receta.nombre
    tr.appendChild(tdNombre)

    tdTiempo.textContent = receta.tiempo
    tr.appendChild(tdTiempo)

    tdDificultad.textContent = receta.dificultad
    tr.appendChild(tdDificultad)

    tablaIndex.appendChild(tr)
})
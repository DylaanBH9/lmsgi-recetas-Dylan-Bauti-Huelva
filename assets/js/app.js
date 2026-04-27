async function cargarXml(){
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

    const tablaIndex = document.querySelector("tbody")

    listaRecetasJson.forEach(receta => {

        const tr = document.createElement("tr")
        const tdCategoria= document.createElement("td")
        const tdNombre = document.createElement("td")
        const tdTiempo= document.createElement("td")
        const tdDificultad = document.createElement("td")

        tdCategoria.textContent = receta.categoria
        tr.appendChild(tdCategoria)
        if (receta.categoria === "Entrante") {
            tdCategoria.classList.add("badge-entrante")
        } else if (receta.categoria === "Principal") {
            tdCategoria.classList.add("badge-principal")
        } else if (receta.categoria === "Postre"){
            tdCategoria.classList.add("badge-postre")
        }

        tdNombre.textContent = receta.nombre
        tr.appendChild(tdNombre)

        tdTiempo.textContent = receta.tiempo
        tr.appendChild(tdTiempo)

        tdDificultad.textContent = receta.dificultad
        tr.appendChild(tdDificultad)

        tablaIndex.appendChild(tr)
    })
}
cargarXml()
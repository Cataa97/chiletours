// const destinos = ['Santiago', 'Viña', 'San Felipe'];
// function myFunction() {
//   var x = document.getElementById("mySelect");
//   destinos.forEach((a) => {
//     var option = document.createElement("option");
//     option.text = a;
//     option.className = "hola";
//     x.add(option);
//   })
// }
// myFunction();

function draw_destinos() {
    let allDestinos = [
        "Santiago",
        "Viña del mar",
        "San Felipe",
        "Antofagasta",
        "Arica",
    ]
    for (let i = 0; i < allDestinos.length; i++) {
        InsertDestino(allDestinos[i])
    }
}

function InsertDestino(destinosName) {
    const selectElemend = document.getElementById("destinos") //
    let htmlToInser = `<option> ${destinosName} </option>`
    selectElemend.insertAdjacentHTML("beforeend", htmlToInser)
}

draw_destinos()
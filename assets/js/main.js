
const dropDowns = document.querySelectorAll(".dropdown");
dropDowns.forEach((dropDown) => {
    const select = dropDown.querySelector(".select");
    const arrow = dropDown.querySelector(".arrow");
    const menu = dropDown.querySelector(".menu");
    const menuItems = dropDown.querySelectorAll(".menu li");
    const selectTitle = dropDown.querySelector(".select-title");
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        arrow.classList.toggle("arrow-rotate");
        menu.classList.toggle("menu-open");
    });


    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            selectTitle.innerText = item.innerText;
            select.classList.remove("select-clicked");
            arrow.classList.remove("arrow-rotate");
            menu.classList.remove("menu-open");
            menuItems.forEach((item) => {
                item.classList.remove("active");
            });
            item.classList.add("active");
        });
    });
});





function poto() {
    const destinos = document.getElementById("mySelect");
    const ciudades = ['San Pedro de Atacama', 'Isla de Pascua', 'La Serena, playas y astronmía', 'Distrito de Lagos y Volcanes', 'Valparaíso, Santiago y Viñedos', 'Patagonia Norte y Bosque Nativo'];
    ciudades.forEach((a, i) => {
        const imagen = document.createElement("div");
        imagen.setAttribute("class", "container_destinos_col");
        imagen.innerHTML = ` 
    
       
          <div
            class="container_destinos_img-big"
            style="
              background-image: url(./assets/img/destinos/${i}.jpg);
            "
          >
            <div class="container_destinos_info">
              <div class="dropdown">
                <button
                  onclick="myFunction()"
                  class="container_destinos_info-a"
                >
                  ${a}
                </button>

                <div id="myDropdown" class="dropdown-content">
                  <a
                    class="dropdown-item"
                    href="#"
                    >Tours</a
                  >
                  <a
                    class="dropdown-item"
                    href="#
                    >Actividades</a
                  >
                </div>
              </div>
            </div>
          </div>
        
    
      `;

        destinos.appendChild(imagen);

    })
}

poto();


function formulario() {
    const destinosForm = document.getElementById("myForm");
    const ciudadesForm = ['San Pedro de Atacama', 'Isla de Pascua', 'La Serena, playas y astronmía', 'Distrito de Lagos y Volcanes', 'Valparaíso, Santiago y Viñedos', 'Patagonia Norte y Bosque Nativo'];
    ciudadesForm.forEach((a, i) => {
        const formulario = document.createElement("option");
        destinosForm.setAttribute("class", "sel")
        formulario.setAttribute("class", "paraAbajo");
        formulario.text = a;
       

        destinosForm.appendChild(formulario);

    })
}

formulario();


function date() {
    const destinosForm = document.getElementById("mydate");
    const ciudadesForm = ['San Pedro de Atacama', 'Isla de Pascua', 'La Serena, playas y astronmía', 'Distrito de Lagos y Volcanes', 'Valparaíso, Santiago y Viñedos', 'Patagonia Norte y Bosque Nativo'];
    ciudadesForm.forEach((a, i) => {
        const formulario = document.createElement("date");
        destinosForm.setAttribute("class", "sel")
        formulario.setAttribute("class", "paraAbajo");
        formulario.text = a;
       

        destinosForm.appendChild(formulario);

    })
}

date();



const seccionPrincipal = document.querySelector(".adopt");

const gatos = [
  {
    name: 'Rodolfo',
    shortDesc:
      'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
    colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
    sexo: 'm',
  },

  {
    name: 'Muzzarella',
    shortDesc:
      'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
    colores: ['gris'],
    sexo: 'f',
  },

  {
    name: 'Artilugia',
    shortDesc:
      'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
    colores: ['negro', 'blanco'],
    sexo: 'f',
  },

  {
    name: 'Wosito',
    shortDesc:
      'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
    colores: ['rayado'],
    sexo: 'm',
  },

  {
    name: 'Calamardo',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },
];



let gatosEnHtml
seccionPrincipal.innerHTML = `  `
gatosEnHtml = gatos.map((gatos) => {
  seccionPrincipal.innerHTML +=
    `   <div class="card">
      <div class="card_img">
      <img src="${gatos.img}" />
      </div>
      <div class="card_info">
      <h3>${gatos.name}</h3>
      <p>${gatos.shortDesc}<p>
      <button class="verMas" data-name="${gatos.name}">Ver mas</button>
      </div>
    </div>`

})

const verMasBotones = document.querySelectorAll(".verMas")
const verMasModal = document.querySelectorAll(".verMasModal")
const overlay = document.querySelector("#overlay")
overlay.innerHTML = `  `
let gatosModal


verMasBotones.forEach((verMasBoton, indiceVerMas) => {
  verMasBoton.onclick = () => {

    console.log("me hicieron click" + indiceVerMas)
    overlay.classList.remove("hidden")

    gatosModal = gatos.map((gatos) => {
      if (gatos.name === verMasBoton.dataset.name) {

        overlay.innerHTML = `
      <div class="modalGato">
      <div class="verMasModal">
        <button class="cierreModal"><i class="fas fa-times"></i></button>
        <div class="modalDescripcion">
          <div class="posicionModal">
            <h2> Ver Más</h2>
            <h3> ${gatos.name} </h3>
            <div class="posicionModal">
              <p>
              ${gatos.longDesc}
              </p>
            </div>
          </div>
        </div>
        <div class="verMasImg">
        <img id="fotoDeGato" src="${gatos.img}">
      </div>
    </div>
    </div>
    `
    const cierreModal =document.querySelector(".cierreModal")
    console.log(cierreModal)
  
    cierreModal.onclick=()=>{

      overlay.classList.add("hidden")
    }

  }
    })

  }


})



/*ARREGLOS DE OBJETOS*/
const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Cabaña en el bosque",
    src: "assets/img/lujosa3.webp",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la playa",
    src: "assets/img/lujosa4.webp",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: true,
    pets: true,
  },
];

const propiedades_ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5.0,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1.2,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con piscina privada",
    src: "assets/img/lujosa1.webp",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica y piscina",
    src: "assets/img/lujosa2.webp",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },
];

/*ARREGLOS DE OBJETOS*/

function buildcard(propiedades) {
  let htmlInmueble = `

           <div class="card">
             <img src="${propiedades.src}" class="card-img-top" alt="Imagen del departamento"/>

             <div class="card-body">
               <h5 class="card-title">
                 ${propiedades.nombre}
               </h5>
               <p class="card-text">
                ${propiedades.descripcion}
               </p>
               <p>
                 <i class="fas fa-map-marker-alt"></i>${propiedades.ubicacion}
               </p>
               <p>
                 <i class="fas fa-bed"></i> ${propiedades.habitaciones} |
                 <i class="fas fa-bath"></i> ${propiedades.baños} Baños
               </p>
               <p><i class="fas fa-dollar-sign"></i> ${propiedades.costo}</p>

          
`;
  if (propiedades.smoke) {
    htmlInmueble += `<p class="text-success"> <i class="fas fa-smoking"></i>Se permite fumar</p>`;
  } else {
    htmlInmueble += `<p class="text-danger"> <i class="fas fa-smoking-ban"></i>No se permite fumar</p>
                  `;
  }

  if (propiedades.pets) {
    htmlInmueble += `<p class="text-success"> <i class="fas fa-paw"></i>Se permite mascotas</p>
                  </div></div>`;
  } else {
    htmlInmueble += `<p class="text-danger"> <i class="fa-solid fa-ban"></i>No se permitem mascotas</p>
                  </div></div>`;
  }

  return htmlInmueble;
}

function addListcardById(htmlId, dataArray) {
  let inmueblesCardList = "";
  for (let inmueble of dataArray) {
    const inmuebleCard = buildcard(inmueble);

    inmueblesCardList += `
      <div class="col-md-4 mb-4">
      ${inmuebleCard}
      </div> 
      `;
  }
  htmlId.innerHTML = inmueblesCardList;
}

const inmueblesRowVentaId = document.querySelector("#inmueblesVenta");
const inmueblesRowAlquiler = document.querySelector("#inmueblesAlquiler");
const inmueblesVentaPreview = document.querySelector("#inmueblesVentaPreview");
const inmueblesAlquilerPreview = document.querySelector("#inmueblesAlquilerPreview");


if (inmueblesRowVentaId) {
  addListcardById(inmueblesRowVentaId, propiedades_ventas);
}

if (inmueblesRowAlquiler) {
  addListcardById(inmueblesRowAlquiler, propiedades_alquiler);
}

if (inmueblesVentaPreview) {
  addListcardById(inmueblesVentaPreview, propiedades_ventas.slice(0, 3));
}

if (inmueblesAlquilerPreview) {
  addListcardById(inmueblesAlquilerPreview, propiedades_alquiler.slice(0, 3));
}



/*


const inmueblesRowVentaId = document.querySelector("#inmueblesVenta");
if (inmueblesRowVentaId) {

  let inmueblesCardList = "";
  for (let inmueble of propiedades_ventas) {
    const inmuebleCard = buildcard(inmueble);

    inmueblesCardList += `
    <div class="col-md-4 mb-4">
    ${inmuebleCard}
    </div> 
    `;
  }
  inmueblesRowVentaId.innerHTML = inmueblesCardList;
}




const inmueblesRowAlquiler = document.querySelector("#inmueblesAlquiler");
if (inmueblesRowAlquiler) {
  let htmlInmueblesRenta = "";
  for (let ObjetoInmueble of propiedades_alquiler) {
    const inmuebleRentaCard = buildcard(ObjetoInmueble);

    htmlInmueblesRenta += `
    <div class="col-md-4 mb-4">
    ${inmuebleRentaCard}
    </div> 
    `;
  }
  inmueblesRowAlquiler.innerHTML = htmlInmueblesRenta;
}
  */

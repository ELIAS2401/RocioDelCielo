// Array de productos (puede ir en productos.json)
const productos =
    [
        {
            "nombre": "Budín de Vainilla",
            "precio": 3500,
            "descripcion": "Budín casero esponjoso con aroma a vainilla.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Vainilla 🍮"
        },
        {
            "nombre": "Budín de Naranja",
            "precio": 3600,
            "descripcion": "Budín suave con jugo natural de naranja.",
            "imagen": "img/imgProductos/budinNaranja.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Naranja 🍊"
        },
        {
            "nombre": "Budín de Limón",
            "precio": 3500,
            "descripcion": "Budín casero con glaseado de limón.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Limón 🍋"
        },
        {
            "nombre": "Budín de Mandarina",
            "precio": 3600,
            "descripcion": "Budín húmedo y aromático con mandarina fresca.",
            "imagen": "img/imgProductos/budinMandarina.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Mandarina 🍊"
        },
        {
            "nombre": "Budín de Chips de Chocolate",
            "precio": 3800,
            "descripcion": "Budín esponjoso con chips de chocolate.",
            "imagen": "img/imgProductos/budinChip.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Chips de Chocolate 🍫"
        },
        {
            "nombre": "Budín de Marmolado",
            "precio": 3700,
            "descripcion": "Clásico budín marmolado con vainilla y chocolate.",
            "imagen": "img/imgProductos/budinMarmolado.jpg",
             "mensaje": "Hola, quiero pedir el Budín Marmolado 🍫🍦"
        },
        {
            "nombre": "Budín de Banana Split",
            "precio": 3900,
            "descripcion": "Budín de banana con chips de chocolate y un toque especial.",
            "imagen": "img/imgProductos/budinBanana.jpg",
             "mensaje": "Hola, quiero pedir el Budín de Banana Split 🍌🍫"
        },
        {
            "nombre": "Alfajores Marplatenses",
            "precio": 2500,
            "descripcion": "Alfajores rellenos con dulce de leche y baño de chocolate.",
            "imagen": "img/imgProductos/marplatense.jpg",
             "mensaje": "Hola, me interesan los Alfajores Marplatenses 🍫"
        },
        {
            "nombre": "Alfajores Pepitos",
            "precio": 2400,
            "descripcion": "Alfajores rellenos cubiertos con chips de chocolate.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
             "mensaje": "Hola, me interesan los Alfajores Pepitos 🍪"
        },
        {
            "nombre": "Alfajores de Maicena",
            "precio": 2500,
            "descripcion": "Clásicos alfajores con mucho dulce de leche y coco.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
             "mensaje": "Hola, me interesan los Alfajores de Maicena 🥥"
        },
        {
            "nombre": "Alfajores con Maní/Nueces",
            "precio": 2600,
            "descripcion": "Alfajores caseros con relleno y crocante de frutos secos.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
             "mensaje": "Hola, me interesan los Alfajores con Maní o Nueces 🥜🌰"
        },
        {
            "nombre": "Alfajores con Chocolate Blanco",
            "precio": 2700,
            "descripcion": "Alfajores rellenos bañados en chocolate blanco.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
             "mensaje": "Hola, me interesan los Alfajores con Chocolate Blanco 🤍🍫"
        }
    ];

// Número de WhatsApp
const numeroWpp = "5491134567890";

// Renderizar productos
const contenedor = document.getElementById("productos");
productos.forEach(p => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-lg-3");

    col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" 
       class="card-img-fluid mb-2" 
       style="object-fit: cover; object-position: center; margin-top: 0px;" 
       alt="${p.nombre}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion}</p>
            <p class="fw-bold text-danger">$${p.precio}</p>
            <a href="https://wa.me/${numeroWpp}?text=${encodeURIComponent(p.mensaje)}"
               target="_blank"
               class="btn btn-wpp text-white mt-auto">
               Pedir por WhatsApp
            </a>
          </div>
        </div>
      `;
    contenedor.appendChild(col);
});
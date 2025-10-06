// Array de productos (puede ir en productos.json)
const productos =
    [
        {
            "nombre": "Budín de Vainilla",
            "precio": 8000,
            "descripcion": "Budín casero esponjoso con aroma a vainilla.",
            "imagen": "img/imgProductos/budinVainilla.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Vainilla 🍮"
        },
        {
            "nombre": "Budín de Naranja",
            "precio": 9000,
            "descripcion": "Budín suave con jugo natural de naranja.",
            "imagen": "img/imgProductos/budinNaranja.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Naranja 🍊"
        },
        {
            "nombre": "Budín de Limón",
            "precio": 9000,
            "descripcion": "Budín casero con glaseado de limón.",
            "imagen": "img/imgProductos/budinLimon.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Limón 🍋"
        },
        {
            "nombre": "Budín de Mandarina",
            "precio": 9000,
            "descripcion": "Budín húmedo y aromático con mandarina fresca.",
            "imagen": "img/imgProductos/budinMandarina.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Mandarina 🍊"
        },
        {
            "nombre": "Budín de Chips de Chocolate",
            "precio": 9000,
            "descripcion": "Budín esponjoso con chips de chocolate.",
            "imagen": "img/imgProductos/budinChip.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Chips de Chocolate 🍫"
        },
        {
            "nombre": "Budín de Marmolado",
            "precio": 9000,
            "descripcion": "Clásico budín marmolado con vainilla y chocolate.",
            "imagen": "img/imgProductos/budinMarmolado.jpg",
            "mensaje": "Hola, quiero pedir el Budín Marmolado 🍫🍦"
        },
        {
            "nombre": "Budín de Banana Split",
            "precio": 9000,
            "descripcion": "Budín de banana con chips de chocolate y un toque especial.",
            "imagen": "img/imgProductos/budinBanana.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Banana Split 🍌🍫"
        }, 
        {
            "nombre": "Chocotortas",
            "precio": 15000,
            "descripcion": "Pack de 5 tuppers de chocotorta individual.",
            "imagen": "img/imgProductos/chocotorta.jpg",
            "mensaje": "Hola, quiero pedir el Budín de Vainilla 🍮"
        },
        {
            "nombre": "Alfajores Marplatenses",
            "precio": 9000,
            "descripcion": "Alfajores rellenos con dulce de leche y baño de chocolate. Vienen 9 por bandeja.",
            "imagen": "img/imgProductos/marplatense.jpg",
            "mensaje": "Hola, me interesan los Alfajores Marplatenses 🍫"
        },
        {
            "nombre": "Alfajores Pepitos",
            "precio": 9000,
            "descripcion": "Alfajores rellenos cubiertos con chips de chocolate. Vienen 9 por bandeja.",
            "imagen": "img/imgProductos/pepito.jpg",
            "mensaje": "Hola, me interesan los Alfajores Pepitos 🍪"
        },
        {
            "nombre": "Alfajores de Maicena",
            "precio": 9000,
            "descripcion": "Clásicos alfajores con mucho dulce de leche y coco. Vienen 9 por bandeja.",
            "imagen": "img/imgProductos/maicena.jpg",
            "mensaje": "Hola, me interesan los Alfajores de Maicena 🥥"
        },
        {
            "nombre": "Alfajores con Maní/Nueces",
            "precio": 9000,
            "descripcion": "Alfajores caseros con relleno y crocante de frutos secos. Vienen 9 por bandeja.",
            "imagen": "img/imgProductos/mani.jpg",
            "mensaje": "Hola, me interesan los Alfajores con Maní o Nueces 🥜🌰"
        },
        {
            "nombre": "Alfajores con Chocolate Blanco",
            "precio": 9000,
            "descripcion": "Alfajores rellenos bañados en chocolate blanco. Vienen 9 por bandeja.",
            "imagen": "img/imgProductos/chocolateBlanco.jpg",
            "mensaje": "Hola, me interesan los Alfajores con Chocolate Blanco 🤍🍫"
        }
    ];

// Número de WhatsApp
const numeroWpp = "5491169390101";
const contenedor = document.getElementById("productos");
const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const contador = document.getElementById("contador-carrito");
const btnWpp = document.getElementById("btn-wpp");

productos.forEach(p => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-lg-3");

    col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${p.imagen}" class="card-img-fluid mb-2" style="object-fit: cover;" alt="${p.nombre}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.descripcion}</p>
        <p class="fw-bold text-danger">$${p.precio}</p>
        <div class="mt-auto d-flex flex-column gap-2">
            <button class="btn btn-outline-success mt-auto btn-agregar">Agregar al carrito</button>
            <a href="https://wa.me/${numeroWpp}?text=${encodeURIComponent(p.mensaje)}" target="_blank" class="btn btn-wpp text-white btn-sm">Pedir por WhatsApp</a>
        </div>
      </div>
    </div>
  `;
    contenedor.appendChild(col);

    // Evento agregar
    col.querySelector(".btn-agregar").addEventListener("click", () => agregarAlCarrito(p));
});

function agregarAlCarrito(prod) {
    carrito.push(prod);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((p, i) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `
      ${p.nombre} - $${p.precio}
      <button class="btn btn-sm btn-danger">X</button>
    `;
        li.querySelector("button").addEventListener("click", () => {
            carrito.splice(i, 1);
            actualizarCarrito();
        });
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, p) => acc + p.precio, 0);
    totalCarrito.textContent = total;
    contador.textContent = carrito.length;

    const mensaje = carrito.map(p => `- ${p.nombre} ($${p.precio})`).join("%0A");
    btnWpp.href = `https://wa.me/${numeroWpp}?text=Hola! Quiero pedir:%0A${mensaje}%0ATotal: $${total}`;
}
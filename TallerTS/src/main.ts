interface Personaje {
  nombre: string;
  descripcion: string;
  imagen: string;
}

interface DatosJuego {
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  imagenPortada: string;
  personajes: Personaje[];
}

// Función encargada de crear la card HTML de un personaje
function crearCardPersonaje(personaje: Personaje): string {
  return `
    <div class="col">
      <div class="card">
        <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
        <div class="card-body">
          <h4 class="card-title">${personaje.nombre}</h4>
          <p class="card-text">${personaje.descripcion}</p>
        </div>
      </div>
    </div>
  `;
}

// Carga el JSON y construye la página
async function cargarPagina(): Promise<void> {
  const respuesta = await fetch("./data.json");
  const datos: DatosJuego = await respuesta.json();

  // Título de la página
  const titulo = document.getElementById("titulo") as HTMLElement;
  titulo.textContent = datos.titulo;

  // Descripción del juego
  const desc = document.getElementById("descripcion") as HTMLElement;
  desc.textContent = datos.descripcion;

  const descLarga = document.getElementById("descripcionLarga") as HTMLElement;
  descLarga.textContent = datos.descripcionLarga;

  // Imagen portada
  const imagen = document.getElementById("imagenPortada") as HTMLImageElement;
  imagen.src = datos.imagenPortada;
  imagen.alt = datos.titulo;

  // Personajes
  const contenedor = document.getElementById("personajes") as HTMLElement;
  contenedor.innerHTML = datos.personajes.map(crearCardPersonaje).join("");
}

cargarPagina();
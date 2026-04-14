"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Crea la card HTML de un personaje
function crearCardPersonaje(personaje) {
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
function cargarPagina() {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch("./data.json");
        const datos = yield respuesta.json();
        // Título de la página
        const titulo = document.getElementById("titulo");
        titulo.textContent = datos.titulo;
        // Descripción del juego
        const desc = document.getElementById("descripcion");
        desc.textContent = datos.descripcion;
        const descLarga = document.getElementById("descripcionLarga");
        descLarga.textContent = datos.descripcionLarga;
        // Imagen portada
        const imagen = document.getElementById("imagenPortada");
        imagen.src = datos.imagenPortada;
        imagen.alt = datos.titulo;
        // Personajes
        const contenedor = document.getElementById("personajes");
        contenedor.innerHTML = datos.personajes.map(crearCardPersonaje).join("");
    });
}
cargarPagina();

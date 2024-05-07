// Función para alternar entre los artículos del aside
function alternarProductos() {
    const productos = document.querySelectorAll('.producto'); // Selecciona todos los artículos
    let indice = 0; // Índice del artículo actual

    // Función para mostrar el siguiente artículo
    function mostrarSiguienteProducto() {
        // Oculta el producto actual
        productos[indice].classList.remove('visible');

        // Incrementa el índice y vuelve al primero si llega al final
        indice = (indice + 1) % productos.length;

        // Muestra el siguiente artículo
        productos[indice].classList.add('visible');
    }

    // Muestra el primer artículo
    productos[indice].classList.add('visible');

    // Intervalo para cambiar automáticamente los artículos cada 5 segundos
    setInterval(mostrarSiguienteProducto, 2000);
}

// Llama a la función al cargar la página
window.onload = function() {
    alternarProductos();
};

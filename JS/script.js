// Función para alternar entre los artículos de productos destacados
function alternarProductosDestacados() {
    const productos = document.querySelectorAll('.productos .producto'); // Selecciona todos los productos
    let indice = 0; // Índice del producto actual

    // Función para mostrar el siguiente producto
    function mostrarSiguienteProducto() {
        // Oculta el producto actual
        productos[indice].classList.remove('visible');

        // Incrementa el índice y vuelve al primero si llega al final
        indice = (indice + 1) % productos.length;

        // Muestra el siguiente producto
        productos[indice].classList.add('visible');
    }

    // Muestra el primer producto
    productos[indice].classList.add('visible');

    // Intervalo para cambiar automáticamente los productos cada 5 segundos
    setInterval(mostrarSiguienteProducto, 2000);
}

// Llama a la función al cargar la página
window.onload = function() {
    alternarProductosDestacados();
};

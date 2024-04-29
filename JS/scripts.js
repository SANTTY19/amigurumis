window.addEventListener('load', function() {
    var productos = document.querySelectorAll('.producto');
    productos.forEach(function(producto) {
        producto.classList.add('visible');
    });
});

var botonesCompra = document.querySelectorAll('button');
botonesCompra.forEach(function(boton) {
    boton.addEventListener('click', function() {
        alert('¡Producto añadido al carrito!');
    });
});

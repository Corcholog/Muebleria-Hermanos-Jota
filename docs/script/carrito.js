// Espera a que el DOM esté completamente cargado para ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // 1. OBTENER EL VALOR INICIAL DEL CARRITO
    // Lee el valor guardado en localStorage. Si no existe, empieza en 0.
    // parseInt() convierte el texto guardado en un número.
    let cartCount = parseInt(localStorage.getItem('cartItemCount')) || 0;

    // 2. OBTENER EL ELEMENTO DEL DOM
    // Busca el <span> donde se muestra el número del carrito.
    const cartCountElement = document.getElementById('cart-count');

    // 3. FUNCIÓN PARA ACTUALIZAR LA VISTA
    // Esta función actualiza el texto del <span> con el valor actual del contador.
    function updateCartDisplay() {
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }

    // 4. FUNCIÓN GLOBAL PARA AÑADIR AL CARRITO
    // Hacemos esta función global (asignándola a 'window') para poder llamarla desde otros archivos.
    window.addToCart = function() {
        // Incrementa el contador
        cartCount++;
        // Guarda el nuevo valor en localStorage
        localStorage.setItem('cartItemCount', cartCount);
        // Actualiza el número visible en el ícono del carrito
        updateCartDisplay();

        console.log(`Producto añadido. Total en carrito: ${cartCount}`);
    }

    // 5. INICIALIZAR LA VISTA
    // Al cargar cualquier página, actualiza el contador para mostrar el valor guardado.
    updateCartDisplay();
});
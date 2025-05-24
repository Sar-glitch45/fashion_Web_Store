document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            // Obtener o inicializar el carrito en localStorage
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Añadir el producto al carrito
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} ha sido añadido al carrito.`);
        });
    });
});

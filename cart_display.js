document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");
    const paymentMethodContainer = document.getElementById("payment-method");
    const checkoutButton = document.getElementById("checkout");

    // Obtener carrito de localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Renderizar productos
    let total = 0;
    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Q${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Eliminar</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
        total += item.price;
    });

    // Mostrar el total
    cartTotalContainer.textContent = `Q${total.toFixed(2)}`;

    // Manejar eliminación de productos
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1); // Eliminar producto del carrito
            localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar localStorage
            location.reload(); // Recargar para reflejar cambios
        }
    });

    // Manejar el botón "Realizar Compra"
    checkoutButton.addEventListener("click", () => {
        const paymentMethod = paymentMethodContainer.value;
        if (!paymentMethod) {
            alert("Por favor, selecciona un método de pago antes de continuar.");
            return;
        }

        alert(`Gracias por tu compra! Has pagado con: ${paymentMethod}`);
        localStorage.removeItem("cart"); // Vaciar el carrito
        location.reload(); // Recargar la página
    });
});

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeItem, incrementItem, decrementItem, clearCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);

  const formatPrice = (n) => Number(n).toLocaleString('es-AR');

  // Ensure robust calculation even if data is missing
  const total = cart.reduce((acc, it) => acc + (it.precio || 0) * (it.cantidad || 1), 0);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("Para finalizar la compra, necesitas iniciar sesión.");
      navigate('/login');
      return;
    }

    // Simulate checkout
    alert("¡Compra recibida con éxito! Gracias por tu preferencia.");
    clearCart();
  };

  const handleGoBack = () => navigate('/products');

  if (cart.length === 0) {
    return (
      <main className="carrito">
        <h1 className="section-title">Tu carrito</h1>
        <p>No tenés productos en el carrito.</p>
        <button type="button" onClick={handleGoBack} className="btn-detalle">← Volver a comprar</button>
      </main>
    );
  }

  return (
    <main className="carrito">
      <h1 className="section-title">Tu carrito</h1>

      <section className="carrito__lista">
        {cart.map((item) => {
          const id = item._id || item.id;
          return (
            <article key={id} className="carrito__item">
              <div className="carrito__img">
                <img src={item.imagen} alt={item.nombre} />
              </div>

              <div className="carrito__info">
                <h2 className="carrito__nombre">{item.nombre}</h2>
                <p className="carrito__precio">Precio: ${formatPrice(item.precio)}</p>

                <div className="carrito__acciones">
                  <div className="carrito__qty">
                    <button type="button" onClick={() => decrementItem(id)} aria-label="Restar uno">−</button>
                    <span aria-live="polite">{item.cantidad || 1}</span>
                    <button type="button" onClick={() => incrementItem(id)} aria-label="Sumar uno">+</button>
                  </div>

                  <button type="button" className="btn-detalle" onClick={() => removeItem(id)}>
                    Quitar
                  </button>
                </div>

                <p className="carrito__subtotal">
                  Subtotal: ${formatPrice((item.precio || 0) * (item.cantidad || 1))}
                </p>
              </div>
            </article>
          );
        })}
      </section>

      <aside className="carrito__resumen">
        <div className="carrito__total">
          <span>Total</span>
          <strong>${formatPrice(total)}</strong>
        </div>

        <div className="carrito__botones">
          <button type="button" className="btn-detalle" onClick={handleGoBack}>← Seguir comprando</button>

          {isAuthenticated ? (
            <button type="button" className="btn-cart" onClick={handleCheckout}>
              Finalizar compra
            </button>
          ) : (
            <div className="auth-warning">
              <p>Iniciá sesión para comprar</p>
              <button type="button" className="btn-login" onClick={() => navigate('/login')}>
                Ir a Login
              </button>
            </div>
          )}

          <button type="button" className="btn-detalle" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Cart;

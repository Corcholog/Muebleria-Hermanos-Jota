// client/src/components/Cart.jsx
import React from 'react';

function Cart({ items, onIncrement, onDecrement, onRemove, onClear, volver }) {
  const formatPrice = (n) => Number(n).toLocaleString('es-AR');

  const total = items.reduce((acc, it) => acc + it.precio * it.cantidad, 0);

  if (items.length === 0) {
    return (
      <main className="carrito">
        <h1 className="section-title">Tu carrito</h1>
        <p>No tenés productos en el carrito.</p>
        <button type="button" onClick={volver} className="btn-detalle">← Volver a comprar</button>
      </main>
    );
  }

  return (
    <main className="carrito">
      <h1 className="section-title">Tu carrito</h1>

      <section className="carrito__lista">
        {items.map((item) => (
          <article key={item.id} className="carrito__item">
            <div className="carrito__img">
              <img src={item.imagen} alt={item.nombre} />
            </div>

            <div className="carrito__info">
              <h2 className="carrito__nombre">{item.nombre}</h2>
              <p className="carrito__precio">Precio: ${formatPrice(item.precio)}</p>

              <div className="carrito__acciones">
                <div className="carrito__qty">
                  <button type="button" onClick={() => onDecrement(item.id)} aria-label="Restar uno">−</button>
                  <span aria-live="polite">{item.cantidad}</span>
                  <button type="button" onClick={() => onIncrement(item.id)} aria-label="Sumar uno">+</button>
                </div>

                <button type="button" className="btn-detalle" onClick={() => onRemove(item.id)}>
                  Quitar
                </button>
              </div>

              <p className="carrito__subtotal">
                Subtotal: ${formatPrice(item.precio * item.cantidad)}
              </p>
            </div>
          </article>
        ))}
      </section>

      <aside className="carrito__resumen">
        <div className="carrito__total">
          <span>Total</span>
          <strong>${formatPrice(total)}</strong>
        </div>

        <div className="carrito__botones">
          <button type="button" className="btn-detalle" onClick={volver}>← Seguir comprando</button>
          <button type="button" className="btn-cart" onClick={() => alert('Checkout pendiente')}>
            Finalizar compra
          </button>
          <button type="button" className="btn-detalle" onClick={onClear}>
            Vaciar carrito
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Cart;

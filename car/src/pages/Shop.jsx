import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Support from '../components/Support';
import Styles from './styles/Shop.module.css';

function Shop() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.rawPrice * item.quantity, 0
  );
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  const fmt = (n) => '$' + n.toLocaleString();

  if (cartItems.length === 0) {
    return (
      <div className={Styles.empty}>
        <i className="fa-solid fa-cart-arrow-down"></i>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any vehicles yet.</p>
        <Link to="/vehicles" className={Styles.browseBtn}>Browse Vehicles</Link>
      </div>
    );
  }

  return (
    <>
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <h1>Your Cart</h1>
        <Link to="/vehicles" className={Styles.backLink}>
          <i className="fa-solid fa-arrow-left"></i> Continue Shopping
        </Link>
      </div>

      <div className={Styles.layout}>

        {/* Left: cart items */}
        <div className={Styles.itemsCol}>
          {cartItems.map((item) => (
            <div className={Styles.card} key={item.name}>
              <img src={item.img} alt={item.name} className={Styles.thumb} />

              <div className={Styles.info}>
                <h3>{item.name}</h3>
                <p className={Styles.priceTag}>MSRP {item.price}</p>

                <div className={Styles.qtyRow}>
                  <button
                    className={Styles.qtyBtn}
                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                  >−</button>
                  <span className={Styles.qty}>{item.quantity}</span>
                  <button
                    className={Styles.qtyBtn}
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  >+</button>
                </div>
              </div>

              <div className={Styles.rightCol}>
                <p className={Styles.lineTotal}>{fmt(item.rawPrice * item.quantity)}</p>
                <button
                  className={Styles.deleteBtn}
                  onClick={() => removeFromCart(item.name)}
                  title="Remove"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}

          <button className={Styles.clearBtn} onClick={clearCart}>
            <i className="fa-solid fa-trash-can"></i> Clear Cart
          </button>
        </div>

        {/* Right: order summary */}
        <div className={Styles.summary}>
          <h2>Order Summary</h2>

          <div className={Styles.summaryRow}>
            <span>Subtotal</span>
            <span>{fmt(subtotal)}</span>
          </div>
          <div className={Styles.summaryRow}>
            <span>Est. Tax (8%)</span>
            <span>{fmt(tax)}</span>
          </div>
          <div className={`${Styles.summaryRow} ${Styles.totalRow}`}>
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>

          <button className={Styles.checkoutBtn}>
            <i className="fa-solid fa-lock"></i> Checkout
          </button>

          <p className={Styles.secureNote}>
            <i className="fa-solid fa-shield-halved"></i> Secure checkout
          </p>
        </div>

      </div>
    </div>
    <Support/>
    </>
  );
}

export default Shop;
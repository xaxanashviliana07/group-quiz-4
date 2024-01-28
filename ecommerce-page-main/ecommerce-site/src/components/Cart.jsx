import React, { useState } from "react";
import classes from "../modules/Cart.module.css";
import cartIcon from "../images/icon-cart.svg";
import deleteIcon from "../images/delete.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, amount: item.amount + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = [
        ...cartItems,
        { ...product, amount: quantity > 0 ? quantity : 1 },
      ];
      setCartItems(updatedCart);
    }

    setQuantity(1);
  };

  const deleteFromCart = (productName) => {
    const updatedCart = cartItems.map((item) =>
      item.name === productName ? { ...item, amount: item.amount - 1 } : item
      
    );
    const filteredCart = updatedCart.filter((item) => item.amount > 0);

    setCartItems(filteredCart);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculateSum = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount >= 1) {
      setQuantity(quantity + amount);
    }
  };

  const renderCartIcon = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.amount, 0);
    return (
      <div
        className={classes['cartIconContainer']}
        onClick={() => setShowModal(true)}
      >
        <img className={classes['cartIcon']} src={cartIcon} alt="Cart Icon" />
        {totalItems > 0 && (
          <div className={classes['notificationCircle']}> <h3 className={classes['circle-num']}>{totalItems}</h3> </div>
        )}
      </div>
    );
  };

  return (
    <div className={classes['container']}>
      {renderCartIcon()}

      <div className={classes['quantityControl']}>
        <button
          className={classes['quantityButton-L']}
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <p className={classes['quantityDisplay']}>{quantity}</p>
        <button
          className={classes['quantityButton-R']}
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      <button
        className={classes['addToCartButton']}
        onClick={() => addToCart({ name: "Sneakers", price: 125 })}
      >
        <h2>Add to Cart</h2>
      </button>

      {showModal && (
        <div className={classes['modal']}>
          <h2 className={classes['cart-title']}>Cart</h2>
          <div className={classes['straight-line']}></div>
          <div className={classes['modalContent']}>
            <span className={classes['close']} onClick={closeModal}>
              &times;
            </span>
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className={classes['cartItem']}>
                    <p className={classes['cart-info']}> {`${item.name}: ${item.amount}`}</p>
                    <button
                      className={classes['deleteButton']}
                      onClick={() => deleteFromCart(item.name)}
                    >
                      <img className={classes['delete-img']} src={deleteIcon} alt="Delete Icon" />
                    </button>
                  </div>
                ))}
                <p className={classes['cart-total']}>Total: ${calculateSum()}</p>
              </div>
            ) : (
              <p className={classes['cart-p']}>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

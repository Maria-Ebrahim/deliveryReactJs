import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
    toast.success('Product Added Successfully')
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
    toast.success('Product removed Successfully')
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <motion.span whileTap={{scale:'1.2'}} className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </motion.span>
              <span className="quantity">{quantity}</span>
              <motion.span whileTap={{scale:'1.2'}} className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </motion.span>
            </div>
          </div>

          <motion.span whileTap={{scale:'1.2'}} className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </motion.span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
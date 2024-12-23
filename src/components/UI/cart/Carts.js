import React from 'react'
import { ListGroup } from 'reactstrap'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom'
import '../../../styles/shopping-cart.css'
import { useDispatch,useSelector} from 'react-redux'
import { motion } from 'framer-motion'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
const Carts = () => {
   const dispatch=useDispatch()
   const cartProducts=useSelector(state=>state.cart.cartItems)
   const totalAmount = useSelector((state) => state.cart.totalAmount);
 
   const toggleCart = () => {
     dispatch(cartUiActions.toggle());
   };
   
  return (
    <div className='cart__container'>
        <ListGroup className='cart'>
           <div className="cart__close">
               <motion.span whileTap={{scale:'1.2'}} onClick={toggleCart}>
                  <i class="ri-close-fill"></i>
               </motion.span>
           </div>
           <div className="cart__item-list">
            {
               cartProducts.length === 0 ? 
               <h6 className='text-center mt-5'>No item added to the cart</h6>
               :
               cartProducts.map((item,index)=>(
                  <Cartitem item={item} key={index}/>

               ))
            }
             
             
           </div>
           <div className='cart__bottom d-flex align-items-center justify-content-between'>
           <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
               <motion.button whileTap={{scale:'1.1'}}>
                   <Link to="/checkout" >
                       Checkout
                  </Link>
               </motion.button>


           </div>


        </ListGroup>
      
    </div>
  )
}

export default Carts

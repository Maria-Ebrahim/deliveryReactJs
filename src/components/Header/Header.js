import React,{useEffect, useRef} from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import logo2 from '../../assets/images/delivery-drivers-inc-professional-services-company-others-356a1841ffb01f460a02765157b3b514.png'
import { NavLink,Link } from 'react-router-dom'
import '../../styles/header.css'
import { useSelector,useDispatch } from 'react-redux'
import {cartUiActions} from '../../store/shopping-cart/cartUiSlice'

const nav_links=[
  {
    path:'/home',
    display:'Home'

  },
  {
    path:'/foods',
    display:'Foods'

  },
  {
    path:'/cart',
    display:'Cart'

  },
  // {
  //   path:'/contact',
  //   display:'Contact'

  // },
 
]

const Header = () => {
 const menuRef=useRef(null)
 const headerRef=useRef(null)
 const toggleMenu=() =>menuRef.current.classList.toggle('show__menu')
 const totalQuantity = useSelector((state) => state.cart.totalQuantity);
 const dispatch = useDispatch();

const stickyHeaderFunc =()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('header__shrink')
    }
    else{
      headerRef.current.classList.remove('header__shrink')
    }
  })
}

useEffect(()=>{
  stickyHeaderFunc();
  return ()=>window.removeEventListener("scroll" , stickyHeaderFunc)
},[])
const toggleCart =()=>{
  dispatch(cartUiActions.toggle())
}
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo2} alt='logo' />
            <h5>Delivery Drivers Inc</h5>
          </div>
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5'>
             
                {nav_links.map((item,index)=>(
                  <NavLink to={item.path} key={index} 
                  className={navClass=>navClass.isActive? 'active__menu':""}
                  
                  >{item.display}</NavLink>
                ))}
             

            </div>

          </div>
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon' onClick={toggleCart}>
               <i class="ri-shopping-basket-line"></i>
               <span className='cart__badge'>{totalQuantity}</span>
            </span>
            <span className='user'>
               <Link to='/login'><i class="ri-user-line"></i></Link>
            </span>
            <span className='mobile__menu' onClick={toggleMenu}>
               <i class="ri-menu-line"></i>
            </span>

          </div>

        </div>
      </Container>

    </header>
 
  )
}

export default Header

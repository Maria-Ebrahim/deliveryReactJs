import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import categoryImg01 from '../../../assets/images/hamburger-button-junk-food-fast-food-barbecue-burger-and-sandwich-91cd3553fdaba4e6aa75aeb2e4e7faa1.png'
import categoryImg02 from '../../../assets/images/the-pizza-company-junk-food-computer-icons-pizza-hut-pizza-slice-f5ef1f1cc7997bc50667da6b47e5622d.png'
import categoryImg03 from '../../../assets/images/chinese-cuisine-asian-cuisine-indian-cuisine-japanese-cuisine-sushi-chinese-food-dd2ba1783fe9a5d86531baa4832985c0.png'
import categoryImg04 from '../../../assets/images/meat-barbecue-tiong-lian-food-supplier-dish-charcuterie-steak-icon-97089f4cfb4b35b88330569853ee51ba.png'
import '../../../styles/category.css'
const categoryData=[
    {
        display:'Fastfood',
        imgUrl:categoryImg01,

    },
    {
        display:'Pizza',
        imgUrl:categoryImg02,

    },
    {
        display:'Asian Food',
        imgUrl:categoryImg03,

    },
    {
        display:'Row Meat',
        imgUrl:categoryImg04,

    },
]
const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item)=>(
                    <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                        <div className='category__item d-flex align-items-center gap-3'>
                            <div className='category__img'>
                                <img src={item.imgUrl} alt='category__item'/>
                            </div>
                            <h6>{item.display}</h6>

                        </div>

                    </Col>

                ))
            }
 
           
        </Row>
    </Container>
  )
}

export default Category

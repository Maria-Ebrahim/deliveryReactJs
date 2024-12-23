import React from 'react'
import '../../styles/footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/images/delivery-drivers-inc-professional-services-company-others-356a1841ffb01f460a02765157b3b514.png'
const Footer = () => {
  const date=new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
             <div className='footer__logo text-start'>
               <img src={logo2} alt=''/>
               <h5>Delivery Drivers Inc</h5>
               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
             </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup  className="deliver__time-list">
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>9:00AM - 4:00AM</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                 <span>Friday - Saturday</span>
                 <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
          <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Syria, Lattakia, AL_joumhouria_street</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0932564825</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: delivery@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className="footer__title">Newsletter</h5>
              <p className='para'>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
          </Col>
        </Row>

        <Row  className="mt-5">
          <Col lg='6' md='6'>
            <p className="copyright__text">
            Copyright - {date} , website made by Maria Ebrahim. All Rights
            Reserved.
            </p>
          </Col>

          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/maria">
                <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/maria">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                <Link to=" https://www.youtube.com/c/maria">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to=" https://www.linkedin.com/in/maria160/">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

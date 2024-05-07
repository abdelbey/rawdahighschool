import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsMap } from 'react-icons/bs';




function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
            <img className='logo-image' src="https://res.cloudinary.com/djg8wz6wx/image/upload/v1714824710/YelpCamp/rxex9rv9lvsljmj2xotc.png" alt="Logo" />

              <span className='mx-10 text-light lh-1 fw-semibold'>
              Rawdat
                <br></br>
                El Fayhaa
                <br></br>
                High School
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className='me-auto justify-content-end w-100'>
  <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>

  <NavDropdown title='Educational Policy' id='educational-policy-dropdown'>
    <NavDropdown.Item href='#'>Planning boards</NavDropdown.Item>
    <NavDropdown.Item href='#'>Curricula</NavDropdown.Item>
    <NavDropdown.Item href='#'>Religious education and educational guidance</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='Educational Care' id='educational-care-dropdown'>
    <NavDropdown.Item href='#'>Support program</NavDropdown.Item>
    <NavDropdown.Item href='#'>Granting excellence</NavDropdown.Item>
    <NavDropdown.Item href='#'>health care</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='Educational Information' id='educational-information-dropdown'>
    <NavDropdown.Item href='#'>Book lists</NavDropdown.Item>
    <NavDropdown.Item href='#'>Foreign curriculum</NavDropdown.Item>
    <NavDropdown.Item href='#'>Arabic Language</NavDropdown.Item>
    <NavDropdown.Item href='#'>Addressing difficulties</NavDropdown.Item>
    <NavDropdown.Item href='#'>Educational circulars</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='Our Message' id='our-message-dropdown'>
    <NavDropdown.Item href='#'>Message</NavDropdown.Item>
    <NavDropdown.Item href='#'>General Goals</NavDropdown.Item>
    <NavDropdown.Item href='#'>The first generation</NavDropdown.Item>
    <NavDropdown.Item href='#'>partnership</NavDropdown.Item>
    <NavDropdown.Item href='#'>Kindergarten educational facilities</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title='Finance' id='finance-dropdown'>
    <NavDropdown.Item href='#'>Tuition fees</NavDropdown.Item>
    <NavDropdown.Item href='#'>transport services</NavDropdown.Item>
  </NavDropdown>
  <Nav.Link href='/career' className='text-uppercase'>Career</Nav.Link>
  <Nav.Link href='/contact' className='text-uppercase'>contact</Nav.Link>
</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/courses' element={<Courses />} />
  <Route path='/about' element={<About />} />
  <Route path='/blog' element={<Blog />} />
  <Route path='/contact' element={<Contact />} />

</Routes>


<footer>
  <div className='container my-5'>
    <div className='row d-flex justify-content-between align-items-center'>
      <div className='col-md-4'>
        <Link to="/contact">
          <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
        </Link>
        <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
          <a href='https://www.facebook.com/rawdafayha/'>
            <li>
              <BsFacebook className="icon" />
            </li>
          </a>
          <a href='https://www.instagram.com/rawdafayha/'>
            <li>
              <BsInstagram className="icon" />
            </li>
          </a>
          <a href='https://www.youtube.com/channel/UCAwHQ6yAg11i3_FwbVBGS_g/videos'>
            <li>
              <BsYoutube className="icon" />
            </li>
          </a>
          <a href='https://twitter.com/RawdaFayha/status/1707358996888199481'>
            <li>
              <BsTwitter className="icon" />
            </li>
          </a>
          <a href='https://maps.app.goo.gl/3J4thX7XvM5GDHak7'>
            <li>
              <BsMap className="icon" />
            </li>
          </a>
        </ul>
      </div>
      <div className='col-md-7 col-lg-6'>
        <div className='d-row d-md-flex justify-content-between align-items-center'>
          <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
            <ul className='footer-navigation list-unstyled mb-0'>
              <Link to="/" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Home</li>
              </Link>
              <Link to="/courses" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Our courses</li>
              </Link>
              <Link to="/about" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>About us</li>
              </Link>
              <Link to="/blog" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Blog</li>
              </Link>
              <Link to="/contact" className='text-decoration-none text-danger'>
                <li className='text-uppercase fw-semibold'>Get In Touch</li>
              </Link>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-7'>
            <ul className='list-unstyled mb-0'>
              <li>
                <p>Tripoli, Al-Maarad, Lebanon, North Lebanon</p>
              </li>
              <li>
                <p>Phone Number - 00961 6 412400</p>
              </li>
              <li>
                <p>Email - education@rawdafayha.edu.lb</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='bg-body-tertiary'>
    <div className='container'>
      <p className='p-3 m-0 text-center'>copyright @ made by AbdelRahman Beyrouti</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;


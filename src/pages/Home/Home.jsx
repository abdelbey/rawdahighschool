// import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import ChooseSection from '../../components/ChooseSection/ChooseSection';
// import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
// import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import image1 from '../../utils/images/image1.png';
import image2 from '../../utils/images/image2.png';
import image3 from '../../utils/images/image3.png';

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

// import Sliders from './Sliders';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: 'Championships suit us',
    description: 'The kindergarten champions are crowned champions in school volleyball (2009 and below), male and female categories.'
  },
  {
    id: 2,
    img: [Blog2Img],
    title: 'Mother Day',
    description: 'It is life above life because it is through love that it fulfills, through giving it is nurtured, and through sacrifice it is preserved and cared for.'
  },
  {
    id: 3,
    img: [Blog3Img],
    title: 'Kindergarten',
    description: 'Three topics were addressed in the preparation and training course attended by the coordinators:'
  },
];

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To</h2>
          <h1 className='text-center fw-semibold'>Rawdat El Fayhaa High School</h1>
          <h2>Inspiring minds and shaping the future</h2>
         
          <div className='d-flex flex-column flex-sm-row align-items-center mt-4'>
            <Link to="/">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>New student registration form</button>
            </Link>
            <Link to="/">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Student programs and files</button>
            </Link>
            <Link to="/">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>E-Learning</button>
            </Link>
            <Link to="/">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Employee form</button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        {/* <ChooseSection /> */}
      </div>

      <div className='py-5 bg-light'>
      <div className="container">
        <div className='row d-flex align-items-center justify-content-around'>
          <div className='col-lg-5'>
            <h2 className='text-capitalize'>History</h2>
            <p>History

              Rawdat El Fayhaa Secondary School is a private, nonprofit educational institution located in Tripoli, NorthLebanon. It has a rich history that reflects the Tripolitan people’s passion for science and knowledge. The initiative of building this academic establishment belongs to the Children Care Association (Riayet Al Atfaal), or CCA, led by the late Mrs. Alia Zaouk. The school was founded in 1945 as a Francophone Kindergarten in a small apartment at Madaress Street and named Rawdat El Fayhaa. In 1950, it moved to Azmy Street, occupying a large building. In 1968, a partnership between Riayet Al Atfaal and the Islamic Makarim Al Akhlaq Association was signed, and a joint committee was formed to oversee the school’s financial and administrative </p>
           
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
           
          </div>
          <div className='col-lg-5 mt-5 mt-lg-0'>
            <Carousel>
              <Carousel.Item>
                <ExampleCarouselImage text="First slide" imageUrl={image1} />
                <Carousel.Caption>
                  <h3>Our Main Branch</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Second slide" imageUrl={image2} />
                <Carousel.Caption>
                  <h3>Our School</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage text="Third slide" imageUrl={image3} />
                <Carousel.Caption>
                  <h3>2023 Graduation</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
      <div className="py-5">
        {/* <FaqAccordion /> */}
      </div>

      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
          <div className='row g-4'>
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to={`/blogs/${blog.id}`} className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant="top" src={blog.img[0]} />
                    <Card.Body className='p-md-5'>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;

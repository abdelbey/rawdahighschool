import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

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
        title: 'Mother Day in kindergarten is a festival of love',
        description: 'It is life above life because it is through love that it fulfills, through giving it is nurtured, and through sacrifice it is preserved and cared for.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Preparation and training in kindergarten',
        description: 'Three topics were addressed in the preparation and training course attended by the coordinators:'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'University guidance in kindergarten',
        description: 'Rawdat Al-Fayhaa High School organized an orientation exhibition for its students in the eleventh and twelfth secondary levels to learn about the university reality, learn about the latest majors available in Lebanese and international universities, and the connection of these majors with the labor market in Lebanon and abroad.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Keeping pace with emerging issues and youth problems in schools',
        description: 'Under the patronage and presence of His Eminence the Mufti of Tripoli and the North, Dr. Sheikh Muhammad Imam, Rawdat Al-Fayhaa High School organized in cooperation with the Lebanese Society for Scientific Research “LASER”; And Al-Iman Schools, an introductory meeting about the initiative launched by the Laser Association entitled “Keeping pace with young people and the problems of youth in school'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Cooperation with the You and I Charity Association',
        description: 'Rawdat Al-Fayhaa Secondary School renews the cooperation protocol with the “For Good, Me and You” Association In the midst of the current crises afflicting the country, and in the midst of the pressing economic conditions that have negatively affected the educational sector, threatening the fate and future of students, Rawdat Al-Fayhaa Secondary School renewed its cooperation with the “For Good, Me and You” Association.'
    }

];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>News</h1>
                {/* <p className='text-center w-75 mb-5'>  orporis.</p> */}
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-4 mb-4 text-center'>{blog.title}</Card.Title>
                                        <Card.Text className='fs-7 text-center '>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
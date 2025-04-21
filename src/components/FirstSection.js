

import React, { useState, useEffect, useContext } from "react";
import './FirstSection.css'
import axios from 'axios';
import { chooseUs } from './Data.js';
import { Link, useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imagesHai } from './Data.js';
import {faqs} from './Data.js';
import { useLocation } from 'react-router-dom';
import { EmailContext } from './contexts/EmailContext';
import { PiMailboxBold } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import Experience from './Experience.js';
import ImageSlider from './ImageSlider.js';
import { sliderData } from './sliderData.js';
import meet from './Team.js';
import team from '../assets/meetteam.png';

// import { featureImages } from './Data.js'

import { AiFillSafetyCertificate } from "react-icons/ai";
{/* <AiFillSafetyCertificate /> */ }


// function Card() {

//     return (
//         <div className="serviceImages">
//             {featureImages.map((img) => {
//                 const { id, image, title } = img;

//                 return (
//                     <div className="card" key={id}>
//                         <img src={image}></img>
//                         <h2>{title}</h2>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }




function Card() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);  // will see
    const [error, setError] = useState(null);  // will see

    useEffect(() => {
        // Fetch images from the server
        // axios.get(`${process.env.REACT_APP_API_URL}/BookNow`)  // will see
        axios.get('http://localhost:3001/BookNow')
            .then(response => {
                const imagesData = response.data;
                setImages(imagesData);
                // console.log(imagesData);
                setLoading(false);  // will see
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setError('Error fetching images');  // will see
                setLoading(false);  // will see
            });
    }, []);

    if (loading) return <p>Loading...</p>;  // will see
    if (error) return <p>{error}</p>;  // will see

    return (
        <Slider {...settings}>
            {images.map((img) => {
                const { id, image, title } = img;

                return (
                    <div className="card" key={id}>
                        <div className="center-content">
                            <img src={`data:image/jpeg;base64,${image}`} alt={title} />
                            <h2 >{title}</h2>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}


function FAQ() {
    return (
        <section id="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-items">
                {faqs.map(({ id, question, answer }) => (
                    <div className="faq-item" key={id}>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


// function Testimonials(){

//     const satisfied = [
//         {
//         id : 1,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Ethan fails"
//         },
//         {
//         id : 2,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Alice "
//         },
//         {
//         id : 3,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Terrius "
//         },
//         {
//         id : 4,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Ethan fails"
//         },
//         {
//         id : 5,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Alice "
//         },
//         {
//         id : 6,
//         answer : "Good and the best service, provide skilled workers who can work relentessly and flawlessly.",
//         user : "Terrius "
//         }
//     ]

//     return(
//         <section className="testimonials">
//             <h1>Our Customers</h1>
//             <article>
//             {satisfied.map((sat)=>{
//                 const {id, answer, user} = sat;

//                 return(
//                     <div className="single-testimony" key={id}>
//                         <img alt="image"></img>
//                         <p>{answer}</p>
//                         <div>{user}</div>
//                     </div>
//                 );
//             })}
//             </article>
//         </section>
//     );
// }

function Testimonials() {
    const satisfied = [
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/1318928248/fr/photo/verticale-dun-jeune-homme.jpg?s=612x612&w=0&k=20&c=TKuZMkLDDWEe-VeIBB6ORVovn-cammnXtZnfXpx_Ss4=',
            answer: "Good and the best service, provide skilled workers who can work relentlessly and flawlessly.",
            user: "Ethan Fails",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 2,
            image: 'https://th.bing.com/th/id/OIP.YuIytnZgmZFEcCayAPzTBQAAAA?pid=ImgDet&w=176&h=117&c=7&dpr=1.3',
            answer: "EasyHire has completely transformed my home life. Their maid service is reliable and thorough. Highly recommended!",
            user: "John Doe",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 3,
            image: 'https://th.bing.com/th/id/OIP.e7-Dr0g4qjUL4Bu7zvay3wHaEK?pid=ImgDet&w=176&h=99&c=7&dpr=1.3',
            answer: "The chef service from EasyHire has been a game-changer for our family. Delicious meals every day without the hassle of cooking!",
            user: "Sara Smith",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 4,
            image: 'https://th.bing.com/th/id/OIP.iGI9S_lbLxZKsixMcr1T1AHaHa?pid=ImgDet&w=176&h=176&c=7&dpr=1.3',
            answer: "I feel much safer at home thanks to EasyHire's professional security guards. Their attention to detail is outstanding",
            user: "Michael Johnson",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 5,
            image: 'https://th.bing.com/th/id/R.dd9449b74b5d325dbe28214a56ac721e?rik=ZpQYU68LgI%2bXWQ&riu=http%3a%2f%2fzapthefilm.com%2fImages%2fCastCrew%2fJoel+Foster.jpg&ehk=ijVPIhph5d%2b4uOL494IWuhQB7thtDe91PhRj%2bn%2bshg4%3d&risl=&pid=ImgRaw&r=0',
            answer: "Our garden has never looked better! The gardeners from EasyHire are knowledgeable and dedicated. Absolutely love their service.",
            user: "Emily Davis",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

        },
        {
            id: 6,
            image: 'https://th.bing.com/th/id/OIP.6eMC9jCLz84TpsBXsCeSrQAAAA?pid=ImgDet&w=159&h=159&c=7&dpr=1.3',
            answer: "Good and the best service, provide skilled workers who can work relentlessly and flawlessly.",
            user: "Terrius",
            image2:"https://th.bing.com/th/id/OIP.NGF00h0GhlniQFPlNkh3MgHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }
    ];

    return (
        <section className="testimonials">
            <h1>Our Customers</h1>
            <div className="testimonials-container">
                {satisfied.map((sat) => {
                    const { id, answer, user, image,image2 } = sat;

                    return (
                        <div className="single-testimony" key={id}>
                            <img src={image} alt={user} />
                            <p>{answer}</p>
                            <div>{user}</div><br></br>
                            <h3>Ratings</h3>
                            <img src={image2} alt={user} />

                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Testimonials;



function FirstSection() {

    const { email } = useContext(EmailContext);
    const { message } = useContext(EmailContext);

    console.log(email + " at root");

    const showPanel = ()=>{
        const element = document.querySelector('.no-click');
        // console.log(element);
        if (element) {
            element.classList.remove('exp-show');
        }
    }

    useEffect(() => {
        if (message) {
            const element = document.querySelector('.fsm');

            setTimeout(() => {
                element.classList.add('fsm-hide');
            }, 3000);
        }
    }, [message]);

    const navigate = useNavigate();

    const handleScroll = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            navigate(sectionId, { replace: true });  // Replace the current history entry
        }
    }

    return (
        <>
            <section id="about" className="first">
                
                <div className="intro">
                    <h1 className="maineh">Easyhire</h1>
                    <p>Hire your personal helper and get your work done within hours. Experienced workers are available here. Highly skilled</p>
                    <button className="btn"> <Link className="btn-link" to="/BookNow">Book Now</Link> </button>
                </div>

                <div className="images">
                <ImageSlider slides={sliderData} />

                </div>
            </section>

            <section id="services" className="second">
                <h1 style={{fontSize:"40px",fontWeight:"bold"}}>About our Vision</h1>
           <h3> At EasyHire, we strive to make your life more convenient and stress-free. We offer a diverse range of professional services including:</h3> <br></br>

<h3>Maids, Chefs, Guards, Gardeners<br></br>

Whether you need help around the house, a culinary expert to delight your taste buds, security personnel to keep you safe, or a green thumb to tend to your garden, EasyHire has got you covered. We take pride in providing skilled and experienced workers who can cater to your specific requirements. Your safety and satisfaction are our top priorities. That’s why we meticulously verify the details of every worker, ensuring peace of mind.

If you want any of our services for your home, we are here to provide the best fit for your needs. Explore our services and hire your personal helper today!</h3>
            </section>

            <section className="third">
                <h1>Why to choose us</h1>
                <div className="blue-images">
                    {chooseUs.map((img) => {
                        const { id, image, title, description } = img;

                        return (
                            <div className="blue-card" key={id}>
                                <div>{image.src}</div>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Testimonials />
            <section className="team">   
        <h1 className="headteam">Meet our Team</h1>
      <div className="mainteam">
        <h3 className="tlines">
<h3>Ankit Kumar:</h3> - UX/UI Designer Ankit Kumar is the creative force behind our user interfaces. Ankit's innovative approach to design and user experience ensures that our platform is both functional and delightful to use

<br></br><br></br>
<h3> Anurag Singh:</h3> - Backend Developer Anurag Singh is the backbone of our technology infrastructure.
<br></br><br></br>
<h3>Anurag Sharma:</h3>- Frontend Developer Anurag Sharma is our frontend wizard who brings designs to life with his coding prowess.

<br></br><br></br>
<h3>Anurag Sharma:</h3> - Content Writer Anurag Sharma is our wordsmith, crafting compelling and engaging content.

        </h3>
        <img src={team} alt="" className="ourteam"/>

      </div>
        
        </section>
            <FAQ />
    
         

            <section className="fourth">
                <article className="home">
                    <h1>EasyHire</h1>
                    <p>We work for your comfort and provide the best service.</p>
                </article>

                <article className="contact-us">
                    <h1>Contact us</h1>

                    <ul>
                        <li><span className="icons"><PiMailboxBold /></span>&nbsp;<a href="/ContactForm" target="_blank">Contact EasyHire</a>
                        </li>
                        <li><span className="icons"><MdCall /></span>&nbsp;<a href="tel:9087654321">9087654321</a></li>
                        <li><span className="icons"><BsFillQuestionSquareFill /></span>&nbsp;<span onClick={() => handleScroll('#faq')} style={{cursor : "pointer"}}>View Frequently Asked Questions</span></li>

                    </ul>

                </article>

                <article className="connect">
                    <h1>Connect with us</h1>

                    <ul>
                        <li><a href="https://www.facebook.com"><span className="icons" target="_blank"><FaSquareFacebook /></span>&nbsp;Follow us on Facebook</a></li>
                        <li><a href="https://www.instagram.com"><span className="icons" target="_blank"><FaInstagram /></span>&nbsp;Follow us on Instagram</a></li>
                        <li><a href="https://www.linkedin.com"><span className="icons" target="_blank"><IoLogoLinkedin /></span>&nbsp;Connect on LinkedIn</a></li>
                    </ul>

                </article>
            </section>

            <Experience />

            {/* <div className="sye" onClick={showPanel}>Share your Experience</div> */}
            <div className="sye" onClick={showPanel}>Reach Us</div>

            {/* <Link to="/Experience" target="_blank"><div className="sye">Share your Experience</div></Link> */}

            {message && <div className="fsm">{message}</div>}
        </>
    );
}


export const func = {
    Card,
    FirstSection
}
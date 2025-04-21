/*import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './BookNow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {func} from './FirstSection';
import bike from '../assets/bike.svg';
import { GiDutchBike } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import CustomerSatisfactionSurvey from './CustomerSatisfactionSurvey';

import { useLocation } from 'react-router-dom';

import { EmailContext } from './contexts/EmailContext';

function Select() {

    const { email } = useContext(EmailContext);

//     const location = useLocation();
//   const email = location.state?.email;

    const [selected, setSelected] = useState([]);
    const [itemsSent, setItemsSent] = useState(false);
    const [availability, setAvailability] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orderPlaced, setOrderPlaced] = useState('');
    

    console.log(email + " at BookNow");

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const response = await axios.get('http://localhost:3001/BookNow');
                const availabilityData = response.data;
    
                const fetchedData = await Promise.all(
                    availabilityData.map(async (item) => {
                        const { id, title, image } = item;
                        const imageUrl = `data:image/jpeg;base64,${image}`;
                        return { id, title, imageUrl };
                    })
                );
    
                setAvailability(fetchedData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching availability');
                setLoading(false);
            }
        };
    
        fetchAvailability();
    }, []);
    
/* */
   /* const navigate = useNavigate();

    const add = (id, title) => {
        if (!selected.some(item => item.id === id)) {
            setSelected([...selected, { id, title }]);
        }
    };

    const remove = (id) => {
        setSelected(selected.filter(item => item.id !== id));
    };

    const sendOrder = async () => {
        try {
            const response = await axios.post('http://localhost:3001/BookNow', { email, selected});
            setOrderPlaced(response.data.message + ' Order Placed... Stay connected');
            setSelected([]);

            setTimeout(()=>{
                
                navigate('/CustomerSatisfactionSurvey');
            }, 1500);
            
        } catch (error) {
            setOrderPlaced(error.response.data.error);
        }

        setItemsSent(true);
    } 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <section className="full-page">
            <section className="visualise">
                <h1>Available Services</h1>
                <div className="carousel">
                    {/* {availability.map((item) => {
                        const { id, title, imageUrl } = item;
                        

                        return (
                            <div className="item" key={id}>
                                {imageUrl && <img src={imageUrl} alt={title} />}
                                <div>{title}</div>
                            </div>
                        );
                    })} }
                    <func.Card/>
                </div>
            </section>

            <div className="divider">
            <GiDutchBike size="50px"/>
                <div className="bike">Your Order <img src={bike} alt="Bike" /></div>
            </div>

            <section className="select">
                <div className="options">
                    {availability.map((item) => {
                        const { id, title } = item;
                        const isAdded = selected.some(selectedItem => selectedItem.id === id);

                        return (
                            <div className="item" key={id}>
                                <div>{title}</div>
                                <div className="buttons">
                                    {!isAdded ? (
                                        <button onClick={() => add(id, title)} disabled={itemsSent}>Add</button>
                                    ) : (
                                        <button onClick={() => remove(id)} disabled={itemsSent}>Remove</button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="user-req">
                    <h1>Your necessities</h1>
                    <div className="list">
                        {!selected.length ? (
                            <div>
                                <h1>Add your requirements</h1>
                                <div>{orderPlaced}</div>
                            </div>
                        ) : (
                            selected.map((item) => {
                                const { id, title } = item;
                                return <div key={id}>{title}</div>;
                            })
                        )}
                    </div>
                    <div id="send-req">
                        <button onClick={() => sendOrder(email, selected)} disabled={itemsSent} >Send</button>
                        <button onClick={() => setItemsSent(false)}>Edit</button>
                    </div>
                </div>
            </section>

            <section className="jk"></section>
        </section>
    );
}

export default Select;


/* */

import React, { useState } from 'react';
import './BookNow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bike from '../assets/bike.svg';
import { GiDutchBike } from "react-icons/gi";
import { chooseU } from './Data.js';

function Select() {
    // Dummy availability data
    const availabilityData = [
        { id: 1, title: 'Chef for your home' },
        { id: 2, title: 'Maid at your doorstep' },
        { id: 3, title: 'BabySitter for you child' },
        { id: 4, title: 'Security guards' }
    ];

    const [selected, setSelected] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState('');
    const [itemsSent, setItemsSent] = useState(false);

    const add = (id, title) => {
        if (!selected.some(item => item.id === id)) {
            setSelected([...selected, { id, title }]);
        }
    };

    const remove = (id) => {
        setSelected(selected.filter(item => item.id !== id));
    };

    const sendOrder = () => {
        setOrderPlaced('Order Placed... Stay connected');
        setSelected([]);
        setItemsSent(true);

        // Reset after a delay for demonstration purposes
        setTimeout(() => {
            setOrderPlaced('');
            setItemsSent(false);
        }, 1500);
    };


    
    return (
        <section className="full-page">
            
            <section className="third">
                            <h1 style={{fontSize:"50px"}}>Services we provide</h1>
                            <div className="blue-images">
                                {chooseU.map((img) => {
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
            

            <div className="divider">
                <GiDutchBike size="50px" />
                <div className="bike">Your Order <img src={bike} alt="Bike" /></div>
            </div>

            <section className="select">
                <div className="options">
                    {availabilityData.map((item) => {
                        const { id, title } = item;
                        const isAdded = selected.some(selectedItem => selectedItem.id === id);

                        return (
                            <div className="item" key={id}>
                                <div>{title}</div>
                                <div className="buttons">
                                    {!isAdded ? (
                                        <button onClick={() => add(id, title)} disabled={itemsSent}>Add</button>
                                    ) : (
                                        <button onClick={() => remove(id)} disabled={itemsSent}>Remove</button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="user-req">
                    <h1>Your necessities</h1>
                    <div className="list">
                        {!selected.length ? (
                            <div>
                                <h1>Add your requirements</h1>
                                <div>{orderPlaced}</div>
                            </div>
                        ) : (
                            selected.map((item) => {
                                const { id, title } = item;
                                return <div key={id}>{title}</div>;
                            })
                        )}
                    </div>
                    <div id="send-req">
                        <button onClick={sendOrder} disabled={itemsSent}>Send</button>
                        <button onClick={() => setItemsSent(false)}>Edit</button>
                    </div>
                </div>
            </section>

            <section className="jk"></section>
        </section>
    );
}

export default Select;



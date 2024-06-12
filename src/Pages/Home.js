import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import h2 from '../Assets/h2.jpg';
import h3 from '../Assets/h3.jpg';
import h4 from '../Assets/h4.jpg';
import h1 from '../Assets/h1.jpg';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Architects', 'Interior'],
        loop: 0
    });

    const { ref: servicesRef, inView: servicesInView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const [customerCount, setCustomerCount] = useState(1000);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Function to animate the count
    const animateCount = () => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < 1000) {
                count += Math.floor(Math.random() * 10); // Increment by a random number
                setCustomerCount(count);
            } else {
                setCustomerCount(1000);
                clearInterval(interval);
            }
        }, 50); // Adjust the interval for speed of animation
    };

    // Trigger animation when component mounts
    useEffect(() => {
        animateCount();
    }, []);

    const images = [
        { src: h2, alt: 'Image 1', name: 'Interior Design', description: 'From the acquisition of material, preparation of drawings, choosing the perfect accessories, and hiring the right team till its final execution, we pride ourselves on the utmost level of quality in our work.' },
        { src: h3, alt: 'Image 2', name: 'Construction', description: 'Our integrated construction services ensure only the highest degree of quality, efficiency, and commitment on your project which establishes our focus on smarter building practices & lasting success.' },
        { src: h4, alt: 'Image 3', name: 'Architecture', description: 'Giving each a unique essence and distinctive identity, we blend strategy, problem-solving, and creativity to design structures that showcase our talent. They are aesthetically appealing and also truly functional.' }
    ];

    const openModal = (image) => {
        setModalContent(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalContent({});
    };

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal') {
            closeModal();
        }
    };

    useEffect(() => {
        if (modalVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [modalVisible]);

    return (
        <div>
            <div className='home_container' style={{ textAlign: 'left' }}>
                <div className="home_1" style={{ paddingRight: '50px' }}>
                    <h2 style={{ margin: '25px 0px', fontSize: '1.7em' }}>
                        Living with
                        Modern  <span style={{ display: 'block', fontWeight: 'bold', fontSize: '2.5em' }}>
                            {text}<Cursor />
                        </span>
                        Concepts
                    </h2>
                    <h3 style={{ fontSize: '0.7em' }}>Where innovation meets comfort, and every corner tells a story of contemporary elegance.</h3>
                    <div className="customer-counting">
                        <h3>Join <span className="counting-number">{customerCount}</span> satisfied customers</h3>
                    </div>
                    <Link to="/contact" className="get-started-button">Get Started</Link>
                </div>
                <div className='home_2'>
                    <div className="image-container">
                        {images.map((image, index) => (
                            <div key={index} className="image-item" onClick={() => openModal(image)}>
                                <img src={image.src} alt={image.alt} />
                                <p className="image-name">{image.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`services_container fade-in ${servicesInView ? 'visible' : ''}`} ref={servicesRef}>
                <div className="pag1">
                    <h1>Choose the <span style={{ fontWeight: 'bold' }}>Experience</span></h1>
                </div>
                <div className="pag2">
                    <img src={h1} alt="Image 1" />
                    <div className="pag2-text">
                        <span>From architecture to interior design, we value and strive to deliver only the best. Our concepts and designs pave way for a modern, contemporary yet elegant appeal that is both functional and within your budget. With our knowledge, skill, and experience, we transform spaces into personal stories for all our clients</span>
                        <br></br>
                        <span>Our unique approach to architecture, interior design, and construction provide solutions that are a class apart as it carries forward our passionate ideology of “what can be imagined, can be created.”</span>
                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>{modalContent.name}</h2>
                        <img src={modalContent.src} alt={modalContent.alt} />
                        <p>{modalContent.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

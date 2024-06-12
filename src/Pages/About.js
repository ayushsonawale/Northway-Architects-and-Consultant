import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import lottieanimation from '../Animation - 1718111907269.json';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content-wrapper">
                <div className="about-header">
                    <h1>About Us</h1>
                    <p className="tagline">We are committed to delivering the best service</p>
                </div>
                <div className="about-content">
                    <p>
                        Nortway Architects & consultants was established in 2020 by Ar.Shriniket Shinde, Ar.Ganesh Thube & Ar.Darshan Jadhav with the philosophy of doing what we love, by creating long term relationships, being at the heart of projects and being instrumental in delivering what’s on paper to reality.
                    </p>
                    <p>
                        With combined team experience, Ar.Ganesh Thube & Ar.Shriniket Shinde have overseas experience in the field of Construction Project Management. We support our Clients through the development process, from Architectural and interior designing to implementation on a wide range of projects including Residential, Commercial and Retail sectors.
                    </p>
                    <p>
                        We are passionate, enthusiastic and ambitious professionals always looking to better ourselves, our projects, challenge our work and we truly believe our loyal, professional service, yet friendly and personable approach is what sets us apart.
                    </p>
                </div>
            </div>
            <div className="lottie-container">
                <Lottie animationData={lottieanimation} loop={true} />
            </div>
        </div>
    );
};

export default About;

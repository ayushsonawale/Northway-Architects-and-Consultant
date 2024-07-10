import React from 'react';
import PortfolioItem from './PortfolioItems';
import './Portfolio.css';
import img1 from '../Assets/h1.jpg';
import img2 from '../Assets/h2.jpg';
import img3 from '../Assets/h3.jpg';

const projects = [
    {
        title: "Project 1",
        image: img1,
        description: "Description of Project 1"
    },
    {
        title: "Project 2",
        image: img2,
        description: "Description of Project 2"
    },
    {
        title: "Project 3",
        image: img3,
        description: "Description of Project 3"
    },
    {
        title: "Project 1",
        image: img1,
        description: "Description of Project 1"
    },
    {
        title: "Project 2",
        image: img2,
        description: "Description of Project 2"
    },
    {
        title: "Project 3",
        image: img3,
        description: "Description of Project 3"
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Our Portfolio</h1>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <PortfolioItem key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;

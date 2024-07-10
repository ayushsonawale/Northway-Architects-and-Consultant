import React from 'react';
import './PortfolioItems.css';

const PortfolioItem = ({ project }) => {
    const { title, image, description } = project;

    return (
        <div className="portfolio-item">
            <img src={image} alt={title} />
            <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <button>View Project</button>
            </div>
        </div>
    );
};

export default PortfolioItem;

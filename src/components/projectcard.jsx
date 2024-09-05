import React from 'react';

export default function ProjectCard({ img, prjname, description }) {
    return (
        <div id="card-container">
            <img src={img} />
            <h4>{prjname}</h4>
            <span>{description}</span>
        </div >
    );
};
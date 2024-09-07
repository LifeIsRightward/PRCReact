import React from 'react';

export default function ProjectCard({ img, prjname, description, github, youtube }) {
    return (
        <div id="card-container">
            <img src={img} />
            <h4>{prjname}</h4>
            <span>{description}</span>
            <br />
            <br />
            <a href={github}>Github:{github}</a>
            <br />
            <br />
            <a href={youtube}>Youtube:{youtube}</a>
        </div >
    );
};
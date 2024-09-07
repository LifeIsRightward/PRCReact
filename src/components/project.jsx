import React from "react";
import { project } from '../projectDummy';
import ProjectCard from "./projectcard";
import Slide1 from '../img/Slide1.JPG';
import Slide2 from '../img/Slide2.JPG';
import Slide3 from '../img/Slide3.JPG';
import Slide4 from '../img/Slide4.JPG';
import Slide5 from '../img/Slide5.JPG';
import Slide6 from '../img/MyPhoto.jpg';

export default function Product() {

    const prjimg = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

    return (
        <div className="project-container">
            <div className="project-cardview">
                {
                    project.results.map((item, index) => {
                        return (
                            <ProjectCard
                                img={prjimg[index]}
                                prjname={item.prjname}
                                description={item.description}
                                github={item.github}
                                youtube={item.youtube}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

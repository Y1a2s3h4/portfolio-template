import React, { useEffect, useState } from 'react'
import Data from "./helper"
import "./ProjectsInfo.css"
export default function ProjectsInfo({ match }) {
    const [img, setImg] = useState(null)
    useEffect(() => {
        Data[match.params.id].img.then(res => setImg(res.default))

    }, [])
    return (
        <div className="container project-data-wrapper">
            <img src={img} className="project-img" alt={match.params.id} />
            <div className="project-content">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="project-title-desc mr-3 my-3">
                        <h1>{Data[match.params.id].title}</h1>
                        <p>{Data[match.params.id].description}</p>
                        <a href={Data[match.params.id].site} target="_blank" rel="noreferrer">Live Site &rarr;</a>
                    </div>
                    <div className="tech-stack my-3">
                        <h1>Tech Stack Used</h1>
                        <p>{Data[match.params.id].techUsed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

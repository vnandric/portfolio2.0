import styles from './index.module.scss'

import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


const Projects = () => {

    return (
        <div className={styles.container} id='projects'>
            <h1>Projects</h1>
            <div>
                <Slide indicators={false} slidesToShow={3} slidesToScroll={1} defaultIndex={1}>
                    <div style={{textAlign: 'center', background: 'red', padding: '200px 0', fontSize: '30px'}}>First Slide</div>
                    <div style={{textAlign: 'center', background: 'blue', padding: '200px 0', fontSize: '30px'}}>Second Slide</div>
                    <div style={{textAlign: 'center', background: 'green', padding: '200px 0', fontSize: '30px'}}>Third Slide</div>
                </Slide>
            </div>
            
        </div>
    )
}

export default Projects;
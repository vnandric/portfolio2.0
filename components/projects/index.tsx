import styles from './index.module.scss'

import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Image from 'next/image'

import Img1 from '../../src/media/image1.png'
import Img2 from '../../src/media/image2.jpg'
import Img3 from '../../src/media/image3.jpg'

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'


const Projects = () => {

    const buttonStyle = {
        margin: '10px',
        color: 'white',
        fontSize: '2rem'
    }

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><AiOutlineArrowLeft /></button>,
        nextArrow: <button style={{ ...buttonStyle }}><AiOutlineArrowRight /></button>
    }

    return (
        <div className={styles.container} id='projects'>
            <div>
                <Slide {...properties} indicators={false} slidesToShow={3} slidesToScroll={1}>
                    <div>
                        <Image src={Img1} alt='img1' />
                    </div>
                    <div>
                        <Image src={Img2} alt='img2' />
                    </div>
                    <div>
                        <Image src={Img3} alt='img3' />
                    </div>
                </Slide>
            </div>
            
        </div>
    )
}

export default Projects;
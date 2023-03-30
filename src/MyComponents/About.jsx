import React from 'react'
import Bg_image from "./assests/About-Bg.jpg"
import './About.css'

const About = () => {
    return (
        <>
            <div className='bg-photo'>
                <img className='Bg' src={Bg_image} alt="Background" />
            </div>

            <div className="Page">
                <div className="Half">
                    <h1 className='head-about'>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis cupiditate et laudantium, quasi enim ipsum sequi consectetur magnam? Nihil aliquid id cum sunt quo provident debitis quas vel. Inventore, illum! Nobis alias suscipit amet. Eligendi impedit dolorem commodi ad reprehenderit laboriosam corporis s. Vel, accusantium!</p>
                </div>
                <div className="other-Half">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate quibusdam minus nesciunt soluta doloribus voluptates facilis, provident natus asperiores fuga, reprehenderit unde! Nemo eveniet commodi maiores neque sit architecto nam ad? Magni, et reiciendis velit consequuntur odio pariatur facere tenetur impedit qui non? Repellendus reprehenderit corporis molestias aspernatur earum amet quibusdam natus voluptas laborum quod repudiandae fugit eaque doloribus numquam praesentium dolore accusamus harum, tenetur assumenda hic. repellendus ex autem provident error amet.</p>
                    <div className="read-div">
                        <a className='read' href="#">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
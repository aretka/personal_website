import React from 'react' 

import classes from './Bio.module.css'

const bio = () => (
    <div className={classes.Bio}>
        <h2>How I got into web development?</h2>
        <p>I have been passionate about creating websites for last couple years. My first personal project was developed in 12th grade. It was multi-page informative website about car-part company. Basic knowledge of HTML, CSS and Javascript was gained. I was really motivated for the product I could create but eventually I understood that I had to learn much more. I took my first web development course on Udemy where I mostly learned working with bootstrap. Later on, I was given the idea of creating another website for trawl company "Autopagreitis". It was great opportunity for me to create project from scratch and dive into more detailed understanding of creating, maintaining and publishing a website (<a href="https://autopagreitis.lt/" target="_blank">autopagreitis.lt</a>). After I strengthened my basic knowledge of website development I decided to take course of one of the most popular Javascript libraries - React. I really loved the way I could write “HTML” in Javascript files and display dynamic content effortlessly. Not only am I still passionate about learning React but I am also creating my first react website about myself.</p>
        <h2>Future goals:</h2>
        <ul>
            <li>Gain experience working with <b>React</b></li>
            <li>Improve knowledge how to fetch and send data to a server</li>
            <li>Learn more about <b>React Redux</b></li>
            <li>Gain experience working on a larger projects</li>
            <li>Create and accomplish personal project</li>
        </ul>
    </div>
)

export default bio;
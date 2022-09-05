import React from 'react';
import ReactDom from 'react-dom';
import './Home.css'
import { BsGithub,BsTwitter,BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaDiscord,FaInstagram,FaLinkedin } from "react-icons/fa";




export default function Home() {
    return (
 <div className='Home-component'>
<h1 className='name'>CLINTON NJOGU </h1>
<ul className='personal-details'>
    <li className='location'>Nairobi Kenya</li>
    <li className='contact'>+254114597682</li>
    <li className='email'>clingyking007@gmail.com</li>
</ul>

<h3 className='title'>DEVELOPER ROLES</h3>
<p className='description'>Smart Contract Developer: Analysis of problems facing decentralized finance across various block-chains and creation of smart contracts to optimally provide solutions.</p>
<p className='description'>Front-end Engineer:Developing of simple, intuitive user-friendly user interfaces that are able to aptly handle complex bussiness logic while maintaining  ease of use.!</p>

<h3 className='title'>WORK EXPERIENCE</h3>
<h4 className='Role'>Student Intern</h4>
<p className='role-description'> 05/2021 to 09/2021
    <br></br>
    Baraka Agricultural College 
    <br></br>
    Nakuru 
    <br></br>
    I worked alongside the Lead Lecturer in performing the following tasks:
    <ul>
        <li>Creation of a web developer Roadmap </li>
        <li>Guiding of students in their Java projects</li>
        <li>Introducing students to web development using html, css & javascript. I also played a key role in taking them through their web dev projects as this was specifically assigned to me.</li>
    </ul>
</p>
<h4 className='Role'>Back-end Solidity developer Intern</h4>
<p className='role-description'> 08/2022 to 12/2022
    <br></br>
    Weki Learning Management System  
    <br></br>
    Singapore-Remote 
    <br></br>
    I worked alongside the token-economics & web development team in performing the following tasks
    <ul>
        <li>Creation of a web3 developer Roadmap.</li>
        <li>Assembly,filtering out & customizing of learning resources to reduce the learning curve </li>
        <li> </li>
    </ul>
</p>
<div className='skills-container'>
    <h3 className='title'>SKILLS</h3>
    <ul className='skills-list'>
        <li>Smart Contract Developer</li>
        <li>Back-end Solidity developer</li>
        <li>React front-end developer</li>
        <li>Svelte Front-end developer</li>
        <li>Java Core developer</li>
        <li>Java Gui developer using swing and Javafx</li>
    </ul>
</div>

<div className='education-container'>
    <h3 className='title'>EDUCATION</h3>
    <h4 className='school'>JOMO KENYATTA UNIVERSIY OF AGRICULTURE AND TECHNOLOGY</h4>
    <p className='course'>Bachelor of Science in Mathematics and Computer Science</p>
    <p className='location'>Juja</p>
    <p className='date-time'>09/2019 to Present </p>
</div>
<div className='additional-information'>
    <p>I have coded in the following languages before and therefore I beleive I can handle any the below languages proffesionally</p>
    <ul>
        <li>C/C++</li>
        <li>Java Core</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>MySql</li>
        <li>Kotlin</li>
        <li>Typescript</li>
        <li>Solidity</li>
        <li>Bash/shell Scripting</li>
    </ul>
    <br></br>
    <p className='frameworks'>Notably I have also interacted with the below frameworks and can work proffesionally with them.</p>
    <ul> 
        <li>Reactjs</li>
        <li>Svelte</li>
        <li>Java-swing</li>
        <li>Java-fx</li>
        <li>Python-pygame</li>
        <li>Nodejs/Express</li>
        <li>Mongodb</li>
        <li>Tailwindcss</li>
    </ul>
    <p className='ending-note'>Check out my github for my projects</p>
</div>
<div className='footer-container'>
    <a href='github.com/Clint911'> <BsGithub /> </a>
    <a href='clingyking007@gmail.com'> <MdEmail /> </a>
    <a href='twitter.com/@KingClingy'> <BsTwitter /> </a>
    <a href='discord.com/Clinton_eth#2300'> <FaDiscord /> </a>
    <a href='instagram.com/Clinton_eth'> <FaInstagram /> </a>
    <a href='linkedin.com/Clinton Njogu'> <FaLinkedin /> </a>
    <a href='facebook.com/clingyking'> <BsFacebook /> </a>
    
</div>
 </div>
    );
}
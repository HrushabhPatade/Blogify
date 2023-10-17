import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';

const AboutUs = () => {
return (
    <div className="about-us">
        <NavBar />
    <h2>About Us</h2>
    <p>
    Blogify is a platform dedicated to delivering quality blog articles on various topics. Our mission is to provide
    a space for writers and readers to connect and share their thoughts, knowledge, and experiences.
    </p>
    <p>
    Whether you're a passionate writer or an avid reader, Blogify is here to inspire, educate, and entertain you.
    Join our community and start your journey into the world of blogging today!
    </p>
    <p>
    Are you ready to write your first blog post?
    </p>
    <p className='button'><Link to={"/cr"}  className="link-class">Get Started</Link></p>
    <br/><br/><br/>
    </div>
);
};

export default AboutUs;
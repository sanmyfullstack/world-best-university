import React, { useState } from 'react';
import big from "./assets/logo.png";
import kin from "./assets/london.png";
import iba from "./assets/newyork.png";
import owe from "./assets/washington.png";
import lib from "./assets/Library.png";
import play from "./assets/basketball.png";
import caf from "./assets/cafeteria.png";
import madu from "./assets/user1.jpg";
import tes from "./assets/user2.jpg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  // Missing toggle functions for mobile navigation menu
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "0";
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "-200px";
  };

  return (
    <>
      {/* ------ Header ------ */}
      <section className="header">
        <nav>
          <img src={big} alt="logo"/>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">COURSE</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>SAMWELL UNIVERSITY</h1>
          <p>
            Making websites is now one of the easiest things in the world. 
            You just need to learn HTML, CSS, <br /> JavaScript and you are good to go.
          </p>
          <a href="" className="hero-btn">Visit Us To Know More</a>
        </div>
      </section>

      {/* ------ Course ------ */}
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut labore, quia minus nostrum nisi culpa temporibus, debitis aspernatur, itaque adipisci iure ducimus dolores.</p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut labore, quia minus nostrum nisi culpa temporibus, debitis aspernatur, itaque adipisci iure ducimus dolores.</p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut labore, quia minus nostrum nisi culpa temporibus, debitis aspernatur, itaque adipisci iure ducimus dolores.</p>
          </div>
        </div>
      </section>

      {/* ------- Campus ----- */}
      <section className="campus">
        <h1>Our Nigerian Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
              <img src={kin} alt="abuja campus"/>
            <div className="layer">
              <h3>ABUJA</h3>
            </div>
          </div>
          <div className="campus-col">
           <img src={iba} alt="campus"/>
            <div className="layer">
              <h3>IBADAN</h3>
            </div>
          </div>
          <div className="campus-col">
              <img src={owe} alt="campus"/>
            <div className="layer">
              <h3>OWERRI</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ------- Facilities ------- */}
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className="row">
          <div className="facilities-col">
              <img src={lib} alt="llibraray"/>
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore id dicta dolores nemo accusamus?</p>
          </div>
          <div className="facilities-col">
              <img src={play} alt="playground"/>
            <h3>Largest Playground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore id dicta dolores nemo accusamus?</p>
          </div>
          <div className="facilities-col">
            <img src= {caf} alt="Cafeteria" />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore id dicta dolores nemo accusamus?</p>
          </div>
        </div>
      </section>

      {/* ------- Testimonials ------- */}
      <section className="testimonials">
        <h1>What Our Students Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className="row">
          <div className="testimonial-col">
              <img src={madu} alt="testimonial"/>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsa molestiae. Esse, facere eius, mollitia tenetur aspernatur eveniet commodi voluptatibus quasi qui nostrum hic ducimus rem alias distinctio nam voluptas!</p>
              <h3>Sarah Madu</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="testimonial-col">
             <img src={tes} alt="testimonial"/>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsa molestiae. Esse, facere eius, mollitia tenetur aspernatur eveniet commodi voluptatibus quasi qui nostrum hic ducimus rem alias distinctio nam voluptas!</p>
              <h3>Onioluwa Paul</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </section>

      {/* ------- Call To Action ------- */}
      <section className="cta">
        <h1>Enroll For Our Online Courses <br />Anywhere From The World</h1>
        <a href="" className="hero-btn">CONTACT US</a>
      </section>

      {/* ------- Footer ------- */}
      <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aperiam, voluptate ex facilis itaque nihil exercitationem neque.</p>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <p>Designed by NDUBUISI SAMUEL</p>
      </section>
    </>
  );
}

export default App;
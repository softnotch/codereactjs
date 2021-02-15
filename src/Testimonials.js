import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';
import k from './img/k.svg';
// import k from './img/f.svg';
// import  from './img/g.svg';


export default class Testimonials extends Component {
  render() {
    return (
          <div className="container-fluid ">

      <h2 className="text-center mt-5 ">Testimonials</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
                <img
                    // className="d-block w-100"
                    src={k}
                    alt="First slide"
                    fluid
                />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
                  <img
                    // className="d-block w-100"
                    src={k}
                    alt="First slide"
                    fluid
                  />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
               <img
                    // className="d-block w-100"
                    src={k}
                    alt="First slide"
                    fluid
                />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
          </div>
    );
  }
}
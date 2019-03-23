import React, { Component } from "react";
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../constants/style/variables.scss";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        draggable: false,
       
      };
      return (
        <div className="container"> 
        
        <div className="homepageText-content">
        <button className="slick-prev left-slick" type="button"/>
        <button className="slick-prev right-slick" type="button"/>
          <Slider {...settings} >
         
            <div >
        
                <div className="titelCarousel hompageText-title ">
                  <h1>1. Nach 18 keine Kohlenhydrate mehr</h1>
                  
              </div>

              <div className="linkerText hompageText-text">
                  <p>linker text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
              <div className="rechterText hompageText-text">
                  <p>rechter text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
                
              
              
              
            </div>

            <div>
            <div className="titelCarousel hompageText-title ">
                  <h1>2. Nach 18 keine Kohlenhydrate mehr</h1>
              </div>

              <div className="linkerText hompageText-text">
                  <p>linker text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
              <div className="rechterText hompageText-text">
                  <p>rechter text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
            </div>

            <div>
            <div className="titelCarousel hompageText-title ">
                  <h1>3. Nach 18 keine Kohlenhydrate mehr</h1>
              </div>

              <div className="linkerText hompageText-text">
                  <p>linker text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
              <div className="rechterText hompageText-text">
                  <p>rechter text das ist der test für die linke seite responsiv muss es auch sein mak schauen was noch so kommt</p>
              </div>
            </div>
            
          </Slider>
          </div>
        </div>
      );
    }
  }

  
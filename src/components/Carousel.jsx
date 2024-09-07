import React, { useContext, useEffect } from "react";

import {
    ButtonBack,
    ButtonNext,
    DotGroup,
    Slide,
    Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import useWindowSize from "../windowSize";

import styled from "styled-components";

import img1 from "../assets/Group 153.png";
import {Grid, Typography} from "@mui/material";
import img2 from "../assets/Group 155.png";
import img3 from "../assets/Group 156.png";
import constructor from "../assets/constructor.png";
import aiText from "../assets/aiText.png";
import videoContent from "../assets/videoContent.png";
import rightArrow from '../assets/rightArrow.png';

const CarouselSlider = ({ setSlideCount, setCurrentSlide }) => {
    const screenWidth = useWindowSize();

    //pure-react-carousel context
    const carouselContext = useContext(CarouselContext);

    useEffect(() => {
        const updateCarouselSlide = (slideToBeVisible) => {
            const {
                currentSlide,
                totalSlides,
                visibleSlides
            } = carouselContext.state;

            setSlideCount(slideToBeVisible);

            //this is a fix to reset currentSlide when screen resizes
            if (
                currentSlide >= totalSlides - visibleSlides ||
                currentSlide >= totalSlides - slideToBeVisible
            ) {
                setCurrentSlide(totalSlides - slideToBeVisible);
            }
        };

        if (screenWidth < 832) {
            updateCarouselSlide(1);
        } else if (screenWidth < 1088) {
            updateCarouselSlide(2);
        }
        //>= 1088
        else {
            updateCarouselSlide(3);
        }
    }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);
    return (
        <Wrapper>
            <Slider>
                <Slide index={0}>
                    <img src={img1} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "1"}} alt=""/>
                    <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                        Интерфейс для управления заказами
                    </Typography>
                </Slide>
                <Slide index={1}>
                        <img src={img2} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "1"}} alt=""/>
                        <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                            Инструменты для анализа доходов и расходов
                        </Typography>
                </Slide>
                <Slide index={2}>
                        <img src={img3} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "1"}} alt=""/>
                        <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                            Возможность публикации в блоге
                        </Typography>
                </Slide>
                <Slide index={3}>
                        <img src={constructor} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "0.8"}} alt=""/>
                        <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                            Конструктор изделий
                        </Typography>
                </Slide>
                <Slide index={4}>
                        <img src={aiText} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "1"}} alt=""/>
                        <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                            AI-генерация изображений
                        </Typography>
                </Slide>
                <Slide index={5}>
                        <img src={videoContent} style={{width: '50%', maxWidth: '150px', maxHeight: "150px",
                            aspectRatio: "1"}} alt=""/>
                        <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                            Лента и видеоконтент
                        </Typography>
                </Slide>
            </Slider>
            <div className="controls">
                <ButtonBack className="btn-arrow reverse-arrow">
                    <img src={rightArrow} alt="arrow" />
                </ButtonBack>
                <DotGroup className="dot-group" />
                <ButtonNext className="btn-arrow">
                    <img src={rightArrow} alt="arrow" />
                </ButtonNext>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselSlider;

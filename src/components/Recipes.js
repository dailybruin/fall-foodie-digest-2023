import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import semicircle from "../images/Ellipse 13.png";
import { useState } from "react";

const OuterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 70%;
  min-height: 400px;
  height: fit-content;
  border: 1px black solid;
  border-radius: 5px;
  background-color: #fcf1d9;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 30px; /* Adjust the height as needed */
  background-color: #41533e;
  border: 1px black solid;
  border-radius: 5px;
  top: 0;
`;

const InnerContainerText = styled.h3`
  width: 40px;
  height: 30px; /* Adjust the height as needed */
  color: white;
  padding-top: 2px;
  padding-left: 7px;
  margin-top: 0;
`;

const SemiCircleContainer = styled.div`
  width: 80%;
  height: 70%; /* Adjust the height as needed */
  position: absolute;
  bottom: 0;
`;

const SemiCircle = styled.img`
  width: 100%;
  height: 100%;
  bottom: 0;
`;

//CAROUSEL
const CarouselContainer = styled.div`
  width: 100%;
  height: 80%;
  float: left;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
`;

const Carousel = styled.div`
  width: 50%;
  height: 100%;
  //   border: 1px solid red;
  border-radius: 5px;
  position: relative;
  left: 25%;
  margin-bottom: 2em;
  top: -1em;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 80%;
  left: 0;
  position: absolute;
  top: 1.5em;
  border-radius: 30px;
`;

const CarouselItemName = styled.h3`
  top: 0;
  margin: 0;
  position: absolute;
  color: white;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const CarouselItemByLine = styled.p`
  bottom: -1em;
  position: absolute;
  color: white;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

//NAVIGATION FOR CAROUSEL
const NavigationButtonRight = styled.button`
  background-color: transparent;
  border: none;
  width: 20%;
  float: left;
  font-size: 25px;
  cursor: pointer;
  color: white;
  position: absolute;
  bottom: 0;
  left: 5%;
`;

const NavigationButtonLeft = styled.button`
  background-color: transparent;
  border: none;
  width: 20%;
  float: right;
  font-size: 25px;
  cursor: pointer;
  color: white;
  position: absolute;
  bottom: 0;
  right: 5%;
`;

export default function Recipes(props) {
  const [currentRecipe, setCurrentRecipe] = useState(0);

  const goToPreviousRecipe = () => {
    setCurrentRecipe((prevRecipe) =>
      prevRecipe === 0 ? props.recipes.length - 1 : prevRecipe - 1
    );
  };

  const goToNextRecipe = () => {
    setCurrentRecipe((prevRecipe) =>
      prevRecipe === 0 ? props.recipes.length - 1 : prevRecipe - 1
    );
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <InnerContainerText>RECIPES</InnerContainerText>
      </InnerContainer>
      <SemiCircleContainer>
        <SemiCircle src={semicircle} alt="semicircle" />
        <CarouselContainer>
          <NavigationButtonRight onClick={goToPreviousRecipe}>
            &#8249;
          </NavigationButtonRight>
          <Carousel>
            <CarouselItemName>
              {props.recipes[currentRecipe].recipe_name}
            </CarouselItemName>
            <CarouselImage
              src={props.recipes[currentRecipe].recipe_image}
              alt={props.recipes[currentRecipe].recipe_name}
            />
            <CarouselItemByLine>
              {props.recipes[currentRecipe].recipe_byline}
            </CarouselItemByLine>
            <p>{props.recipes[currentRecipe].recipe_img_credit}</p>
            <a
              href={props.recipes[currentRecipe].recipe_url}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </Carousel>
          <NavigationButtonLeft onClick={goToNextRecipe}>
            &#8250;
          </NavigationButtonLeft>
        </CarouselContainer>
      </SemiCircleContainer>
    </OuterContainer>
  );
}

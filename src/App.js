import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
import { mediaQueries } from './shared/config';

import './App.css';
import leaves from "./images/LeafBorder.png";
import mobileLeaves from "./images/mobileLeaves.png";


import Header from './components/Header';
import Footer from './components/Footer';
import FoodieFeatures from './components/FoodieFeatures';
import RelatedCoverage from  './components/RelatedCoverage';
import MobileFoodie from './components/MobileFoodie';
import CollegeStudentMediaDiary from "./components/CollegeStudentMealDiary";
import StaffFavorites from "./components/StaffFavorites";
import Recipes from "./components/Recipes";

const Container = styled("div")`
  background-color: #FFFBF3;
  background-image: url(${leaves});
  ${mediaQueries.mobile} {
    background-image: url(${mobileLeaves});
  }
`;


function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/fall-foodie-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, []);


  if(isMobile)
  {
    return data && (
      <Container>
      <div className="App">
        <Header/>
        <RelatedCoverage coverage={data.related_coverage}/>
        <MobileFoodie mobile={data.foodie_features}/>
        <Footer/>
      </div>
      </Container>
    )
  }
  else{
    return data && (
      <Container>
      <div className="App">
        <Header/>
        <Recipes recipes={data.recipes}></Recipes>
        <br></br>
        <FoodieFeatures related={data.foodie_features}/>
        <br></br><br></br>
        <CollegeStudentMediaDiary articles={data.college_student_meal_diary[0]}/>
        <br></br><br></br>
        <StaffFavorites video={data.staff_favorites[0]}></StaffFavorites>
        <br></br><br></br>
        <RelatedCoverage coverage={data.related_coverage}/>
        <br></br><br></br>
        <Footer/>
      </div>
      </Container>
    )
   }
  
}

export default App;

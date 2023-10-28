import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
import { mediaQueries } from './shared/config';

import './App.css';
import leaves from "./images/LeafBorder.png";
import mobileLeaves from "./images/mobileLeaves.png";


import Header from './components/Header';
import Footer from './components/Footer';
import Chef_Interviews from './components/Chef_Interviews';

import FoodieFeatures from './components/FoodieFeatures';
import RelatedCoverage from  './components/RelatedCoverage';
import MobileFoodie from './components/MobileFoodie';
import CollegeStudentMediaDiary from "./components/CollegeStudentMealDiary";
import StaffFavorites from "./components/StaffFavorites";
import Recipes from "./components/Recipes";
import MobileRecipes from './components/MobileRecipes'
import MobileChefInterviews from './components/MobileChefInterviews';
import MobileCollegeStudentMealDiary from './components/MobileCollegeStudentMealDiary';
import MobileStaffFavorites from './components/MobileStaffFavorites';
import Landing from './components/Landing';

const Container = styled("div")`
  background-color: #FFFBF3;
  background-image: url(${leaves});
  ${mediaQueries.mobile} {
    background-image: url(${mobileLeaves});
  }
`;


function App() {
  const [ data, setData ] = useState(null);
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile)
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/fall-foodie-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, []);

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  if(isMobile)
  {
    return data && (
      <Container>
      <div className="App">
        <Header/>
        <br></br>
        <MobileRecipes mobile={data.recipes}></MobileRecipes>
        <br></br>
        <MobileChefInterviews mobile={data.chef_interviews[0]}></MobileChefInterviews>
        <br></br>
        <MobileFoodie mobile={data.foodie_features}/>
        <br></br>
        <MobileCollegeStudentMealDiary mobile={data.college_student_meal_diary[0]}></MobileCollegeStudentMealDiary>
        <br></br>
        <MobileStaffFavorites mobile={data.staff_favorites[0]}></MobileStaffFavorites>
        <br></br>
        <RelatedCoverage coverage={data.related_coverage}/>
        <br></br>
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
        <Landing data={data}></Landing>
        <Recipes recipes={data.recipes}></Recipes>
        <br></br>
        <Chef_Interviews interviews={data.chef_interviews[0]} />
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

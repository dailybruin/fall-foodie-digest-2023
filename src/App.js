import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import FoodieFeatures from './components/FoodieFeatures';
import RelatedCoverage from  './components/RelatedCoverage';
import MobileFoodie from './components/MobileFoodie'
import CollegeStudentMediaDiary from "./components/CollegeStudentMealDiary";
import StaffFavorites from "./components/StaffFavorites";

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/fall-foodie-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, []);


  // if(!isMobile)
  // {
  //   return data && (
  //     <div className="App">
  //       <Header/>
  //       <RelatedCoverage coverage={data.related_coverage}/>
  //       <MobileFoodie mobile={data.foodie_features}/>
  //       <Footer/>
  //     </div>
  //   )
  // }
  // else{
    return data && (
      <div className="App">
        <Header/>
        <CollegeStudentMediaDiary articles={data.college_student_meal_diary[0]}/>
        <StaffFavorites video={data.staff_favorites[0]}></StaffFavorites>
        <FoodieFeatures related={data.foodie_features}/>
        <RelatedCoverage coverage={data.related_coverage}/>
        <Footer/>
      </div>
    )
  // }
  
}

export default App;

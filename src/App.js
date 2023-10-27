import React, { useState, useEffect } from "react";
import {isMobile} from 'react-device-detect';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import FoodieFeatures from './components/FoodieFeatures';
import RelatedCoverage from  './components/RelatedCoverage';
import MobileFoodie from './components/MobileFoodie'

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
      <div className="App">
        <MobileFoodie mobile={data.foodie_features}/>
        <RelatedCoverage coverage={data.related_coverage}/>
        <Footer/>
      </div>
    );
  }
  else{
    return data && (
      <div className="App">
        <Header/>
        <FoodieFeatures related={data.foodie_features}/>
        <RelatedCoverage coverage={data.related_coverage}/>
        <Footer/>
      </div>
    );
  }


}

export default App;

import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodieFeatures from './components/FoodieFeatures';
import RelatedCoverage from  './components/RelatedCoverage';

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/fall-foodie-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      <FoodieFeatures related={data.foodie_features}/>
      <RelatedCoverage coverage={data.related_coverage}/>
      <Footer/>
    </div>
  );
}

export default App;

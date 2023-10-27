import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chef_Interviews from './components/Chef_Interviews';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      'https://kerckhoff.dailybruin.com/api/packages/flatpages/fall-foodie-2023'
    )
      .then((res) => res.json())
      .then((res) => setData(res.data['article.aml']));
  }, []);

  return (
    data && (
      <div className="App">
        <Header />
        Hello Daily Bruin!
        <Chef_Interviews interviews={data.chef_interviews[0]} />
        <Footer />
      </div>
    )
  );
}

export default App;

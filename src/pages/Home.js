import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Info from '../components/Info';
import Mission from '../components/Mission';
import Cakes from '../components/Cakes';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <Info />
    <Mission />
    <GetInTouch />
    <Cakes />
    <FAQ />
    </>

  )
}

export default Home
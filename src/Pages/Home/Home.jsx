import React from 'react';
import Footer from '../../components/organisms/Footer/Footer';
import Header from '../../components/atoms/Header/Header';
import NavBar from '../../components/organisms/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import BorderBottom from '../../components/molecules/BorderBottom/BorderBottom';
import Logos from '../../components/atoms/Logos/Logos';
import Hero from '../../components/molecules/Hero/Hero';
import Profiles from '../../components/atoms/Profiles/Profiles';
import Slider from '../../components/molecules/Slider/Slider';
import Card from '../../components/atoms/Cards/Card';

function Home() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero />
      <BorderBottom />
      <Header
        title="Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <Card />
      <Header
        title="Popular Destinations"
        subtitle="Select Our Best Popular Destinations"
      />
      <Slider />
      <Header title="Why us?" subtitle="Why Travel with Africa wizzy Safari" />
      <Logos />
      <Header
        title="Our Traveller Say"
        subtitle="What our clients say about us"
      />
      <Profiles />
      <Footer />
    </div>
  );
}

export default Home;

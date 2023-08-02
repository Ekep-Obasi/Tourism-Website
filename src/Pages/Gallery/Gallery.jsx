import React from 'react';
import './Gallery.css';
import LandingImage from '../../components/molecules/LandingImage/LandingImage';
import StickyBar from '../../components/StickyBar/StickyBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Buttons from '../../components/atoms/Buttons/Buttons';
import Footer from '../../components/organisms/Footer/Footer';
import AboutNav from '../../components/organisms/NavBar/NavBar';

function Gallery() {
  return (
    <div className="GalleryStyles">
      <StickyBar />
      <AboutNav />
      <LandingImage title="Gallery" />
      <div className="buttonSpaced">
        <Buttons title="Open Instagram" color="#C7923E" />
      </div>
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default Gallery;

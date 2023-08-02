import React from 'react';
import './ImageGallery.css';

function ImageGallery() {
  return (
    <div className="MainBox">
      <div className="box">
        <div className="box-1">
          <div className="flex-1">
            <div className="box-1-b">1-B</div>
            <div className="box-1-c">2-C</div>
          </div>
          <div className="box-1-a">1-A</div>
        </div>
        <div className="box-2">
          <div className="box-2-a">2-A</div>
          <div className="box-2-b">2-B</div>
        </div>
        <div className="box-3">
          <div className="box-3-a">3-A</div>
          <div className="flex-3">
            <div className="box-3-b">3-B</div>
            <div className="box-3-c">3-C</div>
          </div>
        </div>
      </div>
      <div className="box-A">
        <div className="box-6">
          <div className="box-6-a">6-A</div>
          <div className="flex-6">
            <div className="box-6-b">6-B</div>
            <div className="box-6-c">6-C</div>
          </div>
        </div>
        <div className="box-4-a">4-A</div>
        <div className="box-5">
          <div className="box-5-a">5-A</div>
          <div className="box-5-b">5-B</div>
        </div>
        <div className="box-4">
          <div className="flex-4">
            <div className="box-4-b">4-B</div>
            <div className="box-4-c">4-C</div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-7">
          <div className="flex-7">
            <div className="box-7-b">7-B</div>
            <div className="box-7-c">7-C</div>
          </div>
          <div className="box-4-a">7-A</div>
        </div>
        <div className="box-8">
          <div className="box-8-a">8-A</div>
          <div className="box-8-b">8-B</div>
        </div>
        <div className="box-9">
          <div className="box-9-a">9-A</div>
          <div className="flex-9">
            <div className="box-9-b">9-B</div>
            <div className="box-9-c">9-C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;

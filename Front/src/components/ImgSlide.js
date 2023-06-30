import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import '../styles/imgSlider.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImgSlide = () => (
  <AutoPlaySwipeableViews interval={3000}>
    <div>
      <img
        src='/img/다원시스.png'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
        />
    </div>
    <div>
      <img
        src='/img/우진산전.jpg'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src='/img/유진기공.jpg'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src='/img/lg.jpg'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src='/img/씨에스.jpg'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
      />
    </div>
    <div>
      <img
        src='/img/샬롬.jpg'
        alt=''
        style={{ width: '20%',  objectFit: 'cover' }}
      />
    </div>
  </AutoPlaySwipeableViews>
);

export default ImgSlide;

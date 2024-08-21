/*import './index.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BannerDiv} from './styledComponents'
import React from 'react';

const Banner = props => {
  const {bannerClicks} = props
  const clickingClose = () => {
    bannerClicks()
  }
  return (
    <BannerDiv data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          className="img2"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium</p>
        <button type="button" className="button4">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="button3"
        onClick={clickingClose}
        data-testid="close"
      >
        <AiOutlineClose className="closeIcon" />
      </button>
    </BannerDiv>
  )
}
export default Banner
*/ 

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { AiOutlineClose } from 'react-icons/ai';
import { BannerDiv } from './styledComponents';
import './index.css';

const Banner = (props) => {
  const { bannerClicks } = props;
  const clickingClose = () => {
    bannerClicks();
  };

  return (
    <BannerDiv data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          className="img2"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium</p>
        <button type="button" className="button4">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="button3"
        onClick={clickingClose}
        data-testid="close"
      >
        <AiOutlineClose className="closeIcon" />
      </button>
    </BannerDiv>
  );
};

// Add PropTypes validation
Banner.propTypes = {
  bannerClicks: PropTypes.func.isRequired,
};

export default Banner;

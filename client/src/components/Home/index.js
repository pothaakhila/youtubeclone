/*
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import HomeBody from '../HomeBody';
import Header from '../Header';
import SideBar from '../SideBar';
import Banner from '../Banner';
import './index.css';

class Home extends Component {
  state = { isBanner: true };

  findJobButton = () => {
    const { history } = this.props;
    return history.replace('/jobs');
  };

  bannerClicks = () => {
    this.setState({ isBanner: false });
  };

  render() {
    const { isBanner } = this.state;

    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            {isBanner ? (
              <Banner className="banDiv" bannerClicks={this.bannerClicks} />
            ) : null}
            <HomeBody />
          </div>
        </div>
      </>
    );
  }
}

// Define prop types
Home.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
*/ 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBody from '../HomeBody';
import Header from '../Header';
import SideBar from '../SideBar';
import Banner from '../Banner';
import './index.css';

const Home = () => {
  const [isBanner, setIsBanner] = useState(true);

  const navigate = useNavigate();

  const findJobButton = () => {
    navigate('/jobs');
  };

  const bannerClicks = () => {
    setIsBanner(false);
  };

  return (
    <>
      <ul>
        <Header />
      </ul>
      <div className="homeMainDiv">
        <SideBar />
        <div>
          {isBanner ? (
            <Banner className="banDiv" bannerClicks={bannerClicks} />
          ) : null}
          <HomeBody />
          {/* Example button using findJobButton */}
          <button onClick={findJobButton}>Find Jobs</button>
        </div>
      </div>
    </>
  );
};

export default Home;

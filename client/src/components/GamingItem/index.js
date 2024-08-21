/*import {Link} from 'react-router-dom'
import './index.css'
import React from 'react';

const GamingItem = props => {
  const {each} = props
  const {id, title, thumbnailUrl, viewCount} = each
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <li className="cardDiv2">
        <img src={thumbnailUrl} className="img14" alt="video thumbnail" />
        <p className="p3">{title}</p>
        <p className="p4">{viewCount}</p>
      </li>
    </Link>
  )
}
export default GamingItem */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';
import React from 'react';

const GamingItem = ({ each }) => {
  const { id, title, thumbnailUrl, viewCount } = each;
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <li className="cardDiv2">
        <img src={thumbnailUrl} className="img14" alt="video thumbnail" />
        <p className="p3">{title}</p>
        <p className="p4">{viewCount}</p>
      </li>
    </Link>
  );
};

GamingItem.propTypes = {
  each: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    viewCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default GamingItem;


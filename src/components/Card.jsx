import React from 'react';
import '../index.css';
const Card = props => {
  let { imgSrc } = props.data;
  return (
    <div>
      <div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src={imgSrc} alt="#" class="card-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
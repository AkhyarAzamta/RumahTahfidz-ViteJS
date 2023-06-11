import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mypic from '../assets/foto/image1.jpeg';
import mypic2 from '../assets/foto/image2.jpeg';
import mypic3 from '../assets/foto/image3.jpeg';

const CarouselComponent= () => {
  return (
    <Carousel showArrows={true} showThumbs={false} className="m-6 sm:w-full sm:max-w-lg sm:mx-auto">
      <div>
        <img src={mypic} alt="Image 1" />
        {/* <p className="legend">Deskripsi Gambar 1</p> */}
      </div>
      <div>
        <img src={mypic2} alt="Image 2" />
        {/* <p className="legend">Deskripsi Gambar 2</p> */}
      </div>
      <div>
        <img src={mypic3} alt="Image 3" />
        {/* <p className="legend">Deskripsi Gambar 3</p> */}
      </div>
    </Carousel>
  );
}

export default CarouselComponent;

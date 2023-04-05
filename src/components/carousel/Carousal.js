import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import image1 from "../../images/hm.png"
import image2 from "../../images/fullHori.svg"
import image3 from "../../images/hm.png"
import "./Carousal.css"
import BACKEND_URL from '../../constants';
export const Carousal = (props) => {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '100vh',
    width        : '100vw',
    arrows       :  false,
    pagination   : true,
  };

  const data = [
    {
      image: image1,
      key:"1"
    },
    {
      image: image2,
      key:"2"
    },
    {
      image: image3,
      id:"3"
    },
  ]
  const def= [
    {
      "id": 13,
      "name": "ath_slide1.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 749,
      "height": 960,
      "formats": {
        "small": {
          "ext": ".jpg",
          "url": "/uploads/small_ath_slide1_7d8cd3b190.jpg",
          "hash": "small_ath_slide1_7d8cd3b190",
          "mime": "image/jpeg",
          "name": "small_ath_slide1.jpg",
          "path": null,
          "size": 52.22,
          "width": 390,
          "height": 500
        },
        "medium": {
          "ext": ".jpg",
          "url": "/uploads/medium_ath_slide1_7d8cd3b190.jpg",
          "hash": "medium_ath_slide1_7d8cd3b190",
          "mime": "image/jpeg",
          "name": "medium_ath_slide1.jpg",
          "path": null,
          "size": 98.41,
          "width": 585,
          "height": 750
        },
        "thumbnail": {
          "ext": ".jpg",
          "url": "/uploads/thumbnail_ath_slide1_7d8cd3b190.jpg",
          "hash": "thumbnail_ath_slide1_7d8cd3b190",
          "mime": "image/jpeg",
          "name": "thumbnail_ath_slide1.jpg",
          "path": null,
          "size": 7.7,
          "width": 122,
          "height": 156
        }
      },
      "hash": "ath_slide1_7d8cd3b190",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 118.74,
      "url": "/uploads/ath_slide1_7d8cd3b190.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "folderPath": "/",
      "createdAt": "2023-03-04T18:29:20.387Z",
      "updatedAt": "2023-03-07T06:52:10.825Z"
    },]
  const images=props.images?props.images:def;
console.log(images)
  return (
    <div className="">
        {/* <h2 id="autoplay-example-heading">Autoplay</h2> */}
        <div>
          <Splide
          options={ options }
          aria-labelledby="autoplay-example-heading"
          hasTrack={ false }
          >
          <div style={ { position: 'sticky'} }>
            <SplideTrack>
              { images.map( img => {
                return <SplideSlide key={img.id}> 
                <img src={BACKEND_URL+img.url} style={{height: '100vh',width: '100vw'}}/> 
                </SplideSlide>
                }) 
              }
            </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>
    );
  };
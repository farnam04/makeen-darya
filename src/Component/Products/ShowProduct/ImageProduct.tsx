import Image from "next/image";
import React, { useState } from "react";
import chevronRightImage from "@/assent/Imge/Product/chevronRightImage.svg";
import chevronLeftImage from "@/assent/Imge/Product/chevronLeftImage.svg";

const ImageGallery = ({ Images }: { Images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
    );
  };

  console.log("Images:", Images);

  return (
    <div className="image-gallery">

      <div className="main-image-container ">
        <Image
          src={Images[currentIndex]}
          alt="Main image"
          className=""
          style={{ width: "615px", height: "496px" }}
        />
      </div>

 
      <div className="navigation">
       

      
      </div>

      <div className="flex thumbnails items-center">
      <div onClick={handlePrev}>
          <Image src={chevronRightImage} width={24} height={24} alt="" />
        </div>
      
        <div className="thumbnails">
          {Images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
              width={100}
              height={80}
            />
          ))}
        </div>
        <div onClick={handleNext}>
          <Image src={chevronLeftImage} width={24} height={24} alt="" />
        </div>
      </div>

      <style jsx>{`
        .image-gallery {
          text-align: center;
        }
        .main-image-container {
          width: 600px;
          margin: auto;
        }
        .navigation {
          margin: 10px 0;
        }
        .thumbnails {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .thumbnail {
          cursor: pointer;
          border: 2px solid transparent;
        }
        .thumbnail.active {
          border-color: blue;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;

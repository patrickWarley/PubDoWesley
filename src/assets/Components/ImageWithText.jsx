import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function ImageWithText({image, text, className}){
  const ref = useRef(null);
  const inView = useInView(ref,{amount:0.3, once:true});
  
  return(
    <div 
      ref={ref}
      className={` ${className}`}

      style={{
        opacity: inView? 1 : 0,
        transition: "opacity 2s ease-in"
      }}
    >
      <img src={image} className={`image-with-overlay w-100`}/>
      <p className="overlay-image px-2 fs-md-2 fs-5 fw-bolder">{text}</p>
    </div>
  );
}

export default ImageWithText;
function ImageWithText({image, text, className}){
  console.log(image);
  return(
    <div className={`${className}`}>
      <img src={image} className={`image-with-overlay w-100`}/>
      <p className="overlay-image px-2 fs-2 fw-bolder">{text}</p>
    </div>
  );
}

export default ImageWithText;
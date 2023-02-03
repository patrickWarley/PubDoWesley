import ImageWithText from "./ImageWithText";

function AnimatedGallery({ images,id }) {
  return (
    <section id={id} className="container-fluid p-0 dark-background">
      <div className="image-grid">
        {
          images.map(image => (<ImageWithText image={image.image} text={image.text} className="text-center"/>))
        }
      </div>
    </section>
  )

}

export default AnimatedGallery;
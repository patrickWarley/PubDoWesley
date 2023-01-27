function AnimatedGallery({ images }) {
  return (
    <section className="container-fluid p-0 dark-background">
      {
        images.map(image => (
          <img src={image} className="w-50" />
        ))
      }
    </section>
  )

}

export default AnimatedGallery;
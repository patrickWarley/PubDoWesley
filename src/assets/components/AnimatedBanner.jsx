function AnimationBanner(props) {
  return (
    < div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center light-text dark-background" {...props} >
      {props.children}
    </ div >
  )
}

export default AnimationBanner;
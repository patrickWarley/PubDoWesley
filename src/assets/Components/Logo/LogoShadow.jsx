import Logo from "./Logo";
function LogoShadow(props) {
  return (
    <div className={`${props.className} grid-overlay-parent`} >
      <Logo className='logo p-0 grid-overlay-children'
        style={{ maxWidth: props.width, maxHeight: props.height, transform: "translate(10px)" }}
        color={props.color} width={props.width} />
      <Logo className='logo p-0 grid-overlay-children'
        style={{ maxWidth: props.width, maxHeight: props.height }}
        color={"#000"} width={props.width} />
    </div >
  );
}


export default LogoShadow;
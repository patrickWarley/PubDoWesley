import Logo from "./Logo";
function LogoShadow(props) {
  return (
    <div className={`${props.className} grid-overlay-parent`} >

      <Logo className='logo p-0 grid-overlay-children'
        style={{ transform: "translate(10px)" }}
        color={props.color}
      />

      <Logo className='logo p-0 grid-overlay-children'
        style={{}}
        color={"#000"} />

    </div >
  );
}


export default LogoShadow;
function Modal({ children, id }) {
  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header border-0"><button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

}

export default Modal;
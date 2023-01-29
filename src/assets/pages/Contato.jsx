import PlanoDeFundoTopo from '../images/fundo-contato.jpg';
import Button from '../Components/Button';

function Contato(props) {
  return (
    <section {...props} className='vw-100 d-grid' style={{ minHeight: '100vh', gridTemplateColumns: '1fr' }} id="contato">
      <div className="d-flex bg-header-contato grid-overlay-children"></div>
      <div className="d-flex grid-overlay-children" style={{ backgroundColor: '#1c0c03', opacity: '80%', zIndex: '-1' }}></div>
      <div className="d-flex flex-column grid-overlay-children" style={{ backgroundColor: "transparent" }}>
        <div className="vw-100 row text-center" style={{ minHeight: '300px' }}>
          <span className="m-auto fs-1 light-text" style={{ fontWeight: 'bold', textShadow: '4px 4px 0px #000000' }}>Fale com a gente</span>
        </div>


        <div className="vw-100 contato-form row m-0">

          <div className="col-md-6 p-5 d-none d-md-block light-text">
            <h2 className="">Horario de funcionamento</h2>
            <p className="">
              De terça e quarta, das 16h portaria fecha 00h <br />
              Quinta, sexta e véspera feriados, das 16h portaria fecha 1h30 <br />
              Sábado, das 16h portaria fecha 1h30 <br />
              Domingo, das 15h portaria fecha 00h <br />
              Feriados, abre 16h e fecha de acordo com o dia da semana. <br />
            </p>

            <h2 className="">Telefones</h2>
            <p className="">
              ++55 (21)99999-9999 <br />
              ++55 (21)99999-9999 <br />
              ++55 (21)99999-9999 <br />
            </p>
          </div>

          <div className="col-md-6">
            <div className="">
              <form className="m-5 contato-form">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="nome" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="nome" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="mensagem" className="form-label">Mensagem</label>
                  <textarea className="form-control" id="mensagem" />
                </div>
                <Button className="rounded mt-5 py-2 px-4 fs-5 fw-bold" text="Enviar" />
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Contato;
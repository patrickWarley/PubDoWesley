import PlanoDeFundoTopo from '../images/fundo-contato.jpg';

function Contato(props) {
  return (
    <section {...props} className=' vw-100' id="contato">
      <div className="d-flex bg-header-contato" style={{ height: '300px' }}>
        <span className="m-auto fs-1 light-text" style={{ fontWeight: 'bold', textShadow: '4px 4px 0px #000000' }}>Fale com a gente</span>
      </div>

      <div className="vw-100 row">

        <div className="row col-md" style={{ backgroundColor: 'gray' }}>
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
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>

        <div className="row col-md mb-5">
          <h2 className="mt-5 mb-2 mx-5">Horario de funcionamento</h2>
          <p className="my-2 mx-5">
            De terça e quarta, das 16h portaria fecha 00h <br />
            Quinta, sexta e véspera feriados, das 16h portaria fecha 1h30 <br />
            Sábado, das 16h portaria fecha 1h30 <br />
            Domingo, das 15h portaria fecha 00h <br />
            Feriados, abre 16h e fecha de acordo com o dia da semana. <br />
          </p>

          <h2 className="mt-5 mb-2 mx-5">Telefones</h2>
          <p className="my-2 mx-5">
            ++55 (21)99999-9999 <br />
            ++55 (21)99999-9999 <br />
            ++55 (21)99999-9999 <br />
          </p>
        </div>
      </div>

    </section>
  );
}


export default Contato;
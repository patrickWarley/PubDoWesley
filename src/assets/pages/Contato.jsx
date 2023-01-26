import PlanoDeFundoTopo from '../images/fundo-contato.jpg';

function Contato(props) {
  return (
    <div {...props} className=' vw-100' id="contato">
      <div className="d-flex" style={{ height: '300px', backgroundImage: `url(${PlanoDeFundoTopo})` }}>
        <p className="m-auto fs-2 light-text" style={{ fontWeight: 'bold' }}>Fale com a gente</p>
      </div>

      <div className="vw-100 row">

        <div className="row col-md" style={{ backgroundColor: 'gray' }}>
          <h1 className="text-center light-text my-5">Mande a sua mensagem</h1>
          <div className="">
            <form className="m-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">So um teste, tem que mudar essa meleca!</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mensagem</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>

        <div className="row col-md mb-5">
          <h2 className="m-5">Horario de funcionamento</h2>
          <p className="m-5">
            De terça e quarta, das 16h portaria fecha 00h <br />
            Quinta, sexta e véspera feriados, das 16h portaria fecha 1h30 <br />
            Sábado, das 16h portaria fecha 1h30 <br />
            Domingo, das 15h portaria fecha 00h <br />
            Feriados, abre 16h e fecha de acordo com o dia da semana. <br />
          </p>

          <h2 className="m-5">Telefones</h2>
          <p className="m-5">
            ++55 (21)99999-9999 <br />
            ++55 (21)99999-9999 <br />
            ++55 (21)99999-9999 <br />
          </p>
        </div>
      </div>

    </div >
  );
}


export default Contato;
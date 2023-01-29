function Senha() {
  return (
    <div className="form-container">
      <fieldset>
        <legend className="mx-3">Senha</legend>
        <div className="form-row px-5">
          <div class="col-12 mb-3">
            <label for="validationCustom01"></label>
            <input type="password" class="form-control" id="validationCustom01" placeholder="Crie uma nova senha" required />
          </div>
          <div class="col-12 mb-3">
            <label for="validationCustom02"></label>
            <input type="password" class="form-control" id="validationCustom02" placeholder="Confirme sua senha" required />
          </div>
        </div>
      </fieldset>
    </div>
  )
};

export default Senha;
import React from "react";
import Formulario from "./Formulario";

function FormPessoal() {
  return (
    <div className="">
      <fieldset>
        <legend className="m-3">Informações pessoais</legend>
        <form onSubmit={Formulario} class="needs-validation" novalidate>
          <div class="row p-5">
            <div class="col-12 mb-3">
              <label for="validationCustom01">Primeiro nome</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="Nome" required />
            </div>
            <div class="col-12 mb-3">
              <label for="validationCustom02">Sobrenome</label>
              <input type="text" class="form-control" id="validationCustom02" placeholder="Sobrenome" required />
            </div>
            <div class="col-12 mb-3">
              <label for="validationCustomUsername">Email</label>
              <div class="input-group">
                <input type="Email" class="form-control" id="validationCustomUsername" placeholder="Email" required />
              </div>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  )
};

export default FormPessoal;
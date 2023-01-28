import React from 'react';
import { useForm } from 'react-hook-form';

function Formulario() {

  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <div className='form-container'>
      <fieldset>
      <legend>Endereço</legend>
    <form onSubmit={handleSubmit(onSubmit)} class="needs-validation" novalidate >
    <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom05">CEP</label>
        <input {...register("cep")} onBlur={checkCEP}  type="text" class="form-control" id="validationCustom05" placeholder="CEP" required/>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom04">Estado</label>
        <input {...register("uf" )} type="text" class="form-control" id="validationCustom04" placeholder="Estado" required/>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom03">Cidade</label>
        <input {...register("city" )} type="text" class="form-control" id="validationCustom03" placeholder="Cidade" required/>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom05">Rua</label>
        <input {...register("address")}  type="text" class="form-control" id="validationCustom05" placeholder="Rua" required/>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom05">Número</label>
        <input {...register("addressNumber")}  type="text" class="form-control" id="validationCustom05" placeholder="Número" required/>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom05">Bairro</label>
        <input {...register("neighborhood")}  type="text" class="form-control" id="validationCustom05" placeholder="Bairro" required/>
      </div>
    </div>
    <div class="form-group">
      <div class="form-check"><br/>
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
        <label class="form-check-label" for="invalidCheck">
          Li e concordo com os <a href="#">termos e condições</a>
        </label>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Enviar</button>
  </form>
  </fieldset>
  </div>
  );
}

export default Formulario;
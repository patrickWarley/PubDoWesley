import Formulario from "./Formulario";
import FormPessoal from "./FormPessoal";
import Senha from "./Senha";

function Cadastro() {
  return (
    <div className="p-2">
      <FormPessoal />
      <Senha />
      <Formulario />
    </div>
  );
}

export default Cadastro;
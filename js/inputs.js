
import Loader from './loader.js';
const loader = Loader();
loader.init();
const statesList = {
  "states" : 
   [
     ["Acre", "AC"],
     ["Alagoas", "AL"],
     ["Amapá", "AP"],
     ["Amazonas", "AM"],
     ["Bahia", "BA"],
     ["Ceará", "CE"],
     ["Distrito Federal", "DF"],
     ["Espírito Santo", "ES"],
     ["Goiás", "GO"],
     ["Maranhão", "MA"],
     ["Mato Grosso", "MT"],
     ["Mato Grosso do Sul", "MS"],
     ["Minas Gerais", "MG"],
     ["Pará", "PA"],
     ["Paraíba", "PB"],
     ["Paraná", "PR"],
     ["Pernambuco", "PE"],
     ["Piauí", "PI"],
     ["Rio de Janeiro", "RJ"],
     ["Rio Grande do Norte", "RN"],
     ["Rio Grande do Sul", "RS"],
     ["Rondônia", "RO"],
     ["Roraima", "RR"],
     ["Santa Catarina", "SC"],
     ["São Paulo", "SP"],
     ["Sergipe", "SE"],
     ["Tocantins", "TO"]
   ]
 };

 /* Inicia o Issues aqui */
export default () => {

  function setInputValueByName(name, value) {
    const el = document.getElementsByName(name)[0];
    el.value = value;
  }

  function getAddressByCEP(ev) {
    const cep = ev.target.value;
    loader.start();
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => {
      setInputValueByName('cidade', res.data.localidade);
      setInputValueByName('estado', res.data.uf);
    })
    .then(() => {
      M.updateTextFields();
      M.AutoInit();
      loader.stop();
    });
  }

  return [
    {
      className : "validate",
      required : true,
      name : "nome",
      size : "s12 m4",
      group : 1
    },
    {
      className : "validate",
      required : true,
      name : "sobreNome",
      size : "s12 m4",
      group : 1
    },
    {
      className : "validate",
      required : true,
      name : "apelido",
      size : "s12 m4",
      group : 1
    },
    {
      className : "validate datepicker",
      required : true,
      name : "aniversario",
      type : "text",
      size : "s6 m3",
      group : 2
    },
    {
      className : "validate",
      required : true,
      name : "genero",
      size : "s6 m3",
      group : 2
    },
    {
      className : "validate",
      required : true,
      name : "email",
      type : "email",
      size : "s12 m4",
      group : 3
    },
    {
      className : "validate",
      required : true,
      name : "senha",
      type : "password",
      size : "s12 m4",
      group : 3
    },
    {
      className : "validate",
      required : true,
      name : "confirmar_senha",
      type : "password",
      size : "s12 m4",
      group : 3
    },
    {
      className : "validate",
      required : true,
      name : "cep",
      size : "s6 m4",
      group : 4,
      event : getAddressByCEP
    },
    {
      className : "validate",
      required : true,
      name : "cidade",
      size : "s6 m4",
      group : 4
    },
    {
      element : "select",
      required : true,
      options : statesList.states,
      className : "validate",
      name : "estado",
      size : "s6 m4",
      group : 4
    }
  ]
}
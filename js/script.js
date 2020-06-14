// Importa a estrutura
import inputs from './inputs.js';
const inputArray = inputs();

// Define uma nova função para o tipo string
String.prototype.capitalize = function() {
  const upper = this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  return upper.split('_').join(' ');
}

// Inicia o codigo
window.onload = function() {
  // Instancia os elementos do HTML
  const form = document.getElementById('form');
  const button = document.createElement('button');
  let group;

  //Monta os inputs no HTML
  for(let i=0; i<inputArray.length; i++) {
    const input = inputArray[i];
    const element = document.createElement(input.element || 'input');
    const label = document.createElement('label');

    //Cria o grupo do input (row)
    if(input.group !== group) {
      const div = document.createElement('div');
      div.className = 'row';
      form.appendChild(div);
      group = input.group;
    }

    //Cria o input-field do input
    const div = document.createElement('div');
    div.className = `input-field col ${input.size || 's12'}`;
    const inputField = form.lastChild.appendChild(div);

    //Define os atributos básicos do input
    element.name = input.name;
    element.setAttribute('required', input.required || false);
    element.className = input.className;
    element.id = `input-${i}`;

    //Define os atributos dos SELECTs
    if(input.hasOwnProperty('options')){
      for(let option of input.options) {
        const opt = document.createElement('option');
        opt.innerText = option[0];
        opt.value = option[1];
        element.appendChild(opt);
      }
    } else {
      element.setAttribute('type', input.type || 'text');
    }
    //Define os eventos os inputs
    if(input.hasOwnProperty('event')) {
      element.addEventListener('change', input.event);
    }

    //Define os atributos do label
    label.setAttribute('for', element.id);
    label.innerText = input.name.capitalize();

    inputField.appendChild(element);
    inputField.appendChild(label);
  }

  //Monta o botão de enviar
  button.innerText = 'Enviar';
  button.className = 'btn btn-large green darken-2';
  form.appendChild(button);

  //Define o evento submit
  form.addEventListener('submit', function(el) {
    el.preventDefault();
    M.toast({html: 'Formulario enviado com sucesso!', classes:'green'})
  });

  //Inicializa os elementos especiais do Materialize
  let elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, {});
  elems = document.querySelectorAll('.datepicker');
  M.Datepicker.init(elems, {});
}
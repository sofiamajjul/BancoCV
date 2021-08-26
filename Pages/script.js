//Validação dados formulario
class Validator{

    constructor(){
        this.validations = [
            'data-required',
        ]
    }

    validate(form) {

        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length) {
            this.cleanValidations(currentValidations);
          }      

        let inputs = form.getElementsByTagName('input');
    
        let inputsArray = [...inputs];

        inputsArray.forEach(function(input) {

            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {
                    let method = this.validations[i].replace('data-', '').replace('-', '');
                    let value = input.getAttribute(this.validations[i]);
                    this[method](input,value);
                }
            }
        },this);
    }

    required(input) {

        let inputValue = input.value;
    
        if(inputValue === '') {
          let errorMessage = `Este campo é obrigatório`;
    
          this.printMessage(input, errorMessage);
        }
      }

     printMessage(input, msg) {
        let template = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classList.remove('template');
        inputParent.appendChild(template);
     }

     cleanValidations(validations) {
        validations.forEach(el => el.remove());
      }  
}

let form= document.getElementById("register-form");
let submit= document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);

  });
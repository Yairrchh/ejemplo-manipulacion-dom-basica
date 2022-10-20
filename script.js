const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const newM = document.querySelector('#newMensaje')
//form.addEventListener('submit', sumarInputValues);
    
//function sumarInputValues(event) {
 //   console.log({event})
 //   event.preventDefault() //para que no se recargue la pagina
 // const sumaInputs = input1.value + input2.value;
 // pResult.innerText = "Resultado: " + sumaInputs;
//}

btn.addEventListener('click', sumarInputValues)

btn.addEventListener('mouseover', showMenssage)

function showMenssage(){
    newM.innerText = 'Estas apunto de hacer una suma';
}

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}


const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

const button = document.getElementById('submitButton');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();

})

name.addEventListener("change",(e)=>{
    if(e.target.value.trim().length > 0) formIsValid.name = true;
    else formIsValid.name = false;
})
email.addEventListener("change",(e)=>{
    if(e.target.value.trim().length > 0) formIsValid.email = true;
    else formIsValid.email = false;
})
gender.addEventListener("change",(e)=>{
    if(e.target.checked) formIsValid.gender = true;
    else formIsValid.gender = false;
})
terms.addEventListener("change",(e)=>{
    formIsValid.terms = e.target.checked;
    button.removeAttribute("disabled");
})

const validar = () =>{
    const formValues = Object.values(formIsValid);

    const resultado = formValues.some(item=>item ===false);

    resultado ? console.log("mal") : console.log("bien");
}



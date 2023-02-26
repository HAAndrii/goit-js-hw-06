const formEl = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();
    // const obj = {};
    const {
    elements: { email, password }
    } = event.currentTarget;
   
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }

    const obj = {
    email: email.value,
    password: password.value
    };
    
    console.log(obj);
    event.currentTarget.reset();
}

formEl.addEventListener('submit', onSubmit);

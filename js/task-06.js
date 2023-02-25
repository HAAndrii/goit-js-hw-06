const inputEl = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener('blur', onInputBlur)
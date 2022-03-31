const snackbarBtn = document.querySelector('.snackbar-btn');
const snackbar = document.querySelector('.snackbar')


const showSnackbar = () => {
    snackbar.classList.add('show-snackbar')
    setTimeout(() => snackbar.classList.remove('show-snackbar'), 3000)
}

snackbarBtn.addEventListener('click', showSnackbar)
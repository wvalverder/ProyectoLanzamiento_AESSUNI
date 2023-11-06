const button = document.getElementById('btnMision');
const p = document.querySelector('p');

let tiempo = 10;

button.addEventListener('click', btnOnClick);

function btnOnClick() {
    CuentaRegresiva(tiempo);
}

function CuentaRegresiva(tiempo) {
    if (tiempo >= 0) {
        setTimeout(() => {
            p.innerHTML = `Empieza la misión en: ${tiempo}`;
            tiempo--;
            if (tiempo >= 0) {
                CuentaRegresiva(tiempo);
            } else {
                p.innerHTML = 'Misión iniciada - Despegue! 🚀🚀🚀';
            }
        }, 1000);
    }
}




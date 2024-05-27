
try {
    const loginRegisterBtn = document.querySelector("#login-register-btn");
    const loginRegisterForm = document.querySelector("#container");
    let err = document.querySelector("#Error");

    let showHideLoginRegisterForm = 0;
    loginRegisterBtn.onclick = () => {
        err = document.querySelector("#Error")
        err.style.display = 'none';
        showHideLoginRegisterForm++;
        showHideLoginRegisterForm % 2 ? loginRegisterForm.style.display = 'flex' : loginRegisterForm.style.display = 'none';
    }



    let str = '';
    const inputFields = document.querySelectorAll(".register-form input");
    function checkFields() {
        err.style.display = 'block';
        for (let i of inputFields) {
            str += !i.value ? ` <span style=color:red;padding:0>${i.getAttribute('placeholder')}</span> ` : '';
        }

        err.innerHTML = str ? `فیلد  ${str}را خالی رها نکنید` : '<span style=color:green;>لاگین موفقیت آمیز بود</span>';
        !err.innerText ? err.style.display = 'none' : err.style.display = 'block';
        str = '';
    }
} catch {
    let str = '';
    let err = document.querySelector("#Error");
    err.style.display = 'none';

    const inputFields = document.querySelectorAll(".register-form input");
    function checkFields() {

        err.style.display = 'block';
        for (let i of inputFields) {
            str += !i.value ? ` <span style=color:red;padding:0>${i.getAttribute('placeholder')}</span> ` : '';
        }

        err.innerHTML = str ? `فیلد  ${str}را خالی رها نکنید` : '<span style=color:green;>لاگین موفقیت آمیز بود</span>';
        !err.innerText ? err.style.display = 'none' : err.style.display = 'block';
        str = '';
    }

}

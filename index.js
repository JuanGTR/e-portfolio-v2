//
//
//

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    email.js
        .sendForm(
            "service_acyoiqr",
            "template_xaoa2aq",
            event.target,
            "O1vaNsh0ogREEMEKU"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at juantejedar2406@gmail.com"
            );
        });
}
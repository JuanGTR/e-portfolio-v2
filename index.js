//
//
//

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");
    emailjs
        .sendForm(
            "service_6fhg2g9",
            "template_q8857x3",
            event.target,
            { publicKey: "rHHhJPcYVXc5501Et" }
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at juantejedar2406@gmail.com"
            );
        });
}
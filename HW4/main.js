// початкова анімація
let main = document.querySelector(".main");

window.addEventListener("load", function () {
    setTimeout(function () {
        // main.classList.remove("display");

        document.querySelector("#loader").style.display = "none";
    }, 5000);
});
//закриття якщо нема нікого на сторінці

let timer = setTimeout(function () {
    let answer = confirm("Ви ще тут?");
    if (!answer) {
        window.close();
    }
}, 60000);

window.addEventListener("mousemove", function () {
    clearTimeout(timer);
});

// скрол
let header__btn = document.querySelector(".burger-header__btn");
let list = document.querySelector(".list");

header__btn.addEventListener("click", function () {
    header__btn.classList.toggle("active");
    list.classList.toggle("active");
});

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.value = progress;
});

//What we do:

let servicesbody = document.getElementById("what-we-do__services");
function CreateServices(title, body) {
    let service = document.createElement("div");
    service.innerHTML = `
    <div class="service">
        <p class="title">${title}</p>
        <p class="body">${body}</p>
    </div>`;
    return service;
}

async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
}

let buttonSection = document.querySelector(".what-we-do__buttons");
buttonSection.addEventListener("click", (event) => {
    buttonSection.querySelectorAll(".clicked").forEach((link) => link.classList.remove("clicked"));

    event.target.classList.add("clicked");
});

function filter() {
    let buttons = document.querySelectorAll(".text-button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const filter = event.target.dataset.filter;
            console.log(filter);
            switch (filter) {
                case "All":
                    getData().then((result) => {
                        let res = result.filter((data) => data.userId == 1);
                        console.log(res);
                        servicesbody.innerHTML = "";

                        res.map((data) => servicesbody.append(CreateServices(data.title, data.body)));
                    });
                    break;
                case "N":
                    getData().then((result) => {
                        let res = result.filter((data) => data.userId == 1 && data.title[0] === "n");
                        console.log(res);
                        servicesbody.innerHTML = "";

                        res.map((data) => servicesbody.append(CreateServices(data.title, data.body)));
                    });
                    break;
                case "E":
                    getData().then((result) => {
                        let res = result.filter((data) => data.userId == 1 && data.title[0] === "e");
                        console.log(res);
                        servicesbody.innerHTML = "";

                        res.map((data) => servicesbody.append(CreateServices(data.title, data.body)));
                    });
                    break;
            }
        });
    });
}
filter();

//Comments
const testimonialsComments = [...document.querySelectorAll(".testimonials__comments")];

const nxtBtn = [...document.querySelectorAll(".next-button")];
const preBtn = [...document.querySelectorAll(".pre-button")];

testimonialsComments.forEach((item, i) => {
    let containerComment = item.getBoundingClientRect();
    let commentWidth = containerComment.width;

    nxtBtn[i].addEventListener("click", (event) => {
        let lastPageWidth2 = commentWidth;
        if (item.scrollLeft >= lastPageWidth2) {
            item.scrollLeft = 0;
        } else {
            item.scrollLeft += commentWidth;
        }
        console.log("commentWidth * 2  = " + commentWidth * 2);
        console.log("commentWidth * 2 - 3 = " + (commentWidth * 2 - 3));

        console.log("commentWidth " + commentWidth);
        console.log("item.scrollLeft " + item.scrollLeft);
    });

    preBtn[i].addEventListener("click", (event) => {
        item.scrollLeft -= commentWidth;
    });
});

//animation

function animateOnScroll() {
    const element = document.querySelector(".letest-news");
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add("animated");
        // element.classList.toggle("animated");
    }
}
window.addEventListener("scroll", animateOnScroll);
//форма
const form = document.getElementById("sign-up__form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const nameRegex = /^[A-Z][a-z]+$/;
    let hasError = false;

    if (!nameRegex.test(firstName)) {
        firstNameInput.classList.add("error");
        document.getElementById("firstNameError").textContent = "Ім'я має містити тільки літери, перша літера - велика";
        hasError = true;
    } else {
        firstNameInput.classList.remove("error");
        document.getElementById("firstNameError").textContent = "";
    }

    if (!nameRegex.test(lastName)) {
        lastNameInput.classList.add("error");
        document.getElementById("lastNameError").textContent =
            "Прізвище має містити тільки літери, перша літера - велика";
        hasError = true;
    } else {
        lastNameInput.classList.remove("error");
        document.getElementById("lastNameError").textContent = "";
    }

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        document.getElementById("emailError").textContent = "Неправильний формат e-mail";
        hasError = true;
    } else {
        emailInput.classList.remove("error");
        document.getElementById("emailError").textContent = "";
    }

    if (hasError) {
        return;
    }

    // збереження даних у локальному сховищі
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    let signUpSection = document.querySelector(".sign-up-section__container");

    // перевірка наявності імені
    if (firstName === "Mariia") {
        const animationTime = 5000;
        let messageElement = document.createElement("div");
        messageElement.innerHTML = `<div>${firstName}, сьогодні для
         Вас при оформленні замовлення 120% знижки!</div>`;

        messageElement.classList.add("message");
        form.classList.add("display");

        signUpSection.append(messageElement);

        setTimeout(() => {
            form.classList.remove("display");
            messageElement.remove();
        }, animationTime);
    }
});
//рік в футері
document.getElementById("current-year").innerHTML = new Date().getFullYear();

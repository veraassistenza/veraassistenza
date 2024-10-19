/* Header start */
/* Header visibility on scroll */
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        header.classList.add('header--hidden');
    } else if (scrollTop === 0) {
        header.classList.remove('header--hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

    /* Hamburger icon start */
    function toggleMobileMenu(menu) {
        menu.classList.toggle('open');
        document.querySelector('div .mobile-menu-container').classList.toggle('open');
    }
    /* Hamburger icon end */
/* Header end */

/* Initial text start */
/* Text reveal effect on scroll */
let paragraphs = [...document.querySelectorAll('.initial-text p')];
let spans = [];

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];

function revealSpans(){
    for (let i = 0; spans.length; i++) {
        if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * 0.4); /* Adjust to set where the reveal effect starts on the page */
            let opacityValue = 1 - ((top * 0.01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * 0.01) + (left * 0.001)).toFixed(3);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll', () => {
    revealSpans();
})
/* Initial text end */

/* Services text start*/
let acc_boxEl = document.querySelectorAll(".acc-box");

acc_boxEl.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        let symbol = item.querySelector(".symbol");
        if (item.classList.contains("active")) {
            symbol.textContent = "-"; // Change to minus sign
        } else {
            symbol.textContent = "+"; // Change back to plus sign
        }
    });
});

/* Services text end */

/* Extras: scroll animations start*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


const accBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-box');
        } else {
            entry.target.classList.remove('show-box');
        }
    })
})

const hiddenAccBoxElements = document.querySelectorAll('.hidden-box');
hiddenAccBoxElements.forEach((el) => accBoxObserver.observe(el))
/* Extras: scroll animations end */

/* Random letters animation start */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener('DOMContentLoaded', () => {
    let veraParagraphs = [...document.querySelectorAll('.main-text p[data-value]')];

    veraParagraphs.forEach(paragraph => {
        let iteration = 0;
        const originalText = paragraph.dataset.value;

        const interval = setInterval(() => {
            paragraph.innerText = paragraph.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1/4;
        }, 30);
    });
});
/* Random letters animation end */

// List of valid credentials
const validUsername = "admin";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Check if the credentials match
    if (username === validUsername && password === validPassword) {
        // Store a login flag in sessionStorage
        sessionStorage.setItem("loggedIn", "true");
        // Redirect to reserved area
        window.location.href = "reserved_area.html";
    } else {
        // Show error message
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Invalid username or password";
    }
});


/* My own solution */


const progress = document.querySelector('.progress h2');
const circles = document.querySelectorAll('.circle');


const progressCounter = () => {
    progress.textContent = `${counter}/5`;
    circles.forEach(circle => {
        circle.style.backgroundColor = 'transparent';
    });
    document.querySelector(`.circle-${counter}`).style.backgroundColor = '#ddd';
}


let counter = 1;

document.querySelector('.section-1-wrapper').style.transform = 'scale(1)';

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && counter < 5) {
        document.querySelector(`.section-${counter}`).style.left = "-100vw";
        document.querySelector(`.section-${counter}-wrapper`).style.transform = "scale(1.5)"
        document.querySelector(`.section-${counter + 1}-wrapper`).style.transform = "scale(1)";
        counter++;
    } else if (e.deltaY < 0 && counter > 1) {
        counter--;
        document.querySelector(`.section-${counter}`).style.left = "0";
        document.querySelector(`.section-${counter}-wrapper`).style.transform = "scale(1)"
        document.querySelector(`.section-${counter + 1}-wrapper`).style.transform = "scale(1.5)";
    } else if (e.deltaY > 0 && counter >= 5) {
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "0";
        }
        document.querySelector('.section-1-wrapper').style.transform = 'scale(1)';
        document.querySelector('.section-5-wrapper').style.transform = 'scale(1.5)';
        counter = 1;
    } else if (e.deltaY < 0 && counter <= 1) {
        for (let i = 1; i < 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "-100vw";
        }
        document.querySelector('.section-1-wrapper').style.transform = 'scale(1.5)';
        document.querySelector('.section-5-wrapper').style.transform = 'scale(1)';
        counter = 5;
    }

    progressCounter();

    console.log(counter)

});

const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

rightBtn.addEventListener('click', () => {
    if (counter < 5) {
        document.querySelector(`.section-${counter}`).style.left = "-100vw";
        document.querySelector(`.section-${counter}-wrapper`).style.transform = "scale(1.5)"
        document.querySelector(`.section-${counter + 1}-wrapper`).style.transform = "scale(1)";
        counter++;
    } else if (counter >= 5) {
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "0";
        }
        document.querySelector('.section-1-wrapper').style.transform = 'scale(1)';
        document.querySelector('.section-5-wrapper').style.transform = 'scale(1.5)';
        counter = 1;
    }

    progressCounter();
});

leftBtn.addEventListener('click', () => {
    if (counter > 1) {
        counter--;
        document.querySelector(`.section-${counter}`).style.left = "0";
        document.querySelector(`.section-${counter}-wrapper`).style.transform = "scale(1)"
        document.querySelector(`.section-${counter + 1}-wrapper`).style.transform = "scale(1.5)";
    } else if (counter <= 1) {
        for (let i = 1; i < 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "-100vw";
        }
        document.querySelector('.section-1-wrapper').style.transform = 'scale(1.5)';
        document.querySelector('.section-5-wrapper').style.transform = 'scale(1)';
        counter = 5;
    }

    progressCounter();
});

const grapesImage = document.querySelector('.grapes-img');
const section3Wrapper = document.querySelector('.section-3-wrapper');

grapesImage.addEventListener('mouseover', () => {
    section3Wrapper.style.opacity = '.5';
});

grapesImage.addEventListener('mouseout', () => {
    section3Wrapper.style.opacity = '1';
});


/* End of My own solution */

/* Professor's Code */
/* 
let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
    progress.textContent = `${counter2}/${sections.length}`;

    Array.from(circles).forEach((circle) => {
        circle.style.backgroundColor = "transparent";
    });
    document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
    bool = true;
    if (counter1 === 5) {
        Array.from(sections).forEach((section) => {
            section.style.left = "0";
        });
        counter1 = 0;
        counter2 = 1;
        section1wrapper.style.transform = "scale(1)";
        section5wrapper.style.transform = "scale(1.5)";
        progressCounter();
        bool = false;
    }

    if (counter1 === -1) {
        Array.from(sections).forEach((section) => {
            if (section.classList[0] === "section-5") {
                return;
            }
            section.style.left = "-100vw";
        });
        counter1 = 4;
        counter2 = 5;
        section1wrapper.style.transform = "scale(1.5)";
        section5wrapper.style.transform = "scale(1)";
        progressCounter();
        bool = false;
    }
    progressCounter();
    return bool;
};

window.addEventListener("wheel", (e) => {
    const deltaY = e.deltaY > 0;

    if (deltaY) {
        counter1++;
        counter2++;
    } else {
        counter1--;
        counter2--;
    }

    pageController();
    progressCounter();
    console.log(counter1, counter2);

    if (bool) {
        document.querySelector(
            `.section-${deltaY ? counter1 : counter2}`
        ).style.left = `${deltaY ? "-100vw" : "0"}`;

        document.querySelector(
            `.section-${deltaY ? counter1 : counter2}-wrapper`
        ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;

        document.querySelector(
            `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
        ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
    }
});

document.querySelector(".left-btn").addEventListener("click", () => {
    counter1--;
    counter2--;
    pageController() &&
        (document.querySelector(`.section-${counter2}`).style.left = "0");

    if (bool) {
        document.querySelector(`.section-${counter2}-wrapper`).style.transform =
            "scale(1)";
        document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
            "scale(1.5)";
    }
});

document.querySelector(".right-btn").addEventListener("click", () => {
    counter1++;
    counter2++;
    pageController() &&
        (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

    if (bool) {
        document.querySelector(`.section-${counter2}-wrapper`).style.transform =
            "scale(1)";
        document.querySelector(`.section-${counter1}-wrapper`).style.transform =
            "scale(1.5)";
    }
});

document.querySelector(".grapes-img").addEventListener("mouseover", () => {
    document.querySelector(".section-3-wrapper").style.opacity = ".5";
});

document.querySelector(".grapes-img").addEventListener("mouseout", () => {
    document.querySelector(".section-3-wrapper").style.opacity = "1";
});

menu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("change");
});
 */
/* End of Professor's Code */
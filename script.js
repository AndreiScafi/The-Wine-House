
/* My own solution */

let counter = 1;

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && counter < 5) {
        document.querySelector(`.section-${counter}`).style.left = "-100vw";
        counter++;
    } else if (e.deltaY < 0 && counter > 1) {
        counter--;
        document.querySelector(`.section-${counter}`).style.left = "0";
    } else if (e.deltaY > 0 && counter >= 5) {
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "0";
        }
        counter = 1;
    } else if (e.deltaY < 0 && counter <= 1) {
        for (let i = 1; i < 5; i++) {
            document.querySelector(`.section-${i}`).style.left = "-100vw";
        }
        counter = 5;
    }

    console.log(counter)

})

/* End of My own solution */

/* Professor's Code */

/* let counter = 1;

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        document.querySelector(`.section-${counter}`).style.left = "-100vw";
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    } else {
        counter--;
        if (counter < 1) {
            counter = 5;
        }
        document.querySelector(`.section-${counter}`).style.left = "0";

    }

    console.log(counter);

      document.querySelector(`.section-${counter}`).style.left = "-100vw"; 
}) */

/* End of Professor's Code */
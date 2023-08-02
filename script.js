
/* My own solution */


const progress = document.querySelector('.progress h2');
const progressCounter = () => {
    progress.textContent = `${counter}/5`
}


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

    progressCounter();

    console.log(counter)

})


/* End of My own solution */

/* Professor's Code */
/* 
let counter1 = 0;
let counter2 = 1;

const sections = document.querySelectorAll("section");

window.addEventListener('wheel', (e) => {

    const deltaY = e.deltaY > 0;

    if (deltaY) {
        counter1++;
        counter2++;
    } else {
        counter1--;
        counter2--;
    }

    if (counter1 === 5) {
        sections.forEach(section => {
            section.style.left = '0';
        });
        counter1 = 0;
        counter2 = 1;
        return;
    }

    if (counter1 === -1) {
        sections.forEach(section => {
            if (section.classList[0] === 'section-5') {
                return;
            } else {
                section.style.left = '-100vw';
            }
        });
        counter1 = 4;
        counter2 = 5;
        return;
    }

    document.querySelector(`.section-${deltaY ? counter1 : counter2}`).style.left = `${deltaY ? '-100vw' : '0'}`;

    console.log(counter1, counter2);
})
 */
/* End of Professor's Code */
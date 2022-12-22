const target = document.querySelector('#target');
const boxes = [
    {
        title: 'Onboarding Box Sample',
        intro: 'Intro tekstje',
        img: './img/creative.jpeg',
        url: '/onboarding/'
    },
    {
        title: 'Fairs & Events Box',
        intro: 'intro tekstje',
        img: './img/creative.jpeg',
        url: '',
    },
    {
        title: 'Employee Recognition Box',
        intro: 'intro tekstje',
        img: './img/creative.jpeg',
        url: '',
    },
    {
        title: 'Workplace Health Box',
        intro: 'intro tekstje',
        img: './img/creative.jpeg',
        url: '',
    }
];

function createBoxes(e) {
    for (let i = 0; i < boxes.length; i++) {
        const template = `
            <div class="item">
                <img src="${boxes[i].img}" alt="${boxes[i].title}">
                <h5>
                    ${boxes[i].title}
                </h5>
                <p>
                    ${boxes[i].intro}
                </p>
                <a href="${boxes[i].url}">
                    Read more
                </a>
            </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createBoxes);
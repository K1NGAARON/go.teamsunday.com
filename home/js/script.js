// CREATE LOGOS
const wrapperLogos = document.querySelector('#logos > .row > .wrapper');
const contentLogos = [
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/01/Oaky.png',
        'client' : 'Oaky',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/10/Google-Logo.svg',
        'client' : 'Google',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/09/Deloitte-Logo.svg',
        'client' : 'Deloitte',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/TikTok-Logo.svg',
        'client' : 'TikTok',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'client' : 'AirBnb',
        'case-link' : 'tba',
    }
];

function createLogos() {
    for (let i = 0; i < contentLogos.length; i++) {
        const contentTemplate = `
            <a href="${contentLogos[i]["case-link"]}">
                <img src="${contentLogos[i].img}" alt="${contentLogos[i].client}">
            </a>
        `;
        wrapperLogos.insertAdjacentHTML("afterbegin", contentTemplate);
    };
};


// CREATE SUNDAY USPS
const wrapperUSP = document.querySelector("#usp > .row > .wrapper");
const contentUSP = [
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'Sustainability',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'Highest Quality',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'Logistics',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'Success manager',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'USP 5',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/dashboard.png',
        'heading' : 'USP 6',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    }
];

function createUSPs() {
    for (let i = 0; i < contentUSP.length; i++) {
        const contentTemplate = `
            <div class="item">
                <img src="${contentUSP[i].img}" alt="${contentUSP[i].heading}">
                <h3>
                    ${contentUSP[i].heading}
                </h3>
                <p>
                    ${contentUSP[i].body}
                </p>
                <a href="${contentUSP[i].url}">
                    Get started
                </a>
            </div>
        `;
        wrapperUSP.insertAdjacentHTML("beforeend", contentTemplate);
    };
};


// CREATE PRODUCTS
const wrapperProducts = document.querySelector('#products > .row > .wrapper');
const contentProducts = [
    {
        'img' : './img/socks.jpg',
        'product' : 'Custom socks',
        'link' : 'google.com',
    },
    {
        'img' : './img/onboarding.jpg',
        'product' : 'Onboarding boxes',
        'link' : 'google.com',
    },
    {
        'img' : './img/hoodie.jpg',
        'product' : 'Branded hoodies',
        'link' : 'google.com',
    },
    {
        'img' : './img/bizzshirt.jpg',
        'product' : 'Business wear',
        'link' : 'google.com',
    }
];

function createProducts() {
    for (let i = 0; i < contentProducts.length; i++) {
        const contentTemplate = `
            <div class="item">
                <a href="${contentProducts[i].url}">
                    <img src="${contentProducts[i].img}" alt="${contentProducts[i].product}">
                    <p>
                        ${contentProducts[i].product}
                    </p>
                </a>
            </div>
        `;
        wrapperProducts.insertAdjacentHTML("beforeend", contentTemplate);
    };
};



// CREATE FAQ
// const wrapperFAQ = document.querySelector('#faq > .row > .accordion-list');
// const contentFAQ = [
//     {
//         'question' : "Question 1",
//         'answer' : "Answer 1",
//     },
//     {
//         'question' : "Question 2",
//         'answer' : "Answer 2",
//     }
// ];

// function createFAQ() {
//     for (let i = 0; i < contentFAQ.length; i++) {
//         const contentTemplate = `
//         <div class="accordion-item">
//             <div class="accordion-head">
//                 <h5>
//                     ${contentFAQ[i].question}
//                 </h5>
//                 <div class="icon">
//                     <img src="https://uploads-ssl.webflow.com/60d125d7d4b5bee59a7a6941/60d125d7d4b5beea017a6a16_icon-chevron-right-small-white.svg" alt="">
//                 </div>
//             </div>
//             <div class="accordion-body">
//                 <p>
//                     ${contentFAQ[i].answer}
//                 </p>
//             </div>
//         </div>
//         `;
//         // Insert after "last FAQ" item
//         wrapperFAQ.insertAdjacentHTML("beforeend", contentTemplate);
//     };
// };

function toggleFAQ(e) {
    console.log('clickced');

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');
};


$('.accordion-item').click(toggleFAQ);


function runScripts() {
    createLogos();
    createUSPs();
    createProducts();
    // createFAQ();
};

$(document).ready(runScripts);


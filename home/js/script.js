// CREATE LOGOS
const wrapperLogos = document.querySelector('#logos > .row > .wrapper');
const contentLogos = [
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
        'case-link' : 'tba',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/SumUp-Logo.svg',
        'client' : 'SumUp',
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
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
        'body' : 'Lead Catcher shows your most engaged leads so you can focus on leads that will convert.',
        'url' : 'google.com'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2021/08/AirBnB-Logo_1.svg',
        'heading' : 'USP 1',
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
        wrapperUSP.insertAdjacentHTML("afterbegin", contentTemplate);
    };
};

const wrapperProducts = document.querySelector('#products > .row > .wrapper');
const contentProducts = [
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/02/John-jane-collection-min.jpg',
        'product' : 'Custom product',
        'link' : 'google.com',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/02/John-jane-collection-min.jpg',
        'product' : 'Custom product',
        'link' : 'google.com',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/02/John-jane-collection-min.jpg',
        'product' : 'Custom product',
        'link' : 'google.com',
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/02/John-jane-collection-min.jpg',
        'product' : 'Custom product',
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
        wrapperProducts.insertAdjacentHTML("afterbegin", contentTemplate);
    };
};




$(document).ready(function() {
    createLogos();
    createUSPs();
    createProducts();
});
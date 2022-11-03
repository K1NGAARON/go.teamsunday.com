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




$(document).ready(function() {
    
    createLogos();
    createUSPs();


});
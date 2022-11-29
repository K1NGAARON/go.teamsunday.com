const dropdown = document.querySelector("#country");

function dropdownFilter() {
    $(this).find("option:selected").each(function() {
        var selectedCountry = $(this).attr("value");

        if (selectedCountry) {
            if (selectedCountry == 'View all') {
                $('.job-post').show();
            } else {
                $('.job-post').show(); // Show everything first to ensure that making multiple selections work (kinda like a reset feature)
                $(".job-post").not("." + selectedCountry).hide();
                $(".job-post" + selectedCountry).show();
            }
        } else {
            $(".job-post").hide();
        }
    });
};

const jobsIMG = [
    './img/image-1.jpg',
    './img/image-2.jpg',
    './img/image-3.jpg',
    './img/image-4.jpg',
    './img/image-5.jpg',
    './img/image-6.jpg',
    './img/image-7.jpg',
    './img/image-8.jpg',
    './img/image-9.jpg',
    './img/image-10.jpg'
];

const jobsWrapper = document.querySelector("#jobs-section");
const jobsArray = [
    {
        'positionTitle' : 'Stage HR',
        'positionText' : 'Als trainee van team Sunday bouw je dagelijks mee aan dit ambassadeurschap.',
        'positionALT' : 'stage HR',
        'positionURL' : '/en/jobs/stage-hr',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png',
        'order' : '7'
    },
    {
        'positionTitle' : 'Sales Traineeship Amsterdam',
        'positionText' : 'Ben je ambitieus en leg je graag contacten? Ben je op zoek naar een uitdaging in een internationaal bedrijf?',
        'positionALT' : 'Sales Traineeship at Sunday',
        'positionURL' : '/en/jobs/sales-traineeship/',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png',
        'order' : '11'
    },
    {
        'positionTitle' : 'Sales Traineeship Roeselare',
        'positionText' : 'Ben je ambitieus en leg je graag contacten? Ben je op zoek naar een uitdaging in een internationaal bedrijf?',
        'positionALT' : 'Sales Traineeship at Sunday',
        'positionURL' : '/en/jobs/sales-traineeship/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png',
        'order' : '11'
    },
    // {
    //     'positionTitle' : 'Financial Controller',
    //     'positionText' : 'Je bent verantwoordelijk om de financiële rapportering van de groep tot een hoger niveau te tillen.',
    //     'positionALT' : 'Financial controller at Sunday',
    //     'positionURL' : '/en/jobs/financial-controller-roeselare/',
    //     'positionCountry' : 'Belgium',
    //     'positionCity' : 'Roeselare',
    //     'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png',
    //     'order' : ''
    // },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-germany/',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png',
        'order' : '3'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-belgium/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png',
        'order' : '1'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-ireland/',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Ireland-Flag.png',
        'order' : '8'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-netherlands/',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png',
        'order' : '2'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-netherlands/',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png',
        'order' : '5'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-belgium/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png',
        'order' : '4'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-germany/',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png',
        'order' : '6'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-ireland/',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Ireland-Flag.png',
        'order' : '9'
    }
];

// Create job post wrapper
function createJobBox() {
    for (let i = 0; i < jobsArray.length; i++) {
        const randomImage = jobsIMG[Math.floor((Math.random() * jobsIMG.length))];

        const jobTemplate = `
            <div class="job-post ${jobsArray[i].positionCountry}" style="order: ${jobsArray[i].order}">
                <div class="col">
                    <img src="${randomImage}" alt="${jobsArray[i].positionALT}">
                </div>
                <div class="col">
                    <div class="country-wrapper">
                        <img class="flag-img" src="${jobsArray[i].flagURL}" alt="${jobsArray[i].positionCountry}">
                        <p class="flag-country">
                            ${jobsArray[i].positionCity}
                        </p>
                    </div>
                    <h3>
                        ${jobsArray[i].positionTitle}
                    </h3>
                    <p>
                        ${jobsArray[i].positionText}
                    </p>
                    <a class="custom-btn" href="${jobsArray[i].positionURL}">Read more</a>
                </div>
            </div>
        `;
        jobsWrapper.insertAdjacentHTML("beforeend", jobTemplate);
    };
};

$(document).ready(createJobBox);

dropdown.addEventListener('change', dropdownFilter);
const teamWrapper = document.querySelector('.teamWrapper');

const teamMembers = [
    {
        'name' : 'Steven',
        'country' : 'Belgium',
        'function' : 'CEO',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/StevenCallens.jpg',
        'topic1' : 'guardian of the Sunday culture and community',
        'topic2' : 'Always happy & eager to help and support, but strict in implementation',
        'topic3' : 'If you have a problem, go to Steven but always think about a possible solution too'
    },
    {
        'name' : 'Niels',
        'country' : 'Belgium',
        'function' : 'CEO',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/NielsVandecasteele.jpg',
        'topic1' : 'Visionary behind the Sunday brand',
        'topic2' : 'Organizes family barbecues and practices Krav Maga on Sunday',
        'topic3' : 'Is a published author of the book "Iedereen Superfan"'
    },
    {
        'name' : 'Karel-Jan',
        'country' : 'Belgium',
        'function' : 'CCO',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/KarelJanVercruysse.jpg',
        'topic1' : 'Probably travels the most between the Sunday subsidiaries',
        'topic2' : 'Loves fine dining on Sundays and going to KV Kortrijk soccer matches',
        'topic3' : "Has a knack for learning languages, he's now studying Italian"
    },
    {
        'name' : 'Fabienne',
        'country' : 'Belgium',
        'function' : 'F&A Officer',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/FabienneVermeersch.jpg',
        'topic1' : 'Super social, likes to stick around on Fridays to socialise',
        'topic2' : 'Can be found hiking with her family or enjoying rosé wine on a hipster terrace on Sundays',
        'topic3' : 'Talk to her about music and movies!'
    },
    {
        'name' : 'Vanessa',
        'country' : 'Belgium',
        'function' : 'F&A Officer',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/VanessaHostens.jpg',
        'topic1' : 'OG Sunday employee',
        'topic2' : 'Loves travelling and shopping on Sunday',
        'topic3' : 'The singer P!nk is her girl crush'
    },
    {
        'name' : 'Birgit',
        'country' : 'Belgium',
        'function' : 'Sales Enablement Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/BirgitRaes.jpg',
        'topic1' : 'Always open for a quick chat and happy to help with whatever you need',
        'topic2' : 'Loves reading, cooking and playing music on Sundays',
        'topic3' : 'Considers winning ‘best halloween costume’ as one of her greatest professional achievements'
    },
    {
        'name' : 'Lieselot',
        'country' : 'Belgium',
        'function' : 'International Recruiter',
        'image' : '',
        'topic1' : 'Becoming a true LinkedIn guru',
        'topic2' : 'Enjoys good cheese and fine wine',
        'topic3' : 'Not the biggest hero on ice (broke her wrist 3 times already)'
    },
    {
        'name' : 'Chiara',
        'country' : 'Belgium',
        'function' : 'Receptionist',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/ChiaraDetavernier.jpg',
        'topic1' : 'MVP in the office',
        'topic2' : 'On Sundays, she loves to go out for dinner and watch Netflix',
        'topic3' : 'Riding a cow is high on her bucket list'
    },
    {
        'name' : 'Aaron',
        'country' : 'Belgium',
        'function' : 'Growth Hacker',
        'image' : '',
        'topic1' : 'Takes care of our website and ads',
        'topic2' : 'Keeps setting new personal weight lifting records',
        'topic3' : 'Loves strategy games'
    },
    {
        'name' : 'Dorothée',
        'country' : 'Belgium',
        'function' : 'Marketing Project Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/DorotheeHespeel.jpeg',
        'topic1' : 'Creates awesome marketing campaigns',
        'topic2' : 'Loves a good brunch with friends',
        'topic3' : 'Dressed to the nines every day'
    },
    {
        'name' : 'Morgane',
        'country' : 'Belgium',
        'function' : 'Content Creator',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/MorganeLemiengre.jpeg',
        'topic1' : 'Social media queen',
        'topic2' : 'Loves tennis and taking in fresh air',
        'topic3' : 'Listens to Dutch hip hop in public and to Abba in secret'
    },
    {
        'name' : 'Nils',
        'country' : 'Belgium',
        'function' : 'Art Director',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/NilsWittevrongel.jpg',
        'topic1' : 'Knows everything about designing cool and wearable company fashion',
        'topic2' : 'Loves NBA, Formula 1 & Orval',
        'topic3' : 'Might look a little intimidating, but will gladly help you out with design related questions'
    },
    {
        'name' : 'Lukas',
        'country' : 'Belgium',
        'function' : 'Audiovisual Content Creator',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/LukasBreughe.jpg',
        'topic1' : 'Video magician',
        'topic2' : 'Great on the basketball court',
        'topic3' : 'Loves beers with friends'
    },
    {
        'name' : 'Bartel',
        'country' : 'Belgium',
        'function' : 'Senior Developer',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/bartelSamyn.jpg',
        'topic1' : "Writes code like nobody's business",
        'topic2' : 'Dad of two adorable kids',
        'topic3' : 'Loves sushi & Lego'
    },
    {
        'name' : 'Awet',
        'country' : 'Belgium',
        'function' : 'Junior PHP Developer',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/AwetTesfay.jpg',
        'topic1' : 'Computer wizard',
        'topic2' : 'Enjoys spending time with his family on Sundays',
        'topic3' : 'Big fan of Turkish action movies'
    },
    {
        'name' : 'Sebastiaan',
        'country' : 'Belgium',
        'function' : 'Internation Expansion Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/SebastiaanMaesen.jpg',
        'topic1' : 'Is an extraverted introvert',
        'topic2' : 'On sunday he Netflixes, practises some Sports, goes out for brunch',
        'topic3' : 'Fav Quote: "Some birds are too colorful to be caged"'
    },
    {
        'name' : 'Mazelli',
        'country' : 'Belgium',
        'function' : 'Partner Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/MazelliDetavernier.jpg',
        'topic1' : 'Has awesome people skills',
        'topic2' : 'Loves music, drinks and food on Sundays',
        'topic3' : 'Brightens up office parties with his dance skills'
    },
    {
        'name' : 'Gilles',
        'country' : 'Belgium',
        'function' : 'Account Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/GillesCossement.jpg',
        'topic1' : 'Salesman with a special interest in international business',
        'topic2' : 'Loves to spend his time in the soccer stadium',
        'topic3' : 'His favorite snack (and the way to his heart) is a Grany Moelleux'
    },
    {
        'name' : 'Basiel',
        'country' : 'Belgium',
        'function' : 'Account Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/BasielSinnesael.jpg',
        'topic1' : 'Salesman with keen interest in cities and food & drink',
        'topic2' : 'Loves padel, barbecue and beers',
        'topic3' : 'Owner of a great Spotify playlist called ‘zet ma tandje luwre’. It’s a banger!'
    },
    {
        'name' : 'Nicola',
        'country' : 'Belgium',
        'function' : 'Account Executive',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/NicolaNeve.jpg',
        'topic1' : 'Salesman who loves a good laugh',
        'topic2' : 'Loves cycling or playing padel during the weekend',
        'topic3' : 'Nicola’s last name is ‘Neve’, which is Portuguese for ‘snow’.'
    },
    {
        'name' : 'Timon',
        'country' : 'Belgium',
        'function' : 'Account Executive',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/TimonDedeyster.jpg',
        'topic1' : 'Salesman specialised in HR, business consultancy and Telecom clients',
        'topic2' : 'Loves watching ‘Casa De Papel’ on Netflix',
        'topic3' : 'He’s the quiet type, but will suddenly pull a 450K deal out of nowhere'
    },
    {
        'name' : 'Louis',
        'country' : 'Belgium',
        'function' : 'Head Of Demand Generation',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/LouisVandommele.jpg',
        'topic1' : 'Very sociable and musically talented, ex professional drummer',
        'topic2' : 'Loves sneakers and vintage clothing',
        'topic3' : 'Is often quoted saying "Europe is a village"'
    },
    {
        'name' : 'Anna',
        'country' : 'Belgium',
        'function' : 'Sales Development Representative',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/AnnaBaffour.jpeg',
        'topic1' : 'Loves meeting friends',
        'topic2' : 'Binges Netflix on Sundays',
        'topic3' : 'Thinks brunch is the best invention ever because it means sleeping in and waking up to Mimosas'
    },
    {
        'name' : 'Ana',
        'country' : 'Belgium',
        'function' : 'Sales Development Representative',
        'image' : '',
        'topic1' : 'Fashion Amateur, fan of 19-th Century Victorian Clothing',
        'topic2' : 'Less is more: adopting a sustainable approach to living',
        'topic3' : 'Being clumsy is her second nature'
    },
    {
        'name' : 'Charlotte',
        'country' : 'Belgium',
        'function' : 'Sales Development Representative',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/CharlotteVens.jpeg',
        'topic1' : 'Might have magic hair that glows when she sings',
        'topic2' : 'Working on her sneaker basement',
        'topic3' : 'Professional sarcastic teaser (so don’t take her jokes too seriously)'
    },
    {
        'name' : 'Clara',
        'country' : 'Belgium',
        'function' : 'Sales Development Representative',
        'image' : '',
        'topic1' : 'Brunch with my friends on Sunday ',
        'topic2' : 'Walking with my dogs (Danish Dog & Leonberg)',
        'topic3' : 'Go on citytrips with my friends on motorcycle '
    },
    {
        'name' : 'Elisa',
        'country' : 'Belgium',
        'function' : 'Customer Success Manager',
        'image' : '',
        'topic1' : 'Likes to crack jokes, all the time',
        'topic2' : 'Coffee was her first love and it will be her last',
        'topic3' : 'Award to the cutest dog off all time goes to her furry friend Vino'
    },
    {
        'name' : 'Iris',
        'country' : 'belgium',
        'function' : 'Customer Success Manager',
        'image' : 'https://teamsunday.com/wp-content/uploads/2021/11/IrisDevos.jpg',
        'topic1' : 'Loves good food and drinks',
        'topic2' : 'Is always the life of the (office) party ',
        'topic3' : 'Always has exciting plans for the weekend '
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    },
    {
        'name' : '',
        'country' : '',
        'function' : '',
        'image' : '',
        'topic1' : '',
        'topic2' : '',
        'topic3' : ''
    }
]


function createTeam() {
    for (let i = 0; i < teamMembers.length; i++) {
        const teamTemplate = `
            <div class="team-member-item">
                <img src="${teamMembers[i].image}" alt="${teamMembers[i].name}">

                <h4 class="name">
                    ${teamMembers[i].name}
                </h4>

                <p class="role">
                    ${teamMembers[i].function}
                </p>

                <ul class="topics">
                    <li>
                        ${teamMembers[i].topic1}
                    </li>
                    <li>
                        ${teamMembers[i].topic2}
                    </li>
                    <li>
                        ${teamMembers[i].topic3}
                    </li>
                </ul>
            </div>
        `;

        console.log(teamWrapper);

        console.log('teamTemplate')
        console.log(teamTemplate);

        teamWrapper.insertAdjacentHTML("beforeend", teamTemplate);
    };
};

$(document).ready(function() {
    createTeam();
});
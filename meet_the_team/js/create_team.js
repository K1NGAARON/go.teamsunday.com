const teamWrapper = document.querySelector('#teamWrapper');

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


function createTeam(teamMembers) {
    for (let i = 0; i < teamMembers.length; i++) {
        const teamTemplate = `
            <div class="team-member-item">
                <img src="" alt="">
                <p class="role">
                
                </p> 

                <ul class="topics">
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        `;
        jobsWrapper.insertAdjacentHTML("beforeend", teamTemplate);
    };
};

$(document).ready(function() {
    createTeam();
});
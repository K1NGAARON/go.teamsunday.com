const webinarReplays = [
    {
        title: 'Boost employee engagement through HR data.',
        url: '',
    },
    {
        title: '6 practical tips for a successful pre-and onboarding process.',
        url: '',
    },
    {
        title: 'How employee wellbeing can boost your business success.',
        url: '',
    },
    {
        title: 'How to attract top talent from the universities.',
        url: '',
    },
    {
        title: 'How to maintain a solid company culture during times of hybrid work',
        url: '',
    }
];


function loadVideo(e) {
    $('.wrapper .item').removeClass('active');
    $(this).closest('.item').addClass('active');

    const activeVideo = document.querySelector('.wrapper .item.active');

    console.log(this);






};



$('.wrapper .item').click(loadVideo);
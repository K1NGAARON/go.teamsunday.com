// CTA TOGGLE
const locationInfo = [
    {
        'city' : 'Roeselare HQ',
        'street' : 'Hof Ter Weze 5',
        'city' : '8800 Roeselare',
        'phone' : '+32 51 20 11 98'
    },
    {
        'city' : 'Amsterdam',
        'street' : 'Joop Geesinkweg 641',
        'city' : '1114 AB Amsterdam',
        'phone' : '+32 51 20 11 98',
    },
    {
        'city' : 'Berlin',
        'street' : 'Lohmühlenstraße 65',
        'city' : '12435 Berlin',
        'phone' : '+32 51 20 11 98',
    },
    {
        'city' : 'Lodz',
        'street' : 'ul. Gdańska 126/128',
        'city' : '90-520 Łódź',
        'phone' : '+48 512 754 954',
    },
    {
        'city' : 'Dublin',
        'street' : 'Custom House Quay',
        'city' : 'CHQ Dublin',
        'phone' : '+32 51 20 11 98',
    },
    {
        'city' : 'London',
        'street' : 'BLCC Club Quarters',
        'city' : '8 Northumberland Avenue, London WC2N 5BY',
        'phone' : '+32 51 20 11 98',
    }
];

const streetHolder = document.querySelector('.info > .street');
const cityHolder = document.querySelector('.info > .city');
const phoneHolder = document.querySelector('.info > .phone');

function changeLocationInfo(e) {
    let activeSelection = e.target.id;

    $('.locations > a').removeClass('active');
    $(this).addClass('active');

    if (activeSelection === 'roeselare') {
        streetHolder.innerHTML = locationInfo[0].street;
        cityHolder.innerHTML = locationInfo[0].city;
        phoneHolder.innerHTML = locationInfo[0].phone;
    } else if (activeSelection === 'amsterdam') {
        streetHolder.innerHTML = locationInfo[1].street;
        cityHolder.innerHTML = locationInfo[1].city;
        phoneHolder.innerHTML = locationInfo[1].phone;
    } else if (activeSelection === 'berlin') {
        
    } else if (activeSelection === 'lodz') {

    } else if (activeSelection === 'dublin') {
        
    } else if (activeSelection === 'london') {

    }
}

// IMAGE SLIDER


// VIDEO ZOOM

$('.locations > a').click(changeLocationInfo);
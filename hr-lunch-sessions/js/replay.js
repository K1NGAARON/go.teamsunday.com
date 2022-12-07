const titleHolder = $('#title');
const videoHolder = $('#videoHolder');

function loadVideo(e) {
    $('.wrapper .item').removeClass('active');
    $(this).closest('.item').addClass('active');

    const activeVideo = document.querySelector('.wrapper .item.active');
    const clickedIMG = e.target.id;

    if (clickedIMG === 'timothy') {
        titleHolder.text('Boost employee engagement through HR data');
        videoHolder.html(`
            <div class="wrapper" id="videoHolder">
                <div class="video_embed">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778084762?h=f44794715f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 12px;" title="HR Lunch Sessions #1 - Timothy Desmet"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            `
            );
    } else if (clickedIMG === 'birgit') {
        titleHolder.text('6 practical tips for a successful pre-and onboarding process');
        videoHolder.html(`
            <div class="wrapper" id="videoHolder">
                <div class="video_embed">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778087552?h=58f3765428&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 12px;" title="HR Lunch Sessions #2 - Birgit Raes"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            `
            );
    } else if (clickedIMG === 'dot') {
        titleHolder.text('How employee wellbeing can boost your business success');
        videoHolder.html(`
            <div class="wrapper" id="videoHolder">
                <div class="video_embed">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778088833?h=17e9202494&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%; border-radius:12px;" title="HR Lunch Sessions #3 - Dot Zacharias"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            `
            );
    } else if (clickedIMG === 'rebecca') {
        titleHolder.text('How to attract top talent from the universities');
        videoHolder.html(`
            <div class="wrapper" id="videoHolder">
                <div class="video_embed">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778091132?h=b5369116a8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;" title="HR Lunch Session #4 - Rebecca Fielding"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            `
            );
    } else if (clickedIMG === 'adriaan') {
        titleHolder.text('How to maintain a solid company culture during times of hybrid work');
        videoHolder.html(`
            <div class="wrapper" id="videoHolder">
                <div class="video_embed">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778095326?h=b6e75b64bd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;" title="HR Lunch Sessions #5 - Adriaan Kolff"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
            `
            );
    };

    // SCROLLL TO VIDEO

};



$('.wrapper .item').click(loadVideo);
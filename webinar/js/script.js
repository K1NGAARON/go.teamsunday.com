function copySuccess() {
    alert('URL copied successfully!');
};




$('#share').on('click', function() {
    var $temp = $("<input>");
    var $url = 'https://go.teamsunday.com/webinar/';

    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();

    copySuccess();
});


$('#webinarLink').on('click', function() {
    var $temp = $("<input>");
    var $url = 'meet.google.com/pwd-imnb-wpg';

    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();

    copySuccess();
});
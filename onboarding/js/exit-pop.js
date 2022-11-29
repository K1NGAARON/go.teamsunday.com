document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget) {
        document.querySelector('.exit-pop').classList.add('visible'); 
    }
});

const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        
        document.querySelector('.exit-pop').classList.add('visible');
    }
};


$('.close').click( () => {
    $('.exit-pop').removeClass('visible');
});

// REFACTOR THIS
const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-pop') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.exit-pop').classList.remove('visible');
    }
};

// When adding the mouseout event handler, also add one for keydown
setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 10000);
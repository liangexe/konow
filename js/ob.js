document.querySelector('.ob-scroll').addEventListener('click', function () {

    const scrollAmount = 245 + 40;
    const maxTranslateX = -scrollAmount * 5;

    let currentTranslateX = parseFloat(getComputedStyle(document.querySelector('.ob-svg-list')).transform.split(',')[4]) || 0;

    let newTranslateX = currentTranslateX - scrollAmount;

    if (newTranslateX < maxTranslateX) {
        newTranslateX = 0;
    }

    document.querySelector('.ob-svg-list').style.transform = `translateX(${newTranslateX}px)`;
});

/* USER SURVEY 가로 스크롤 부분 스크립트 */
document.getElementById('container1').addEventListener('wheel', function (scroll) {
    scroll.preventDefault();

    let usScroll = this.scrollLeft + scroll.deltaY;
    usScroll = Math.max(0, Math.min(usScroll, 600));
    this.scrollLeft = usScroll;

    document.querySelector('.user1').style.transform = `translateX(-${usScroll}px)`;
})


/* USER SURVEY svg 애니메이션 부분 스크립트 */

document.addEventListener("DOMContentLoaded",function () {
    const usSvg = document.querySelectorAll('.us-svg2');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('up');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    usSvg.forEach(svg => {
        observer.observe(svg);
    });
});
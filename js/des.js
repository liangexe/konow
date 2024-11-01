document.addEventListener("DOMContentLoaded",function () {
    const desSvg = document.querySelectorAll('.des-box1');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('up');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    desSvg.forEach(svg => {
        observer.observe(svg);
    });
});
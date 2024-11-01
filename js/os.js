document.addEventListener("DOMContentLoaded",function () {
    const osSvg = document.querySelectorAll('.servBox');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry,index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('up');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    osSvg.forEach(svg => {
        observer.observe(svg);
    });
});
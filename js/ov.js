document.addEventListener('DOMContentLoaded', () => {
    const sec2 = document.querySelector('#sec2');
    const animations = ["ov-1", "ov-2", "ov-3", "ov-4", "ov-5", "ov-6", "ov-7"];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                animations.forEach(animationClass => {
                    const element = document.querySelector(`.${animationClass}`);
                    if (element) {
                        element.classList.add("active");
                    }
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(sec2);
});

const boxes = document.querySelectorAll('#sec12 > div');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('up');
            }, index * 200);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

boxes.forEach(box => {
    observer.observe(box);
});
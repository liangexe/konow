
document.addEventListener("DOMContentLoaded", function () {
    const smSvgTarget = document.querySelector('.sm213');
    const SvgSmTarget1 = document.querySelector('.sm-svg1');
    const SvgSmTarget2 = document.querySelector('.sm-svg3');
    const TBoxTarget = document.querySelector('.sec13-TBox');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === smSvgTarget) {
                    smSvgTarget.classList.add("up");
                } else if (entry.target === SvgSmTarget1) {
                    SvgSmTarget1.classList.add("left");
                } else if (entry.target === SvgSmTarget2) {
                    SvgSmTarget2.classList.add("right");
                } else if (entry.target === TBoxTarget) {
                    TBoxTarget.classList.add("found");
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(smSvgTarget);
    observer.observe(SvgSmTarget1);
    observer.observe(SvgSmTarget2);
    observer.observe(TBoxTarget);

});

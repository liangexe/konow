// sec3의 bg_svg 애니메이션 부분 스크립트
document.addEventListener("DOMContentLoaded", function () {
    const BgSvgTarget = document.querySelector('.bg_svg');
    const SvgContainerTarget = document.querySelector('.bg_container_box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === BgSvgTarget) {
                    BgSvgTarget.classList.add("show");
                } else if (entry.target === SvgContainerTarget) {
                    SvgContainerTarget.classList.add("up");
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(BgSvgTarget);
    observer.observe(SvgContainerTarget);

});


// sec3의 bg_svg 애니메이션 부분 스크립트
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector('.bg_svg');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(target);

});

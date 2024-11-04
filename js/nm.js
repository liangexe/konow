document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text-animation");
    const originalText = "KOREAN KNOW NOW";
    const newText = "KONOW";

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateText();
        }
    });

    observer.observe(document.getElementById("name"));

    function animateText() {
        textElement.innerHTML = "";

        originalText.split("").forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char;
            textElement.appendChild(span);

            setTimeout(() => {
                span.classList.add("hidden");
            }, i * 100);
        });

        setTimeout(() => {
            textElement.innerHTML = "";
            newText.split("").forEach((char, i) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.opacity = 0;
                span.style.transform = "scale(0.5) translateX(-20px)";
                textElement.appendChild(span);


                setTimeout(() => {
                    span.style.opacity = 1;
                    span.style.transform = "scale(1) translateX(0)";
                }, 500 + i * 100);
            });
        }, originalText.length * 100);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const GRAVITY = 0.5;
    const FRICTION = 0.5; // 마찰 계수
    const DELAY_BETWEEN = 30; // ms
    const INITIAL_VELOCITY_RANGE = 3; // 초기 좌우 속도 범위
    const SVG_SPACING = 30; // SVG 사이의 간격

    const svgStates = new Map();
    const container = document.querySelector('.svg-con');
    const svgs = document.querySelectorAll('svg[class^="ov-"]');

    function updateBounds() {
        const containerBounds = container.getBoundingClientRect();
        return {
            left: 0,
            right: containerBounds.width,
            bottom: containerBounds.height
        };
    }

    let bounds = updateBounds();

    window.addEventListener('resize', () => {
        bounds = updateBounds();
    });

    // SVG 초기 상태 설정
    svgs.forEach((svg, index) => {
        const svgBounds = svg.getBoundingClientRect();
        svgStates.set(svg, {
            position: {
                // 컨테이너의 너비를 넘지 않도록 설정
                x: index * (svgBounds.width + SVG_SPACING) % (bounds.right - svgBounds.width),
                y: 0
            },
            velocity: {
                x: (Math.random() * 2 - 1) * INITIAL_VELOCITY_RANGE,
                y: 0
            },
            width: svgBounds.width,
            height: svgBounds.height,
            isVisible: false,
            animationId: null,
            lastTime: null
        });
    });

    function animate(svg, currentTime) {
        const state = svgStates.get(svg);

        if (!state.lastTime) {
            state.lastTime = currentTime;
        }

        const deltaTime = (currentTime - state.lastTime) / 16;

        // 물리 계산
        state.velocity.y += GRAVITY * deltaTime;
        state.position.y += state.velocity.y * deltaTime;

        // 마찰 적용
        state.velocity.x *= FRICTION;
        state.position.x += state.velocity.x * deltaTime;

        // 바닥 충돌 처리
        if (state.position.y >= bounds.bottom - state.height) {
            state.position.y = bounds.bottom - state.height;
            state.velocity.y = 0;
        }

        // 좌우 벽 충돌 처리
        if (state.position.x <= bounds.left) {
            state.position.x = bounds.left;
            state.velocity.x = Math.abs(state.velocity.x);
        }
        if (state.position.x >= bounds.right - state.width) {
            state.position.x = bounds.right - state.width;
            state.velocity.x = -Math.abs(state.velocity.x);
        }

        // SVG 위치 업데이트
        svg.style.transform = `translate(${state.position.x}px, ${state.position.y}px)`;
        state.lastTime = currentTime;

        if (state.isVisible) {
            state.animationId = requestAnimationFrame((time) => animate(svg, time));
        }
    }

    function startAnimation(svg, delay = 0) {
        const state = svgStates.get(svg);

        setTimeout(() => {
            state.velocity.x = (Math.random() * 2 - 1) * INITIAL_VELOCITY_RANGE;
            state.animationId = requestAnimationFrame((time) => animate(svg, time));
        }, delay);
    }

    function resetAnimation(svg) {
        const state = svgStates.get(svg);
        state.position = { x: 0, y: 0 };
        state.velocity = { x: 0, y: 0 };
        state.lastTime = null;
        svg.style.transform = 'translate(0, 0)';

        if (state.animationId) {
            cancelAnimationFrame(state.animationId);
            state.animationId = null;
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const svg = entry.target;
            const state = svgStates.get(svg);
            const index = Array.from(svgs).indexOf(svg);

            state.isVisible = entry.isIntersecting;

            if (entry.isIntersecting) {
                resetAnimation(svg);
                startAnimation(svg, index * DELAY_BETWEEN);
            }
        });
    }, { threshold: 0.1 });

    svgs.forEach(svg => {
        observer.observe(svg);
    });
});
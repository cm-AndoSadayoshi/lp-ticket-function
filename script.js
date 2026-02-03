document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // デモボタンのスマートフォン対応
    const demoButtons = document.querySelectorAll('.demo-button');

    demoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // スマートフォン判定（画面幅768px以下、またはタッチデバイス）
            const isMobile = window.innerWidth <= 768 ||
                           ('ontouchstart' in window) ||
                           (navigator.maxTouchPoints > 0);

            const baseUrl = 'https://prototype-ticket-function.vercel.app';
            const url = isMobile ? `${baseUrl}/mini/list` : `${baseUrl}/demo/list`;

            window.location.href = url;
        });
    });
});

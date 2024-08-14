document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav');
    const fechar = document.querySelector('.fechar');
    const overlay = document.querySelector('.overlay');

    const toggleMenu = () => {
        nav.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    menuMobile.addEventListener('click', toggleMenu);
    fechar.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});

// CONTADOR ANIMADO

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('#contador .projetos h1 span');

    const startCounting = (entry) => {
        const counter = entry.target;
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            // Alternar o projeto clicado
            project.classList.toggle('active');
            const content = project.querySelector('.project-content');
            if (project.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});



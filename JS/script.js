let menu = document.getElementById('mobile-menu');

document.getElementById('menu-button').addEventListener('click', function() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('show');
    // Добавляем/убираем класс для блокировки прокрутки
    document.body.classList.toggle('no-scroll');
});

document.getElementById('close-menu-button').addEventListener('click', function() {
    menu.classList.add('hidden');
    menu.classList.remove('show');
    // Убираем класс, чтобы разблокировать прокрутку
    document.body.classList.remove('no-scroll');
});

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !event.target.closest('#menu-button')) {
        menu.classList.add('hidden');
        menu.classList.remove('show');
        // Убираем класс, чтобы разблокировать прокрутку
        document.body.classList.remove('no-scroll');
    }
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('show');
        document.body.classList.remove('no-scroll');
    });
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        const navHeight = document.getElementById('nav').offsetHeight;
        window.scrollTo({ top: targetElement.offsetTop - navHeight, behavior: 'smooth' });
    });
});
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        const navHeight = document.getElementById('nav').offsetHeight;
        window.scrollTo({ top: targetElement.offsetTop - navHeight, behavior: 'smooth' });
    });
});

let menu = document.getElementById('mobile-menu');

document.getElementById('menu-button').addEventListener('click', function() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('show');
});

document.getElementById('close-menu-button').addEventListener('click', function() {
    menu.classList.add('hidden');
    menu.classList.remove('show');
});

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !event.target.closest('#menu-button')) {
        menu.classList.add('hidden');
        menu.classList.remove('show');
    }
});
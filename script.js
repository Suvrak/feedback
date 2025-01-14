document.querySelectorAll('.folder').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // предотвращаем всплытие события
        const info = document.getElementById('info');
        const toggle = this.querySelector('.toggle');

        // Открываем/закрываем папку
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
            toggle.textContent = '-'; // Меняем на минусик
        } else {
            toggle.textContent = '+'; // Меняем на плюсику
        }
    });
});

document.querySelectorAll('.device').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // предотвращаем всплытие события
        const info = document.getElementById('info');
        info.textContent = Вы выбрали устройство: ${this.textContent};
    });
});


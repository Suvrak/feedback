document.querySelectorAll('.folder, .file').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // предотвращаем всплытие события
        const info = document.getElementById('info');
        
        // Проверяем, является ли элемент папкой или файлом
        if (this.classList.contains('folder')) {
            info.textContent = Вы выбрали папку: ${this.childNodes[0].nodeValue.trim()};
        } else if (this.classList.contains('file')) {
            info.textContent = Вы выбрали файл: ${this.childNodes[0].nodeValue.trim()};
        }

        this.classList.toggle('open'); // Открываем/закрываем папку при клике
    });
});

document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', function (e) {
        e.stopPropagation(); // предотвращаем всплытие события
        this.classList.toggle('open');
    });
});

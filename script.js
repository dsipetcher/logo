function startTimer(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        document.querySelector('.timer').textContent =
            (hours < 10 ? "0" + hours : hours) + " : " +
            (minutes < 10 ? "0" + minutes : minutes) + " : " +
            (seconds < 10 ? "0" + seconds : seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    startTimer(600); // 10 минут (600 секунд)
};
function checkWrappedElements() {
    const container = document.querySelector(".content");
    const options = document.querySelectorAll(".option");

    let prevBottom = null;
    let containerWidth = container.clientWidth; // Запоминаем ширину контейнера

    options.forEach((option) => {
        const rect = option.getBoundingClientRect();

        // Проверяем, перенёсся ли элемент на новую строку
        if (prevBottom !== null && rect.top > prevBottom) {
            option.classList.add("row"); // Добавляем класс, если элемент перенесён
        }

        prevBottom = rect.bottom;
    });

    // Если контейнер расширился, сбрасываем все "row"
    window.requestAnimationFrame(() => {
        if (container.clientWidth > containerWidth) {
            options.forEach((option) => option.classList.remove("row"));
        }
    });

    containerWidth = container.clientWidth; // Обновляем сохранённую ширину
}

// Запуск при загрузке и изменении размера окна
window.addEventListener("load", checkWrappedElements);
window.addEventListener("resize", checkWrappedElements);

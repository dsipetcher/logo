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
let debounceTimeout;

function checkWrappedElements() {
    const container = document.querySelector(".content");
    const options = document.querySelectorAll(".option");

    const containerWidth = container.clientWidth;
    let prevBottom = null;

    options.forEach((option) => {
        const rect = option.getBoundingClientRect();

        // Проверка, если элемент переносится на новую строку (по вертикали)
        if (prevBottom !== null && rect.top > prevBottom) {
            option.classList.add("row");  // Элемент перенесся, добавляем класс
        } else {
            option.classList.remove("row");  // Элемент не перенесся, удаляем класс
        }

        prevBottom = rect.bottom;  // Обновляем нижнюю границу для следующего элемента

        // Дополнительно проверим, если элемент занял всю доступную ширину
        if (rect.left + rect.width <= containerWidth) {
            option.classList.remove("row");  // Если элемент помещается в одну строку, удаляем класс
        }
    });

    // Дебаунс для обновления классов при изменении ширины
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        // Обновление классов при изменении размеров экрана
    }, 200); // 200 мс задержка, чтобы не срабатывать на каждое изменение
}

// Запуск при загрузке и изменении размера окна
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto", // Оставляем авто-ширину слайдов
        spaceBetween: 10, // Расстояние между слайдами
        loop: true, // Включаем бесконечную прокрутку
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true, // Курсор "рука" при наведении (полезно для десктопа)
        touchEventsTarget: "wrapper", // Позволяет свайпать по всему слайдеру
        touchRatio: 1, // Чувствительность свайпа (1 — стандарт)
        touchAngle: 45, // Угол, при котором свайп работает
        threshold: 5, // Минимальное движение пальца для срабатывания свайпа
    });
});





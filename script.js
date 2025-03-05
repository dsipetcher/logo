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
    // Инициализация Swiper
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.1, // Количество видимых слайдов
        spaceBetween: 10, // Расстояние между слайдами
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Делаем точки кликабельными
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true, // Бесконечная прокрутка

        grabCursor: true, // Делаем курсор "рукой" при наведении
    });

    // Отключаем скролл страницы при свайпе по слайдеру
    const swiperContainer = document.querySelector(".swiper-container");

    swiperContainer.addEventListener("touchstart", (e) => {
        e.stopPropagation();
    });

    swiperContainer.addEventListener("touchmove", (e) => {
        e.stopPropagation();
    });

    swiperContainer.addEventListener("touchend", (e) => {
        e.stopPropagation();
    });

    // Исправление ошибки блокировки свайпа
    swiperContainer.addEventListener("wheel", (e) => {
        e.preventDefault(); // Запрещаем скролл страницы колесиком мыши над слайдером
    }, { passive: false });
});



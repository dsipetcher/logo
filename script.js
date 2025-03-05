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
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".credit-options");
    const options = document.querySelectorAll(".option");

    function checkWrappedElements() {
        let prevBottom = null;

        options.forEach((option) => {
            const rect = option.getBoundingClientRect();

            if (prevBottom !== null && rect.top > prevBottom) {
                option.classList.add("row");
            } else {
                option.classList.remove("row");
            }

            prevBottom = rect.bottom;
        });
    }

    // Проверка при изменении размера окна
    window.addEventListener("resize", checkWrappedElements);

    // Первичная проверка при загрузке страницы
    checkWrappedElements();
});


// Запуск при загрузке и изменении размера окна
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto", // Оставляем авто-ширину слайдов
        spaceBetween: 50, // Расстояние между слайдами
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
        touchRatio: 1.1, // Чувствительность свайпа (1 — стандарт)
        touchAngle: 45, // Угол, при котором свайп работает
        threshold: 1, // Минимальное движение пальца для срабатывания свайпа
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination) {
        pagination.style.display = 'none'; // Скрыть пагинацию
    }
});






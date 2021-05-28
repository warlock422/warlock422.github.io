$(document).ready(function () {
  setTimeout(() => {
    $(".splash").addClass("display-none");
    setTimeout(() => {
      $(".splash").css("display", "none");
    }, 2000);
  }, 1500);

  $(".single-item").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".slider-games").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  });

  /* Slider rewiews */
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".btn-wrapper").click(() => {
    $(".btn-wrapper").toggleClass("btn-close");
    if ($(".btn-wrapper").attr("class").includes("btn-close"))
      $(".menu").css("top", "0");
    else {
      $(".menu").css("top", "-100%");
      $(".main-menu").css("top", "-15rem");
    }
  });
});

//плавная прокрутка
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.gapeYOffet || document.documentElement.scrollTop;

// 1 функция - updateDashoffset нажатие
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// 2 функция - onScroll переключение класса активно или не активно
window.addEventListener("scroll", () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

// 3 функция - click главное ,будет считать на сколько нужно сделать заливну по кругу
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* Рейтинг звезды */
const ratingItemsList = document.querySelectorAll(".rating__item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListener("click", () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;

    // request
  })
);

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

/*$(function () {
    //плавная прокрутка
$("body").on("click", '[href*="#"]', function (e) {
    //fixed_offset нужен для фиксированных шапок
    var fixed_offset = 100;
    $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
    });
})*/

$(function () {
    //плавная прокрутка
$("body").on("click", '[href*="#"]', function (e) {
    //fixed_offset нужен для фиксированных шапок
    var fixed_offset = 100;
    $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
    });
})
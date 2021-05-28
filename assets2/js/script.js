 //плавная прокрутка
 const offset = 100;
 const scrollUp = document.querySelector('.scroll-up');
 const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
 const pathLength = scrollUpSvgPath.getTotalLength();
 
 scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
 scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'
 
 const getTop = () => window.gapeYOffet || document.documentElement.scrollTop;
 
 
 // 1 функция - updateDashoffset нажатие
 const updateDashoffset = () => {
     const height = document.documentElement.scrollHeight - window.innerHeight;
     const dashoffset = pathLength - (getTop()* pathLength / height);
 
     scrollUpSvgPath.style.strokeDashoffset = dashoffset;
 };
 
 
 // 2 функция - onScroll переключение класса активно или не активно
 window.addEventListener('scroll', () => {
     updateDashoffset();
     if ( getTop()> offset) {
         scrollUp.classList.add('scroll-up--active');
     } else {
         scrollUp.classList.remove('scroll-up--active');
     }
 });
 
 // 3 функция - click главное ,будет считать на сколько нужно сделать заливну по кругу
 scrollUp.addEventListener('click', () => {
     window.scrollTo({
         top:0,
         behavior: 'smooth'
     });
 });
 
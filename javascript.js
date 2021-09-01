
const section = document.querySelectorAll("section");
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [90,80,60,60,80,70,70,50,50,50,70,70,50,60];
window.addEventListener("scroll", ()=>{
    mainFn();
});
   
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
          el.style.width = `${progressBarPercents[i]}%`;
          el.previousElementSibling.firstElementChild.textContent =
            progressBarPercents[i];
        });
    }
mainFn();
window.addEventListener("resize", () => {
    window.location.reload();
  });
 
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});







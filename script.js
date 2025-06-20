let slideIndex = {};

function initSlides(project) {
  slideIndex[project] = 1;
  showSlides(1, project);
}

function plusSlides(n, project) {
    showSlides(slideIndex[project] + n, project);
}

function currentSlide(n, project) {
    showSlides(n, project);
}


function showSlides(n, project) {
  let slides = document.querySelectorAll(`.slides[data-project="${project}"]`);
  let dots = document.querySelectorAll(`.dot[data-project="${project}"]`);

  if (slides.length === 0) return;

  if (n > slides.length) slideIndex[project] = 1;
  else if (n < 1) slideIndex[project] = slides.length;
  else slideIndex[project] = n;

  slides.forEach((s, i) => {
    s.style.display = (i + 1 === slideIndex[project]) ? "block" : "none";
  });

  dots.forEach((d, i) => {
    d.className = d.className.replace(" dot-active", "");
    if (i + 1 === slideIndex[project]) {
      d.className += " dot-active";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSlides("project1");
});

document.addEventListener("DOMContentLoaded", () => {
  initSlides("project2");
});
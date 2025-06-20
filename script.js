let slideIndex = {};

function plusSlides(n, project) {
    showSlides((slideIndex[project] || 1) + n, project);
}

function currentSlide(n, project) {
    showSlides(n, project);
}

function showSlides(n, project) {
    let slides = document.querySelectorAll(`.slides[data-project="${project}"]`);
    let dots = document.querySelectorAll(`.dot[data-project="${project}"]`);

    if (slides.length === 0) return;

    if (!slideIndex[project]) slideIndex[project] = 1;

    if (n > slides.length) slideIndex[project] = 1;
    else if (n < 1) slideIndex[project] = slides.length;
    else slideIndex[project] = n;

    slides.forEach((s, i) => {
        s.style.display = (i + 1 === slideIndex[project]) ? "block" : "none";
    });

    if (dots.length > 0) {
        dots.forEach((d, i) => {
            d.className = d.className.replace(" active", "");
            if (i + 1 === slideIndex[project]) d.className += " active";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let projects = new Set();
    document.querySelectorAll(".slides").forEach(slide => {
        projects.add(slide.dataset.project);
    });
    projects.forEach(project => {
        showSlides(1, project);
    });
});
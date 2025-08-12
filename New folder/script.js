// Hiệu ứng chữ gõ
const typingText = ["Frontend Developer", "UI/UX Designer", "Freelancer"];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
    let currentText = typingText[i];
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % typingText.length;
            setTimeout(type, 500);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Parallax background
window.addEventListener("scroll", () => {
    document.querySelectorAll("[data-speed]").forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Scroll reveal
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Dark / Light mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.className = "mode-toggle";
document.body.appendChild(toggleBtn);

let darkMode = true;
toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("light-mode", !darkMode);
    toggleBtn.textContent = darkMode ? "🌙" : "☀️";
});

// Project card hover effect
document.querySelectorAll(".project").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "none";
    });
});

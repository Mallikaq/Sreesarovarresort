const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const enquiryForm = document.querySelector(".enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(enquiryForm);
    const name = data.get("name") || "Guest";
    const phone = data.get("phone") || "Not provided";
    const visitType = data.get("visit-type") || "Room booking";
    const date = data.get("date") || "Flexible";
    const message = data.get("message") || "Please share availability and pricing.";

    const draft = `Sree Sarovar Resort enquiry%0A%0AName: ${name}%0APhone: ${phone}%0AVisit type: ${visitType}%0APreferred date: ${date}%0AMessage: ${message}`;
    window.location.href = `https://wa.me/919972552827?text=${draft}`;
  });
}

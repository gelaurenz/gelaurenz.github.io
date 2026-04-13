const yearTarget = document.querySelector("#year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const sections = Array.from(document.querySelectorAll(".reveal, main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav a"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  {
    threshold: 0.16,
  }
);

for (const section of document.querySelectorAll(".reveal")) {
  revealObserver.observe(section);
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry?.target?.id) {
      return;
    }

    const activeHref = `#${visibleEntry.target.id}`;

    for (const link of navLinks) {
      link.classList.toggle("is-active", link.getAttribute("href") === activeHref);
    }
  },
  {
    rootMargin: "-30% 0px -45% 0px",
    threshold: [0.2, 0.5, 0.8],
  }
);

for (const section of sections) {
  if (section.id) {
    sectionObserver.observe(section);
  }
}

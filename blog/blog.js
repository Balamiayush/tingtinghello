// Initialize Lenis

const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
//   console.log(e);
});
 document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const blogPosts = document.querySelectorAll(".blog-post");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      blogPosts.forEach(post => {
        const title = post.getAttribute("data-title")?.toLowerCase() || "";
        const textContent = post.innerText.toLowerCase();
        const matches = title.includes(query) || textContent.includes(query);

        post.style.display = matches ? "block" : "none";
      });
    });
  })


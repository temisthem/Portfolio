const isGitHubPages = window.location.hostname.includes("github.io");
document.querySelectorAll("img").forEach(img => {
    if (isGitHubPages && img.src.startsWith("/images/")) {
        img.src = "/public/" + img.src;
        console.log("giving")
    }
});
console.log('hi')

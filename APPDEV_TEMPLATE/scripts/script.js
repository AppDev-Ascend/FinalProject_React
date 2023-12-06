document.addEventListener("input", function(event) {
    if (event.target && event.target.classList.contains("generic-textarea")) {
      var textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = (textarea.scrollHeight) + "px";
    }
});
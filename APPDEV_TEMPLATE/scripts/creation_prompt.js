document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('overlay').addEventListener('click', closePrompt);
});

function showPrompt() {
    // Show the prompt and overlay
    document.getElementById('promptContainer').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function closePrompt() {
    // Close the prompt and overlay
    document.getElementById('promptContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


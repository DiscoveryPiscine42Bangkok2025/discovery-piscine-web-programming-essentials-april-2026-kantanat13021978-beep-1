// Hide the video if it's missing
const video = document.getElementById('bg-video');
video.addEventListener('error', () => {
  video.style.display = 'none';
  document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
});
// Hide video if it's fail to load
const video = document.getElementById('bg-video');

video.addEventListener('error', () => {
  video.style.display = 'none';
  document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
});
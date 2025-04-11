// Function to trigger wallpaper download
function downloadImage(imageId) {
    var imageSrc = document.getElementById(imageId).src;
    var link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'wallpaper.jpg';  // Default name for downloaded file
    link.click();
}

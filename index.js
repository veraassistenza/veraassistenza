document.getElementById('learn-more').addEventListener('click', function() {
    alert('More information will be available soon!');
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationFactor = 600; // rate at which the gradient rotates
    /* const degree = (135 + scrollPosition * rotationFactor) % 360; // Start from 135 degrees */
    document.body.style.background = `linear-gradient(${degree}deg, white, red)`;
});
/* window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationFactor = 600; // rate at which the gradient rotates
    const degree = (135 + scrollPosition * rotationFactor) % 360; // Start from 135 degrees
    document.body.style.background = `linear-gradient(${degree}deg, white, red)`;
}); */


document.getElementById('openPopupImm').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

function showRequirements(element, serviceName, requirements) {
    var listItems = document.querySelectorAll('.services li');
    listItems.forEach(item => item.classList.remove('selected'));

    element.classList.add('selected');

    var requirementsDiv = document.getElementById('requirements');
    requirementsDiv.innerHTML = `<h2>${serviceName}</h2>
    <p>Requirements:</p>
    <ul>${requirements.map(req => `<li>${req}</li>`).join('')}</ul>`;
}
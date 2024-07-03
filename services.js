document.addEventListener("DOMContentLoaded", function() {
    var openPopupImm = document.getElementById('openPopupImm');
    var openPopupCaf = document.getElementById('openPopupCaf');
    var openPopupPatronato = document.getElementById('openPopupPatronato');
    
    var closePopupImm = document.getElementById('closePopupImm');
    var closePopupCaf = document.getElementById('closePopupCaf');
    var closePopupPatronato = document.getElementById('closePopupPatronato');
    
    var popupImm = document.getElementById('popupImm');
    var popupCaf = document.getElementById('popupCaf');
    var popupPatronato = document.getElementById('popupPatronato');
    
    function closeAllPopups() {
        popupImm.style.display = 'none';
        popupCaf.style.display = 'none';
        popupPatronato.style.display = 'none';
    }

    openPopupImm.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupImm.style.display = 'flex';
    });

    openPopupCaf.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupCaf.style.display = 'flex';
    });

    openPopupPatronato.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupPatronato.style.display = 'flex';
    });

    closePopupImm.addEventListener('click', function() {
        popupImm.style.display = 'none';
    });

    closePopupCaf.addEventListener('click', function() {
        popupCaf.style.display = 'none';
    });

    closePopupPatronato.addEventListener('click', function() {
        popupPatronato.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popupImm) {
            popupImm.style.display = 'none';
        }
        if (event.target == popupCaf) {
            popupCaf.style.display = 'none';
        }
        if (event.target == popupPatronato) {
            popupPatronato.style.display = 'none';
        }
    });
});

function showRequirements(element, serviceName, requirements = []) {
    var requirementSection = document.getElementById('requirements');
    var requirementTitle = document.createElement('h2');
    var requirementList = document.createElement('ul');

    requirementTitle.textContent = serviceName;

    if (requirements.length > 0) {
        requirements.forEach(function(requirement) {
            var listItem = document.createElement('li');
            listItem.textContent = requirement;
            requirementList.appendChild(listItem);
        });
    } else {
        var listItem = document.createElement('li');
        listItem.textContent = "Requirements not specified.";
        requirementList.appendChild(listItem);
    }

    requirementSection.innerHTML = '';
    requirementSection.appendChild(requirementTitle);
    requirementSection.appendChild(requirementList);

    var servicesList = document.querySelectorAll('.services li');
    servicesList.forEach(function(service) {
        service.classList.remove('selected');
    });

    element.classList.add('selected');
}

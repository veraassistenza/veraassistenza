window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationFactor = 0.17; // rate at which the gradient rotates
    const degree = (135 + scrollPosition * rotationFactor) % 360; // Start from 135 degrees
    document.body.style.background = `linear-gradient(${degree}deg, #d09393 10%, #da1313 90%)`;
    document.body.style.backgroundAttachment = 'fixed';
});

/* Loading screen start */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the window to fully load all resources
    window.onload = function() {
        setTimeout(function() {
            var loadingScreen = document.getElementById('loading-screen');
            var content = document.getElementById('content');
            
            // Hide the loading screen with a smooth transition
            loadingScreen.classList.add('hidden');
            
            // Show the content with a smooth transition
            content.classList.add('visible');
        }, 1800);
    };
});
/* Loading screen end */

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
        document.body.classList.remove('popup-active'); // Remove blur effect
    }

    openPopupImm.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupImm.style.display = 'flex';
        document.body.classList.add('popup-active'); // Add blur effect
    });

    openPopupCaf.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupCaf.style.display = 'flex';
        document.body.classList.add('popup-active'); // Add blur effect
    });

    openPopupPatronato.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllPopups();
        popupPatronato.style.display = 'flex';
        document.body.classList.add('popup-active'); // Add blur effect
    });

    closePopupImm.addEventListener('click', function() {
        popupImm.style.display = 'none';
        document.body.classList.remove('popup-active'); // Remove blur effect
    });

    closePopupCaf.addEventListener('click', function() {
        popupCaf.style.display = 'none';
        document.body.classList.remove('popup-active'); // Remove blur effect
    });

    closePopupPatronato.addEventListener('click', function() {
        popupPatronato.style.display = 'none';
        document.body.classList.remove('popup-active'); // Remove blur effect
    });

    window.addEventListener('click', function(event) {
        if (event.target == popupImm) {
            popupImm.style.display = 'none';
            document.body.classList.remove('popup-active'); // Remove blur effect
        }
        if (event.target == popupCaf) {
            popupCaf.style.display = 'none';
            document.body.classList.remove('popup-active'); // Remove blur effect
        }
        if (event.target == popupPatronato) {
            popupPatronato.style.display = 'none';
            document.body.classList.remove('popup-active'); // Remove blur effect
        }
    });
});

function showRequirements(element, category, serviceName, requirements = []) {
    var requirementSection = document.getElementById('requirements' + category);
    var requirementTitle = document.createElement('h2');
    requirementTitle.textContent = serviceName;

    var requirementList = document.createElement('ul');

    if (requirements.length > 0) {
        requirements.forEach(function(requirement) {
            var listItem = document.createElement('li');
            listItem.textContent = requirement.text;

            if (requirement.sublist) {
                listItem.classList.add('has-sublist');
                var sublist = document.createElement('ul');
                requirement.sublist.forEach(function(subRequirement) {
                    var subListItem = document.createElement('li');
                    subListItem.textContent = subRequirement;
                    sublist.appendChild(subListItem);
                });
                listItem.appendChild(sublist);
            }

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

document.querySelectorAll('.popup ul li').forEach(li => {
    if (li.querySelector('ul')) {
        li.style.fontWeight = 'bold'; // Make the parent list item bold
    }
});

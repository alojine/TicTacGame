// Opens player configuration after Edit button
function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // '1' to 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

// Closes player configuration after Close button or backdrop click
function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = ''; // Reseting input
}

// Saving player name
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid playername!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();    // Manually calling to close
}



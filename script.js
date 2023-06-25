const playerContainer = document.getElementById("all-players-container")
const newPlayerFormContainer = document.getElementById("new-player-form")
// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-et-web-pt-a';
// Use the APIURL variable for fetch requests
const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a'

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

//fetch All Players
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const Players = await response.json();
        console.log(Players);
        return Players.data.players;
    } catch (err) {
        console.error(`Whoops, troble removing player #${player} from roster!`, err);
    }
};

//fetch single player
const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/PLAYER-ID`,);
        const SinglePlayer = await response.json();
        console.log(SinglePlayer);
        return SinglePlayer;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

//Add New Player
const addNewPlayer = async (players) => {
    try {
        const response = await fetch(`${APIURL}/players/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Daphne',
                    breed: 'German Shepherd'
                }),
            }
        );
        const NewPlayer = await response.json();
        return NewPlayer;
    } catch (err) {
        console.error(err)
    }
};

//Remove player
const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${players}/${playerId}`);
        const removePlayer = await response.json();
        console.log(removePlayer)
        return removePlayer;
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};
//Render All Players
const renderAllPlayers = async (playerList) => {
    console.log(playerList)
    playerContainer.innerHTML = '';
    playerList.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('card');
        playerCard.innerHTML = `
  <div class="card"
  <h2>${player.name}</h2>
  <h2>${player.breed}</h2>
  <h2>${player.status}</h2>
  <h2>${player.id}</h2>         
  <img width="300px" alt="150px" src="${player.imageUrl}">
  <button class="details-button" data-id="${player.id}">See Details</button>
  <button class="delete-button" data-id="${player.id}">Delete</button>
  <button class="remove from roster" data-id="${player.id}">Remove</div>`
playerContainer.appendChild(playerCard);
    });
    
    playerContainer.innerHTML = template.join('')
}
 
//Init Function
const init = async () => {
    const players = await fetchAllPlayers();
    console.log(players)
    renderAllPlayers(players);
    renderNewPlayerForm();
}
init()
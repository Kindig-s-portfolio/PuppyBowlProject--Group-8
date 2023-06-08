const playerContainer = document.getElementById('#all-players-container');
const newPlayerFormContainer = document.getElementById('#new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-et-web-pt-a';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const AllPlayers = await response.json();
        console.log(AllPlayers);
        return AllPlayers;
       } catch (err) {
        console.log(err);
    }
}; 
fetchAllPlayers();

const fetchSinglePlayer = async (player) => {
    try {
        const response = await fetch(`${APIURL}/${player}`);
        const SinglePlayer = await response.json();
        console.log(SinglePlayer);
        return player;
    
    } catch (err) {
        console.error(err);
    }
};
fetchSinglePlayer();

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}/${playerObj}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerObj)
        });
        const NewPlayer = await response.json();
        return NewPlayer;
    } catch (err) {
        console.error(err);
    }
};

const removePlayer = async (playerId) => {
    try {
      const response = await fetch (`${APIURL}/players/${playerId}` , {
        method: 'REMOVE',
      });
      const playerId = await response.json();
    
    } catch (err) {
      console.error(err);
    }
    };

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */


const renderAllPlayers = (playerList) => {
    const template = players.map(player =>`
    <div>
    <h2>Name: ${player.name}</h2>
    <p>Breed: ${player.breed}</p>
    <p>Status: ${player.status}</p>s
    <button type="submit">See Details</button>
    <button type="submit">Remove</button>
    </div>
     `)
playerList.innerHTML = template.join('');
}

  


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    console.log(players);
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();
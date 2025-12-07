async function fetchGameData() {
    try {
        const response = await fetch('./db.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        const units = data["clash goonroyall"] || []; 

        displayUnits(units);

    } catch (error) {
        console.error('Failed to fetch data:', error);
        document.getElementById('data-container').innerText = 'Failed to load data.';
    }
}

function displayUnits(units) {
    const container = document.getElementById('data-container');
    container.innerHTML = "";

    units.forEach(unit => {
        const card = document.createElement('div');
        card.className = "user-card";

        card.innerHTML = `
            <h2>${unit.name}</h2>
            <p><strong>Price:</strong> ${unit.price || unit.prise || 'N/A'}</p>
            <p><strong>Evolution:</strong> ${unit.evoution ? "true" : "false"}</p>
            <p><strong>Max Level:</strong> ${unit["maximum gold level"] || 'N/A'}</p>
        `;

        container.appendChild(card);
    });
}

fetchGameData();

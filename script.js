async function fetchGameData() {
    try {
        const response = await fetch('./db.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        
        const units = data["clash goonroyall"]; 
        
        displayUnits(units);

    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

function displayUnits(units) {
    const container = document.getElementById('data-container'); 
    
    
    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Evolution</th>
                    <th>Max Level</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    `;
    
    const tbody = document.getElementById('table-body');

    units.forEach(unit => {
        const row = document.createElement('tr');

        
        row.innerHTML = `
            <td>${unit.name}</td>
            <td>${unit.price || unit.prise}</td> <!-- Fallback for the 'prise' typo -->
            <td>${unit.evoution ? 'Yes' : 'No'}</td>
            <td>${unit["maximum gold level"]}</td>
        `;

        tbody.appendChild(row);
    });
}

fetchGameData();

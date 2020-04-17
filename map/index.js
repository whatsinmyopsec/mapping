const blessed = require('blessed');
const contrib = require('blessed-contrib');
const screen = blessed.screen();
const fs = require('fs');
const csv = require('csv-parser');
const map = contrib.map({label: 'World Map'});

screen.append(map);

const filepath = process.argv[2];

fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })
    .pipe(csv())
    .on('data', (row) => {
        // console.log(row.lat,row.lon);
        map.addMarker({'lat': row.lat, 'lon': row.lon, color: 'red', char: '*'});
    })
    .on('end', () => {
        screen.render();
        // handle end of CSV
    });


function tennisRanklist(input) {

    let index = 0;

    let tournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);
    

    let allPoints = 0;
    allPoints += startPoints;
    let winCounter = 0;

    for (let i = 0; i <= tournaments; i++) {
        let position = input[index++];
        switch (position) {
            case "W":
                allPoints += 2000;
                winCounter += 1;
                break;
            case "F":
                allPoints += 1200;
                break;
            case "SF":
                allPoints += 720;
                break;
        }
    }
    let avaragePoints = (allPoints - startPoints) / tournaments;
    let procentage = winCounter / tournaments * 100;

    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(`${procentage.toFixed(2)}%`);

}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])



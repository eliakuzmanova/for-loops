function oscars(input) {

    let index = 0;
    let name = input[index++];
    let points = Number(input[index++]);
    let jury = input[index++];

    let allPoints = 0;
    allPoints += points;
    let isHaveNominee = false;

    for (let i = 0; i < jury; i++) {
        let juryName = input[index++];
        let juryPoints = Number(input[index++]);

        allPoints += (juryName.length * juryPoints) / 2;
    

        if (allPoints >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${allPoints.toFixed(1)}!`)
            isHaveNominee = true
            break;
    
        }
    }
    let diff = Math.abs(allPoints - 1250.5);
    if (!isHaveNominee) {
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

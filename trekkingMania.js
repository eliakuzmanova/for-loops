function trekkingMania(input) {
    
    let index = 0;
    let groups = Number(input[index++]);
 

    let musalaCounter = 0;
    let molbanCounter = 0;
    let kilimandjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    let allPeople = 0;

    for (let i = 1; i <= groups; i++) {
       let num = Number(input[index++]);
        allPeople += num;
        
        if (num <= 5) {
            musalaCounter += num;
        } else if (num >= 6 && num <= 12) {
            molbanCounter += num;
        } else if (num >= 13 && num <= 25) {
            kilimandjaroCounter += num;
        } else if (num >= 26 && num <= 40) {
            k2Counter += num;
        } else if (num >= 41) {
            everestCounter += num;
        }
    }
    let procentageMusala = musalaCounter / allPeople * 100;
    let procentageMolban = molbanCounter / allPeople * 100;
    let procentageKilimandjaro = kilimandjaroCounter/allPeople * 100;
    let procentageK2 = k2Counter/allPeople * 100;
    let procentageEverest = everestCounter/allPeople * 100;

    console.log(`${procentageMusala.toFixed(2)}%`);
    console.log(`${procentageMolban.toFixed(2)}%`);
    console.log(`${procentageKilimandjaro.toFixed(2)}%`);
    console.log(`${procentageK2.toFixed(2)}%`);
    console.log(`${procentageEverest.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])


function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let price = Number(input[2]);

    let money = 0;
    let tempMoney = 10;
    let toys = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        } else {
            toys++;
        }
    }
    let total = price * toys + money;

    let diff = Math.abs(total - washingMachine);

    if (total >= washingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily
(["10",
"170.00",
"6"])


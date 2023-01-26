function histogram(input) {

    let num = Number(input[0]);

   

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for ( let i = 1; i <= num; i++) {
        let n = Number(input[i])

        if (n < 200) {
            p1Counter++;
        } else if (n >= 200 && n <= 399) {
            p2Counter++;
        } else if (n >= 400 && n <= 599) {
            p3Counter++;
        } else if (n >= 600 && n <= 799) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }
    let procentageP1 = p1Counter / num * 100;
    let procentageP2 = p2Counter / num * 100;
    let procentageP3 = p3Counter / num * 100;
    let procentageP4 = p4Counter / num * 100;
    let procentageP5 = p5Counter / num * 100;
    console.log(`${procentageP1.toFixed(2)}%`);
    console.log(`${procentageP2.toFixed(2)}%`);
    console.log(`${procentageP3.toFixed(2)}%`);
    console.log(`${procentageP4.toFixed(2)}%`);
    console.log(`${procentageP5.toFixed(2)}%`);

}
histogram(["3",
"1",
"2",
"999"])

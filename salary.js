function salary(input) {

    let index = 0;
    let tabs = Number(input[index++]);
    let income = Number(input[index++]);
    
    let isHaveSalary = true;

    for (let i = 0; i <= tabs; i++) {
        let currentTab = input[index++];

        switch (currentTab) {
            case "Facebook":
                income -= 150;
                break;
            case "Instagram":
                income -= 100;  
                break;
            case "Reddit":
                income -= 50;
                break;
            
        }
        if (income <= 0) {
            console.log(`You have lost your salary.`);
            isHaveSalary = false;
            break;
        }
    }
if (isHaveSalary) {
    console.log(income);
}
    
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])


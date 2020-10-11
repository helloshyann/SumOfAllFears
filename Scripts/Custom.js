//Button Event
document.getElementById("addForK").addEventListener('click', function () {
    let result = "";
    let inputK = document.getElementById('inputK').value;
    let val1 = Number(document.getElementById("input3").value);
    let val2 = Number(document.getElementById("input7").value);
    let val3 = Number(document.getElementById("input10").value);
    let val4 = Number(document.getElementById("input15").value);

    if (inputK == "" || val1 == "" || val2 == "" || val3 == "" || val4 == "") {
        document.getElementById("resultPlacement").innerHTML = 'You must input a number for all array options and the K variable.';
    }
    else {
        result = sumOfAllFears(inputK);
        document.getElementById('resultPlacement').innerHTML = `${result}`;
    }
})


function sumOfAllFears() {

    //Step 1: Get User Input & Establish Variables
    let valK = document.getElementById("inputK").value;

    let val1 = Number(document.getElementById("input3").value);
    let val2 = Number(document.getElementById("input7").value);
    let val3 = Number(document.getElementById("input10").value);
    let val4 = Number(document.getElementById("input15").value);

    let result = [];

    //Step 2: Do Something With Input
    for (let i = 1; i <= 1; i++) {

        if (valK == val1 + val2) {
            confetti.start(1000);
            result.push((val1) + " and " + (val2) + " from your array add up to equal your K variable, " + (valK));
        }
        else if (valK == val1 + val3) {
            confetti.start(1000);
            result.push((val1) + " and " + (val3) + " from your array add up to equal your K variable, " + (valK));
        }
        else if (valK == val1 + val4) {
            confetti.start(1000);
            result.push((val1) + " and " + (val4) + " from your array add up to equal your K variable, " + (valK));
        }
        else if (valK == val2 + val3) {
            confetti.start(1000);
            result.push((val2) + " and " + (val3) + " from your array add up to equal your K variable, " + (valK));
        }
        else if (valK == val2 + val4) {
            confetti.start(1000);
            result.push((val2) + " and " + (val4) + " from your array add up to equal your K variable, " + (valK));
        }
        else if (valK == val3 + val4) {
            confetti.start(1000);
            result.push((val3) + " and " + (val4) + " from your array add up to equal your K variable, " + (valK));
        }
        //If valK does not successfully compare
        else {
            result.push("Sorry, no two numbers of your array can add together to equal your K variable, " + (valK));
        }
    }
    //Step 3: Display Result to User
    return result;
}


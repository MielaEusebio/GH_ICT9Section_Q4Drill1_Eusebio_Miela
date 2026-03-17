function classify_consumption() {
    var num1 = Number(document.getElementById('input1').value);
    
    switch (true) {
        
        /* For the first if statement & others: https://github.com/copilot/share/486e128e-4824-8c57-8912-660e04976186
        Prompt: why wont it work when its a negative number (the last else if statement*/
        case (num1 <=-1):
            window.alert("Please input a positive number.");
            break;
        
        case (num1 == 0):
            window.alert("Invalid input. Please try again");
            break;

        case (num1 <=100):
            window.alert("Lifeline Consumer: Discounted electricity rates");
            break;

        case (num1 <= 200):
            window.alert("Low Consumption: Normal residential rate");
            break;
        
        case (num1 <= 300):
            window.alert("Average Consumption: Typical electricity usage");
            break;

        case (num1 <= 500):
            window.alert("High Consumption: Higher electricity usage");
            break;

        case (num1 > 500):
            window.alert("Very High Consumption: Heavy electricity rates");
            break;

        default:
            window.alert("Invalid input. Please try again");
            break;
        }
}

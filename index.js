const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")

function startGenerator() {
    firstInput.value = generatePassword()
    secondInput.value = generatePassword()
}

function generatePassword() {
    let password = ""
    for (ch = 0; ch < 15; ch++){
        charIndex = Math.floor( Math.random() * characters.length)
        password += characters[charIndex]
    }
    return password
}

function clearInput() {
    firstInput.value = ""
    secondInput.value = ""
}

clearInput() 

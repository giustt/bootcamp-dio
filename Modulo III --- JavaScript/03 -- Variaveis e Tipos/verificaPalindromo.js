
// Solução 1 --  1 Palavra
// function verificaPalindromo(string){
//     if(!string) return;
    

//     return string.split("").reverse().join("") === string;
// }
// console.log(verificaPalindromo("arara"));

// Solução 2 -- Mais de uma palavra

function verificaPalindromo2(string){
    if(!string) return;

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
        return false;
        }
    }

    return true;
}
console.log(verificaPalindromo2("giusttsuig"));
console.log("TypeScript")


// Interface       --> Usa para definir contratos de estrutura de dados e classes
// Tipos           --> Usa para fazer juncoes e moldes das interfaces
// "?"             --> Define a variavel como opicional
// "-?"            --> Define a variavel como obrigatoria

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});



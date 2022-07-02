//Se quer seguir para área de Front-End ou seguir para a área de Back-End.
//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
//3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
//4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const area = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?");
let linguagem = "";
let especializacao = "";

if (area === "Front-End"){
    linguagem = prompt("Você que aprender React ou Vue?");
        if (area === "React"){especializacao = prompt( "Boa escolha")
        };
       
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}

else {
     alert ("Você não inserio escolha correta!");
    }


const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando ou 2 para de desenvolver em em outras áreas e se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de aprender outras linguagens além de ${linguagem} se você quiser se tornar Fullstack.`);
}
 else {
    alert ("Você não digitou o numero certo")
 };

 let msg = prompt("Tem mais alguma tecnologia que gostaria de aprender? Digite 'sim' em caso positivo");
 while (msg === "sim"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite `sim` em caso positivo,");
 };
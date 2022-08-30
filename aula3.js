/* function somarValores(n1,n2) {

    let total = 0;
    total = n1 + n2
    return total
    

}

/* const resultado = somarValores(10,20);

alert(resultado) */

/*

 */ 

/* function dividirValores(n1, n2){
    if (typeof n1 == 'string') {

    } else {
        alert('Parametro Invalido')
    }
    
    return n1/n2;

}

dividirValores (20,10) */

/* let subtrairValores = () => {
    return n1/n2;

} */

/* 1- Crie uma função que receba dois números como parâmetro,
 retorne a soma dos valores, em seguida 
 execute a função mostrando na tela o seguinte
  texto: 'A soma dos valores é ${(resultado)}'. */


/* function somarValores(n1,n2){
    if (typeof n1 == "number") {
    return n1 + n2
    } else {
        alert('Parametro Invalido')
    }
}

alert(`a soma dos valores é: ${somarValores(10,20)}`) */

/* 2- Crie uma função que receba um array de números (crie uma segunda função para validar os dados 
    dentro do array) e depois calcule a soma de 
     todos os valores dentro do array. Execute
      a função mostrando na tela o 
      seguinte texto: 'A soma dos valores do 
      array é ${(resultado)}'. */


/*       const array = [10, 20, 3, 4];
      let soma = 0;
      
      for (let i = 0; i < array.length; i++) {
          soma += array[i];
      }

alert(`A soma array é: ${soma}`)
 */
    


/* 3 - Crie uma função que receba duas strings como
 parâmetro, primeiro nome e segundo nome, 
em seguida retorne o nome completo 
do indivíduo. */
/* 
function nomeCompleto () {
n = 'Joao'
sb = 'Monteiro'
return n,sb

}

alert(`o nome completo é:${nomeCompleto}`) */

/* 


/* 4- Crie uma função que receba um string como
 parâmetro  e execute um "windows.prompt" com o 
 texto recebido como parâmetro, e em 
seguida retorne o valor que o usuário digitou. */

/* function recebaString (){
    let texto = window.prompt `Digite o texto`
    if (texto == 'string') {
        return texto
    }
}
recebaString() */

/* 5- Crie uma função que receba um array de 
números (Valide os dados dentro do array, 
    reaproveite a função criada no exercício 
    1) e depois calcule a média de todos os 
    valores dentro do array. Execute a função
     mostrando na tela o seguinte texto: 
'A média dos valores do array é ${(resultado)}'. */



function recebeNotas () {
    const notas = [10,5,7,8,9]
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
        
    }

}

alert(soma)
const calcular = document.getElementById('calcular');

function media(){
    const nome = document.getElementById('nome').value;
    var  g1= document.getElementById('g1').value;
    var  g2= document.getElementById('g2').value;
    const resultado= document.getElementById('resultado');

    if (nome !== '' && g1 !== '' && g2 !== ''){
        const result =  g1 +  g2;
        let classificacao = '';
        if(result < 6 ){
            classificacao = 'reprovado';
        }
        if(result>= 6 ){
            classificacao = 'aprovado';
        }

        resultado.textContent = ` ${nome} Sua media é ${result} e você está ${classificacao}`;
    }else{
        console.log("preencha todos os campos!");
    }
}

calcular.addEventListener('click', media);
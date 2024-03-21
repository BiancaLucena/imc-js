    //calculando o imc
    //let -> não permite que a variável seja 'redeclarada'

    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const btnCalcular = document.querySelector('#btn-calcular');
    const btnRefazer = document.querySelector('#btn-refazer');
    const contentIMC = document.querySelector('.content-imc');
    const resultIMC = document.querySelector('.result-imc');

    const infoResult = document.querySelector('.result-imc h2 span'); //IMC
    const infoClass = document.querySelector('.result-imc p span'); // Classificação

    function colorIMC(cor){
        infoClass.style.color = cor;
        infoResult.style.color = cor;
    }

    //ao clicar no botão de calcular
    btnCalcular.addEventListener('click', function(){

        if(peso.value != '' && altura.value !=''){
        
            //alternando a classe show
            contentIMC.classList.toggle('show');
            resultIMC.classList.toggle('show');

            let valorPeso = parseFloat(peso.value);
            let valorAltura = parseFloat(altura.value);

            let imc = valorPeso / (valorAltura*valorAltura);
            //alert(imc);

            


            infoResult.innerHTML = imc.toFixed(2);

            //>= maior ou igual
            //<= menor ou igual
            //&& e
            //|| ou

            if(imc < 18.5){
                infoClass.innerHTML = 'Magreza';
                colorIMC('red');
                
            }

            else if(imc >= 18.5 && imc <= 24.9){
                infoClass.innerHTML = 'Normal';
                colorIMC('green');
            }

            else if(imc >= 25.0 && imc <= 29.9){
                infoClass.innerHTML = 'Sobrepeso';
                colorIMC('orange');

            }

            else if(imc >= 30.0 && imc <= 39.9){
                infoClass.innerHTML = 'Obesidade';
                colorIMC('red');
            }

            //pode ser else if(imc  >= 40.0){  mas não precisa
            else{
                infoClass.innerHTML = 'Obesidade Grave';
                colorIMC('#B10303');
            }


        }

        else{
            alert('preencha os campos');
        }


    })

    //ao clicar no botão refazer
    btnRefazer.addEventListener('click', function(){
        // alert('ok')
        contentIMC.classList.toggle('show');
        resultIMC.classList.toggle('show');

        //limpando os campos
        peso.value = '';
        altura.value = '';
        //document.querySelector('form').reset();
    })









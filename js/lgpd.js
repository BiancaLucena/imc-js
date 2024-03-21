
// ''''''''''''''''LGPD''''''''''''''''''''''
//selecionando os elementos que serão manipulados pelo js
let lgpd = document.querySelector('.lgpd');
let btnLgpd = document.querySelector('.lgpd button');


// console.log(lgpd);
// console.log(btnLgpd);

//associando o evento de click ao botão da lgpd
btnLgpd.addEventListener('click',function(){
    //alert('ok');

    lgpd.style.display = 'none';

    //além de fechar vamos guardar uma informação no navegador do usuário
                          //chave, valor
    localStorage.setItem('fechouLgpd', 'sim');
    //inspecionar, aplicativo, armazenamento local, file

})

//se o usuário fechou a lgpd (tem a informação guardada no storage)
//se a informação guardada no storage é igual (==) a 'sim'
if(localStorage.getItem('fechouLgpd') == 'sim'){
    lgpd.style.display = 'none';
}
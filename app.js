function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
}

exibirTexto('.principal', '')
document.querySelector('.copiar').style.display='none';

function criptografar(){
    let texxto = document.querySelector('textarea').value;
    if(texxto.length !== 0 ){
        let resultado = texxto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
        exibirTexto ('.principal', resultado)
        document.querySelector('.container__imagem').style.display = 'none';
        document.querySelector('.sub__titulo').style.display = 'none';
        document.querySelector('.copiar').style.display='block';
    }else{
        document.querySelector('.container__imagem').style.display = 'block';
        exibirTexto('.principal', 'Nenhuma mensagem encontrada')
        document.querySelector('.sub__titulo').style.display = 'block';
        document.querySelector('.copiar').style.display='none';
    }
}
function descriptografar(){
    let texxto = document.querySelector('textarea').value;

    if(texxto.length !== 0 ){
        let resultado = texxto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g,'o').replace(/ufat/g,'u');
        exibirTexto ('.principal', resultado)
        document.querySelector('.container__imagem').style.display = 'none';
        document.querySelector('.sub__titulo').style.display = 'none';
        document.querySelector('.copiar').style.display='block';
    }else{
        document.querySelector('.container__imagem').style.display = 'block';
        exibirTexto('.principal', 'Nenhuma mensagem encontrada')
        document.querySelector('.sub__titulo').style.display = 'block';
        document.querySelector('.copiar').style.display='none';
    }
}
    async function copiar(){
        document.querySelector('.copiar').addEventListener('click', copiar);
        let tela=document.querySelector('.principal').innerText;
        await navigator.clipboard.writeText(tela);
        document.querySelector('.sub__titulo').style.display = 'block';
        exibirTexto('.sub__titulo', 'Texto copiado!') 
    }

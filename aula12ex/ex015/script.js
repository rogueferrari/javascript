function verificar () {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = window.document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if (fano.value.length == 0 || Number(fano.value) > ano) {
         window.alert('[ERRO] Verifique os dados')
     } else {
         var fsex =document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','pexels-bebe-m..jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','pexels-jovem-m..jpg')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src','pexels-adulto-m..jpg')
           } else {
               //Idoso
               img.setAttribute('src','pexels-idoso-m..jpg')
           }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','pexels-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','pexels-jovem-f..jpg')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src','pexels-adulto-f..jpg')
           } else {
               //Idoso
               img.setAttribute('src','pexels-idoso-f..jpg')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
     }
}
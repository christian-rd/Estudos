function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes() 
    // msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12 ){
        msg.innerHTML = ` Olá, agora são ${hora}:${minutos}. <br> Bom dia.`
        img.src = 'manha.png'
        document.body.style.background = 'rgba(255, 215, 84, 0.89)'
    } else if (hora >= 12 && hora < 18 ) {
        msg.innerHTML = `Olá , agora são ${hora}:${minutos}. <br> Boa tarde.`
        img.src = 'tarde.png'
        document.body.style.background = 'rgba(243, 126, 30, 0.89)'
    } else {
        msg.innerHTML = `Olá, agora são ${hora}:${minutos}. <br> Boa noite.`
        img.src = 'noite.png'
        document.body.style.background = 'rgba(58, 58, 57, 0.89)'
    }
   
}

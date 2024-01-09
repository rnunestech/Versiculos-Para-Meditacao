function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let msg2 = window.document.getElementById('msg2')
    let data = new Date()
    let hora = data.getHours()
    
    dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
    monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro")
    msg.innerHTML = `<p><b>Hoje é ${dayName[data.getDay()]}, dia ${data.getDate()} de ${monName[data.getMonth()]} de ${data.getFullYear()}</b></p>`
   
    if (hora >= 6 && hora < 12){
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        if (hora == 6 && hora < 7){
        msg2.innerHTML += `<i>Acorde, minha alma! Acordem, harpa e lira!<br> Vou despertar a alvorada!
         <b>Salmos 57:8</b></i>`
        } else if (hora == 7 && hora < 8){
            msg2.innerHTML += `<i>Senhor, tem misericórdia de nós; pois em ti esperamos! 
            Sê tu <br>a nossa força cada manhã, nossa salvação na hora do perigo. <b>Isaías 33:2</b></i>`
        } else if (hora == 8 && hora < 9){
            msg2.innerHTML += `<i>Satisfaze-nos pela manhã com o teu amor leal,<br>
            e todos os nossos dias cantaremos felizes. <b>Salmos 90:14</b></i>`
        } else if (hora == 9 && hora < 10){
            msg2.innerHTML += `<i>Quanto a mim, feita a justiça, verei a tua face; quando despertar,
            <br> ficarei satisfeito ao ver a tua semelhança. <b>Salmos 17:15<b></i>`
        } else if (hora == 10 && hora < 11){
            msg2.innerHTML += `<i> Mas eu, Senhor, a ti clamo por socorro; já de manhã a minha <br>
            oração chega à tua presença. <b>Salmos 88:13</b></i>`
        }else if (hora == 11 && hora < 12){
            msg2.innerHTML += `<i>Ele morreu por nós para que, quer estejamos acordados quer dormindo,<br>
            vivamos unidos a ele. <b>1 Tessalonicenses 5:10 </b></i>`
        }
    
    } else if (hora >= 12 && hora  < 18) {
        img.src = './imagens/tarde.jpg'
        window.document.body.style.background = '#b9846f'
         if (hora == 12 && hora < 13){
        msg2.innerHTML += `<i>Apeguemo-nos com firmeza à esperança que professamos,<br> 
        pois, aquele que prometeu é fiel. <b>Hebreus 10:23</b></i>`
        } else if (hora == 13 && hora < 14){
            msg2.innerHTML += `<i>Não deixe de falar as palavras deste Livro da Lei e de meditar
            <br>nelas de dia e de noite, para que você cumpra fielmente tudo o<br>
            que nele está escrito. Só então os seus caminhos pros­perarão e
            <br>você será bem-sucedido. <b>Josué 1:8</b></i>`
        } else if (hora == 14 && hora < 15){
            msg2.innerHTML += `<i>Como é feliz aquele que não segue o conselho dos ímpios, não
            <br>imita a conduta dos pecadores, nem se assenta na roda dos
            <br>zombadores! Ao contrário, sua satisfação está na lei do Senhor,
            <br>e nessa lei medita dia e noite.
            <b>Salmos 1:1-2</b></i>`
        } else if (hora == 15 && hora < 16){
            msg2.innerHTML += `<i>Recordarei os feitos do Senhor; recordarei os teus antigos
            <br>milagres. Meditarei em todas as tuas obras e considerarei todos
            <br>os teus feitos. <b>Salmos 77:11-12</br></i>`
        } else if (hora == 16 && hora < 17){
            msg2.innerHTML += `<i>Meditarei nos teus preceitos e darei atenção às tuas veredas.
            <br>Tenho prazer nos teus decretos; não me esqueço da tua palavra.
            <br><b>Salmos 119:15-16</b></i>`
        }else if (hora == 17 && hora < 18){
            msg2.innerHTML += `<i>A minha boca falará com sabedoria; a meditação do meu coração
            <br>trará entendimento. <b>Salmos 49:3</b></i>`
        }
    } else if (hora >= 18 && hora < 24){
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#515154'
        } if (hora == 18 && hora < 19){
        msg2.innerHTML += `<i>No teu templo, ó Deus, meditamos em teu amor leal.
        <br><b>Salmos 48:9</b></i>`
        } else if (hora == 19 && hora < 20){
            msg2.innerHTML += `<i>Não fui eu que ordenei a você? Seja forte e corajoso! Não se
            <br>apavore nem desanime, pois o Senhor, o seu Deus, estará com
            <br>você por onde você andar". <b>Josué 1:9</b></i>`
        } else if (hora == 20 && hora < 21){
            msg2.innerHTML += `<i>"Eu disse essas coisas para que em mim vocês tenham paz.
            <br>Neste mundo vocês terão aflições; contudo, tenham ânimo!
            <br>Eu venci o mundo". <b>João 16:33 </b></i>`
        } else if (hora == 21 && hora < 22){
            msg2.innerHTML += `<i>Porque sou eu que conheço os planos que tenho para vocês',
            <br>diz o Senhor, 'planos de fazê-los prosperar e não de causar 
            <br>dano, planos de dar a vocês esperança e um futuro.
            <br><b>Jeremias 29:11</b></i>`
        } else if (hora == 22 && hora < 23){
            msg2.innerHTML += `<i>Consagre ao Senhor tudo o que você faz, e os seus planos
            <br>serão bem-sucedidos. <b>Provérbios 16:3</b></i>`
        } else if (hora == 23 && hora < 24){
            msg2.innerHTML += `<i>Respondeu Jesus: "Eu sou o caminho, a verdade e a vida.
            <br>Ninguém vem ao Pai, a não ser por mim. <b>João 14:6</b></i>`
    
        } else if (hora >= 0 && hora < 6){
        img.src = './imagens/madrugada.jpg'
        document.body.style.background = "#000120"
        } if (hora == 0 && hora < 1){
        msg2.innerHTML += `<i>Fico acordado nas vigílias da noite, para meditar
        <br> nas tuas promessas. <b>Salmos 119:148</b></i>`
        } else if (hora == 1 && hora < 2){
            msg2.innerHTML += `<i>Venham a mim, todos os que estão cansados e sobrecarregados,
            <br>e eu darei descanso a vocês. <b>Mateus 11:28</b></i>`
        } else if (hora == 2 && hora < 3){
            msg2.innerHTML += `<i>Busquem, pois, em primeiro lugar o Reino de Deus e a sua
            <br>justiça, e todas essas coisas serão acrescentadas a vocês.
            <br><b>Mateus 6:33</b></i>`
        } else if (hora == 3 && hora < 4){
            msg2.innerHTML += `<i>Deem graças em todas as circunstâncias, pois esta é a vontade
            <br>de Deus para vocês em Cristo Jesus. <b>1 Tessalonicenses 5:18</b></i>`
        } else if (hora == 4 && hora < 5){
            msg2.innerHTML += `<i>Entregue o seu caminho ao Senhor; confie nele, e ele agirá.
            <br><b>Salmos 37:5</b></i>`
        } else if (hora == 5 && hora < 6){
            msg2.innerHTML += `<i>Lancem sobre ele toda a sua ansiedade, porque ele tem
            <br>cuidado de vocês. <b>1 Pedro 5:7</b></i>`
        } else if(hora > 24){
        window.alert('ERRO - Hora Invalida!')
        }
}
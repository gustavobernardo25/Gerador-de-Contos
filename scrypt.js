

backImages = []

document.getElementById('btn').addEventListener('click', () => {

    var nome = document.getElementById('nome-char').value
    var raca = document.getElementById('raca').value
    var local = document.getElementById('local').value
    var inst = document.getElementById('instrumento').value
    var tema = document.getElementById('tema').value
    var motivacao = document.getElementById('motivacao').value

    var strRaca
    var strLocal
    var strInst
    var strTema
    var strMotivacao

    switch (raca) {
        case 'Humano':
            var strRaca = 'um Humano'
            break

        case 'Elfo':
            var strRaca = 'um Elfo'
            break

        case 'Anão':
            var strRaca = 'um Anão'
            break

        case 'Hobbit':
            var strRaca = 'um Hobbit'
            break

        default:
            var strRaca = 'algo indefinido'


    }

    switch (local) {
        case 'Taverna':
            var strLocal = 'uma taverna, beber como sempre, até cair como nunca'
            break

        case 'Floresta':
            var strLocal = ' uma floresta, se perdeu após ir fazer suas necessidades'
            break

        case 'Masmorra':
            var strLocal = ' uma masmorra, provavelmente queria morrer de uma forma "legal"'
            break

        case 'Vilarejo Deserto':
            var strLocal = 'um vilarejo deserto, fez uma viagem de 45 dias para quando chegar lá não ter mais nada, trágico'
            break

        default:
            var strLocal = 'um lugar indefinido, um lugar tão único que é impossível descrever com palavras'

    }
    switch (inst) {
        case 'Espada':
            var strInst = `utilizando uma espada, ${nome} desfere inúmeros golpes, ${nome} sai vitorioso, escreve um livro sobre o ocorrido, mas o livro não vende bem, ${nome} vai a falência`
            break

        case 'Arco e Flechas':
            var strInst = `utilizando um arco e flecha, dispara com uma velocidade impressionante, mas velocidade não é tudo, ${nome} acaba errando todas as flechas e é morto.`
            break

        case 'Alaúde':
            var strInst = `utilizando seu alaúde, você toca músicas como um verdadeiro bardo, apaziguando toda a situação, ${nome} monta uma banda com aqueles que queriam prejudicá-lo, tornam-se a maior banda do reino, mas ${nome} acaba falecendo por utilizar cogumélos em excesso.`
            break

        case 'Grimório de Magias':
            var strInst = `ultilizando seu grimório de magias ${nome} conjura magias de tirar o chapéu, ${nome} sai vitorioso, mas é preso, magia é proibido no reino, ${nome} passa o resto da vida em um calabouço.`
            break

        default:
            var strInst = `com as mãos núas, ${nome} junta toda a sua força de vontade, pensa em tudo o que passou até chegar ali. ${nome} vai em direção ao inimigo e acaba sendo morto no ato.  `
    }
    switch (tema) {
        case 'Goblins':
            var strTema = 'Um bando de goblins sorrateiros'
            var hTema = 'os Goblins'
            backImages.push('http://images4.fanpop.com/image/photos/20600000/Cool-Goblins-goblins-20650336-600-439.jpg')
            backImages.push('https://qph.fs.quoracdn.net/main-qimg-785a8a055f06f0a34c697765c48c1ce3')
            backImages.push('https://3.bp.blogspot.com/-XY26wa3FVqM/XG9SW9x07rI/AAAAAAAAvyA/oXYHc7EZcVk6PsM9vnhlR2v5amt4EJesgCLcBGAs/s1600/Monstros%2Bde%2BGoblin%2BSlayer%2Be%2Btudo%2Bsobre%2Bgoblins.jpeg')
            backImages.push('https://imgix.kotaku.com.au/content/uploads/sites/3/2018/01/23/qqajnlrmizryztfbc4y0.png?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nrs=30')
            break

        case 'Orcs':
            var strTema = 'Uma tribo de guerreiros Orcs'
            var hTema = 'os Orcs'
            backImages.push('https://i0.wp.com/guildadosmestres.com.br/wp-content/uploads/2019/03/thumborc2.jpg?fit=945%2C535')
            backImages.push('https://i.pinimg.com/originals/0c/76/fe/0c76fe5a08b8e3c1c26a54ca82c53206.jpg')
            backImages.push('https://pm1.narvii.com/6295/a25c3bd3adf1bc15ee36c8f99f8d9b51daf0796c_hq.jpg')
            backImages.push('https://pm1.narvii.com/6295/480b8643575b1975dd6b22b7530a09f7c8cbb7c1_hq.jpg')
            break

        case 'Dragões':
            var strTema = 'Dois poderosos Dragões Gêmeos'
            var hTema = 'os Dragões'
            backImages.push('https://exame.com/wp-content/uploads/2019/10/dragoes.gif')
            backImages.push('https://d1oxuuwezf1xh6.cloudfront.net/assets/editorial/2019/05/alexstrasza-art-warcraft-e-heroes-of-the-storm.jpg')
            backImages.push('https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2020/03/ToD_Greenest_em_Chamas.jpg?fit=1188%2C736&ssl=1')
            backImages.push('https://i.pinimg.com/originals/52/45/ae/5245aec95a31d66aeb6bd041b09ed42e.jpg')
            break

        case 'Bandidos':
            var strTema = 'Um grupo de bandidos'
            var hTema = 'os Bandidos'
            backImages.push('https://i.pinimg.com/originals/ff/33/da/ff33dabed75c96fb23c4497227768483.jpg')
            backImages.push('https://1.bp.blogspot.com/-p-8F8sn_2C8/XRJ1xydJ2eI/AAAAAAAAC0Y/gFn0KtlUXEUpzu280EQJsWu5emDl-g7lwCLcBGAs/s1600/tavern-fight.jpg')
            backImages.push('https://i2.wp.com/www.mundoscolidem.com.br/wp-content/uploads/2017/06/Thieves-Guild-I-menor.jpg?resize=740%2C360&ssl=1')
            backImages.push('https://diadrpg.files.wordpress.com/2019/04/kenku-emboscada.jpg')
            break

        default:
            var strTema = `uma borboleta que passa por ${nome} ... ${nome} ja teve dias mais interessantes, mas a borboleta `
            var hTema = ''
    }
    switch (motivacao) {
        case 'Riqueza':
            var strMotivacao = `${hTema} queriam todo os seus bens`
            break

        case 'Poder':
            var strMotivacao = `estava em busca de poder, e ${nome} estavam no caminho`
            break

        case 'Vingança':
            var strMotivacao = `estavam em busca de vingança por algo que ${nome} fez`
            break

        case 'Um bem maior':
            var strMotivacao = `acreditavam que, destruindo ${nome}, fariam do mundo um lugar muito melhor`
            break

        default:
            var strMotivacao = 'sem motivação alguma, apenas queria tacar o terror '
    }

    var data = new Date()
    var ano = data.getFullYear()

const stringFinal = `Era uma vez em um reino fantástico chamado Acre, o ano era ${ano}.Quando ${strRaca} chamado ${nome} resolveu ir para ${strLocal},
mas ${nome} foi surpreendido por ${strTema} que ${strMotivacao}, mas ${strInst} E todos viveram felizes para sempre.`
/*
const p = document.getElementById('conto').append(stringFinal)
*/

 setInterval(
 function changeBG(){
     var fundo = document.getElementById('main')
     var randomBack = Math.floor(Math.random() * backImages.length);
   if(randomBack == 0){
         randomBack = 1;
     }
   fundo.style.backgroundImage = `url('${backImages[randomBack]}')`;
 },3000)

 var i = 0
 var txt = stringFinal
 var speed = 50

 function typeWriter(){
     if(i < txt.length){
         document.getElementById('contoP').innerHTML += txt.charAt(i)
         i++
         setTimeout(typeWriter,speed)
     }
 }
 typeWriter()
})
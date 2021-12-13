//Quiz!
let tagP = document.getElementsByTagName('p')[0]
    let quiz = document.getElementsByName('pergunta')
    const botao = document.getElementById('botao')
    botao.addEventListener('click', Executar)
    const botao2 = document.getElementById('botao2')
    botao2.addEventListener('click', TentarNovamente)
        
function Executar(){
        if(quiz[0].checked){
            tagP.style.color = 'white'
            tagP.style.background = 'green'
            tagP.innerHTML = 'Parabéns! resposta correta'

            document.getElementById('per1').disabled = true
            document.getElementById('per2').disabled = true
            document.getElementById('per3').disabled = true
            return true

        }
    

        if (quiz[1].checked){
           
            tagP.style.color = 'white'
            tagP.style.background = 'red'
            
            tagP.innerHTML = 'Resposta incorreta'
            document.getElementById('per').disabled = true
            document.getElementById('per2').disabled = true
            document.getElementById('per3').disabled = true
            return true
           
        }

        if(quiz[2].checked){
            tagP.style.color ='white'
            tagP.style.background = 'red'

            tagP.innerHTML = 'Resposta incorreta'
            document.getElementById('per1').disabled = true
            document.getElementById('per').disabled = true
            document.getElementById('per3').disabled = true
            return true
        }

        if (quiz[3].checked){
            tagP.style.color ='white'
            tagP.style.background ='red'
            tagP.innerHTML = 'Resposta incorreta'
            document.getElementById('per1').disabled = true
            document.getElementById('per').disabled = true
            document.getElementById('per2').disabled = true
            return true
        }
    }


    function TentarNovamente(){
        location.reload()
    }
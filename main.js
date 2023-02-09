function criaCalculadora()
{
  return
  {
    display: document.querySelector('#result span'),

    inicia()
    {
      this.cliqueBotoes()
    }

    cliqueBotoes()
    {
      // this -> calculadora
      document.addEventListener('click', function(e)
      {
       const el = e.target
       
       if(el.classList.contains('btn-num'))
       {
        this.btnParaDisplay()
       }
      })
    }

    btnParaDisplay()
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
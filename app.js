

let emailList = []
listaEmail = document.createElement ('ul')

const btn = document.getElementById ('button')
console.log (btn)
btn.addEventListener ('click', function() {
  emailList.length = 0;
  generaEmailRandom (10)
  
})



function generaEmailRandom (num) {
   listaEmail.textContent = ''
  for (i = 0; i < num; i++) {
    
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
      
        const email = res.data.response
        emailList.push(email)
        console.log(emailList)
        const lista = document.createElement ('li')  
        lista.textContent = email
        document.body.appendChild (listaEmail)
        listaEmail.appendChild (lista)
      })
      
  
  
      .catch((err) => {
        console.log('Qualcosa è andato storto', err)
  
      })
  }
  
}






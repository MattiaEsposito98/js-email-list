

let emailList = []
let listaEmail = document.createElement ('ul')
document.body.appendChild (listaEmail)

function generaEmailRandom (num) {
   
  for (i = 0; i < num; i++) {
    
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
      
        const email = res.data.response
        emailList.push(email)
        console.log(emailList)
        const lista = document.createElement ('li')  
        lista.textContent = email
        listaEmail.appendChild (lista)
      })
      
  
  
      .catch((err) => {
        console.log('Qualcosa è andato storto', err)
      })
  } 
}


const btn = document.getElementById ('button')
console.log (btn)
btn.addEventListener ('click', function() {
  listaEmail.textContent = ''
  emailList.length = 0;
  generaEmailRandom (10) 
})





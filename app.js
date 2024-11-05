

let emailList = []

for (i = 0; i < 10; i++) {
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {

      const email = res.data.response
      emailList.push(email)
      console.log(emailList)
    })
  

    .catch((err) => {
      console.log('Qualcosa è andato storto', err)

    })
}



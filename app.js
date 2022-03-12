
const fetch = require("node-fetch");
const body = {
    name: "sergio",
    job: "leader",
    userId: 1
  }

//get
    fetch("https://reqres.in/api/users/1")
    .then((respuesta) =>{
        return respuesta.json()
    }).then((resp)=>{
        console.log(resp);
    }) 

//post
fetch("https://reqres.in/api/users/", {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" }
  
})
   
//put
fetch("https://reqres.in/api/users/1", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }) 

//delete
fetch("https://reqres.in/api/users/1", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)  
  })  
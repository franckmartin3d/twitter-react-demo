// get cards non async
// getCards = () =>{
//   // refactor fetch
//   fetch('/api/list')
  
//   //get the response and set its structure
//   .then(response=>{
//     console.log(response);
//     return response.json();
//   })
//   //use the data in structure
//   .then(json =>{
//     console.log(json);
//     this.setState({cards:json})
//   })
//   //handle errors
//   .catch(error =>{
//     console.error(error);
//   });
// }
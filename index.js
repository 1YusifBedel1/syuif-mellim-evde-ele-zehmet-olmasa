// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>{
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i])
//         let cardArea=document.querySelector('.cardArea')
//         cardArea.innerHTML+=
//         `
//         <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">${data[i].name}</h5>
//             <p class="card-text">${data[i].username}</p>
//           </div>
//         </div>
//         `
//     }
// })
// function searchPost(e) {
//     e.preventDefault()
//     const searchTerm=document.getElementById('search').value.toLowerCase()
//     const cards=document.querySelectorAll('.card')
//     for (let i = 0; i < cards.length; i++) {
//         const title=cards[i].querySelector(".card-title").textContent.toLowerCase()
//         if(title.includes(searchTerm)){
//             cards[i].style.display="block"
//         }
//         else{
//             cards[i].style.display="none"
//         }
//     }
    
// }

// document.getElementById("searchBtn").addEventListener("click",searchPost)
fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
  renderUI(data)
  const az=document.getElementById('az')
  const za=document.getElementById('za')
  const card=document.querySelector('.card')
  az.addEventListener('click',(e)=>{
    e.preventDefault()
    let salam=data.sort((a,b)=>{return a.price - b.price})
    renderUI(salam)
    })
  za.addEventListener('click',(e)=>{
    e.preventDefault()
    let sagol=data.sort((a,b)=>{return b.price - a.price})
    renderUI(sagol)
  })

 
})
function renderUI(list) {
  let cardArea=document.querySelector('.cardArea')
  let innerHTML=""
  for (let i = 0; i < list.length; i++) {


    innerHTML+=
    `
    <div class="card" style="width: 18rem; ">
      <div class="card-body">
        <img style="width:200px" src="${list[i].image}">
        <h5 class="card-title">${list[i].title}</h5>
        <p class="card-text">${list[i].description}</p>
        <p class="card-text">${list[i].price}$</p>
      </div>
    </div>
    `
}
cardArea.innerHTML=innerHTML

}

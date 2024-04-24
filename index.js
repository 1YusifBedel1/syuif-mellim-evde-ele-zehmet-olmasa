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
    for (let i = 0; i < data.length; i++) {

        let cardArea=document.querySelector('.cardArea')
        cardArea.innerHTML+=
        `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <img style="width:200px" src="${data[i].image}">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].description}</p>
          </div>
        </div>
        `
    }
})
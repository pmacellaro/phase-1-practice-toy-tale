let addToy = false;
fetch('http://localhost:3000/toys')
    .then((resp) => resp.json())
    .then(toyData => {
      toyData.forEach(toyName => toyAdd(toyName))
    })
    
function toyAdd(toyData){
      
      let toyDiv= document.createElement('div');
      toyDiv.classList.add("card");

      let imgSelect= document.createElement('img');
      imgSelect.classList.add("toy-avatar")
      toyDiv.append(imgSelect)
      imgSelect.src = toyData.image

      let toyH2= document.createElement('h2')
      toyH2.textContent = toyData.name
      toyDiv.appendChild(toyH2)

      let ptoy= document.createElement('p')
      ptoy.textContent= `${toyData.likes} likes`
      toyDiv.appendChild(ptoy)

      let toyButton= document.createElement('button')
      toyButton.classList.add("like-btn")
      toyButton.setAttribute("id", toyData.id)
      toyButton.addEventListener('click', () => {
          addLikes(toyData, ptoy);
        })
      toyButton.textContent = "like This Toy!"
      toyDiv.appendChild(toyButton)
     let bigDiv= document.getElementById("toy-collection");
     bigDiv.appendChild(toyDiv);

  }
function addLikes(toy,ptoy) {
    console.log(ptoy)
    toy.likes = toy.likes + 1
    ptoy.textContent = `${toy.likes} likes`
  }
  
  
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
 
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const form = document.getElementById("toyForm")
form.addEventListener('submit', (event) => {
 event.preventDefault()
 //remember to get the event target by checking the inspect element
 const name = event.target.name.value
 const image = event.target.image.value
const newertoy= {
  name: name,
  image: image,
  likes: 0,}
  toyAdd(newertoy);
});
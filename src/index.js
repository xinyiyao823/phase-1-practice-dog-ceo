console.log('%c HI', 'color: firebrick')

// fetch data from URL
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

fetch(imgUrl)
.then(function(resp) {
    return resp.json() //converts data to json
})
.then(function(dogData) { //make sure dogData is an array before iterating through it
    dogData.message.forEach(renderDogs) //access message key to get array of dog image links
})

//Deliverable 1
function renderDogs(dog) {
    const image = document.createElement('img') //create image elements
    image.src = dog; // set source attribute of image to links in array
    const container = document.getElementById('dog-image-container')
    container.append(image) 
}

// Deliverable 2
fetch(breedUrl)
.then(function(resp) {
    return resp.json()
})
.then(function (breedData) {
    Object.keys(breedData.message).forEach(renderBreeds)
    breeds = Object.keys(breedData.message)
})



 function renderBreeds(breed) {
    const list = document.createElement('li')
    list.innerHTML = breed
    //console.log(breed)
    const breedList = document.getElementById('dog-breeds')
    breedList.append(list)
    // Deliverable 3
    list.addEventListener('click', function() {
        if (list.style.color === 'pink') {
            list.style.color = 'black'
        }
        else {
            list.style.color = 'pink'
        }
    })
 }

 // Deliverable 4
 const dropDown = document.getElementById('breed-dropdown')
 dropDown.addEventListener('change', sortBreeds) //SELECT (DROP-DOWN) = "CHANGE" , not "click"

 function sortBreeds(e) {
   let letter =  e.target.value // a, b, c, d
   let result = breeds.filter(breed => breed.charAt(0) === letter) // array with breed names that start with "letter"
        while (document.querySelector('ul').firstChild) {
            document.querySelector('ul').removeChild(document.querySelector('ul').firstChild)
        }
   let filteredList = result.forEach(function(dog) {
       const newList = document.createElement('li')
       newList.innerHTML = dog
       const letterBreedList = document.getElementById('dog-breeds')
       letterBreedList.append(newList)
        
   })
     
 }
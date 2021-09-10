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
    const container = document.getElementById('dog-image-container') //grab container element
    container.append(image) // append all the images to the container
}

// Deliverable 2
fetch(breedUrl) //fetch data from second URL
.then(function(resp) {
    return resp.json() //convert it to json
})
.then(function (breedData) {
    Object.keys(breedData.message).forEach(renderBreeds) //collect all keys from breedData.message obj and pass each of them in renderBreeds
    breeds = Object.keys(breedData.message) // fill empty array (breeds) with all keys from line above
})



 function renderBreeds(breed) {
    const list = document.createElement('li') //create list element for dog breeds to go on
    list.innerHTML = breed // set text content of each list element to a single breed
    //console.log(breed)
    const breedList = document.getElementById('dog-breeds') // grab the unordered list element
    breedList.append(list) // append the breed list to the ul
    // Deliverable 3
    list.addEventListener('click', function() { //add event listener to the list so it can change colors
        if (list.style.color === 'pink') { //when the list is clicked: if the color is already pink, turn it back to black
            list.style.color = 'black'
        }
        else { //if the text color is black
            list.style.color = 'pink' //change it to pink
        }
    })
 }

 // Deliverable 4
 const dropDown = document.getElementById('breed-dropdown') // grab drop-down element
 dropDown.addEventListener('change', sortBreeds) //SELECT (DROP-DOWN) = "CHANGE" , not "click"

 function sortBreeds(e) {
   let letter =  e.target.value // a, b, c, d in drop down
   let result = breeds.filter(breed => breed.charAt(0) === letter) // array with breed names that start with first letter = a/b/c/d
        while (document.querySelector('ul').firstChild) {
            document.querySelector('ul').removeChild(document.querySelector('ul').firstChild) //removes old list and replaces it with filtered one
        }
   let filteredList = result.forEach(function(dog) { //filtered list is array with names that start with a/b/c/d and then passed into function
       const newList = document.createElement('li') //create list element again
       newList.innerHTML = dog //each element is a dog breed that begins with corresponding letter
       const letterBreedList = document.getElementById('dog-breeds') //grab ul element
       letterBreedList.append(newList) //append the new list to the ul
        
   })
     
 }
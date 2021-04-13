console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const arrayOfBreeds = []

document.addEventListener('DOMContentLoaded', (event) => {
    
    const clicking = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown');
    
    
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        
        const array = data.message;
        const imageContainer = document.querySelector('div#dog-image-container');
        let i = 0;
        
        array.forEach(element => {
            
            const createImage = document.createElement('img');
            createImage.id = i++;
            createImage.src = element;
            
            imageContainer.append(createImage);
            
            
        });
        
    });
    
    
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        
        const ul = document.getElementById('dog-breeds')
        
        
        iterator(data.message)
        
        function iterator (target){
            for (const key in target){
                
                
                const li = document.createElement('li');
                li.innerText = key;
                target[key].forEach(function(subBreed){
                    const li = document.createElement('li');
                    li.innerText = key + " - " +subBreed;
                    ul.append(li);
                    arrayOfBreeds.push(key+ " - " +subBreed);
                    
                    
                })
                
                ul.append(li);
                arrayOfBreeds.push(key)
                
                
            }
            
        }
        
        
        
    });
    
    clicking.addEventListener ('click', function(event){
        console.log(`${event.target.innerText} has changed color`)
        
        event.target.style.color = "green";
        
        
        
    })

    // clicking.addEventListener ('click', function(event){
    //     console.log(`${event.target.innerText} has changed color`)
        

    //     if (event.target.style.color = "black"){
    //         event.target.style.color = "green";
    //     } else if (event.target.style.color = "green"){

    //         event.target.style.color = "black";

    //     }
        
        
        
    // })
    
    
    
    
    dropDown.addEventListener('change' , function(event){
        const chosenLeter = dropDown.value
        const ul = document.getElementById('dog-breeds')
        ul.innerHTML = ''
        
        
        let selectedBreeds = arrayOfBreeds.filter(function(e){
            
            return e.charAt(0)=== chosenLeter;
        });
        
        console.log(selectedBreeds);
        
        selectedBreeds.forEach ( function (printSelected){
            
            const li = document.createElement('li');
            li.innerText = printSelected;
            ul.append(li);
        }) 
        
        
        
        
        const buttonAll = document.getElementById('button')
        buttonAll.addEventListener('click', function(event){
            ul.innerHTML = ''
            arrayOfBreeds.forEach( function (printSelected){
            
                const li = document.createElement('li');
                li.innerText = printSelected;
                ul.append(li);
            }) 
        })
        
        
        
        
        
        
        





      



    });





    
    });



























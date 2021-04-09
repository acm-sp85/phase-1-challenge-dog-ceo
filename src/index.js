console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

 document.addEventListener('DOMContentLoaded', (event) => {

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
            
            // console.log(element)
            
    
        });

    });


    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        

        // console.log(data)
        deepIterator(data)
        // iterator(data.message)


        function deepIterator (target){
            if (typeof target === "object"){
                for (const key in target){
                    
                    deepIterator(target[key]);
                    
                    
                }
            }else{
                console.log(target)

            }
        }

        // function iterator (target){
        //     for (const key in target){
        //         console.log(key)
        //     }
        // }



    });

    



    });



























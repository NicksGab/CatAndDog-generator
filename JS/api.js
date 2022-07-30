let generate_kitty = document.querySelector('.generate_kitty');

generate_kitty.addEventListener('click', fetchPicsCat);

 function fetchPicsCat() {
    let gatinhosImgDiv = document.querySelector("gatinhos")

    fetch('https://api.thecatapi.com/v1/images/search') 
    .then(response => response.json())
    .then(data => { let gatinhosImgUrl = data[0].url

        let gatinhosImgEl = document.createElement("img")

        gatinhosImgEl.setAttribute('src', `${gatinhosImgUrl}`)
        gatinhosImgEl.classList.add("gatinhos");

        let gatinhosImgDiv = document.querySelector(".gatinhos");
        gatinhosImgDiv.replaceWith(gatinhosImgEl);
     })

    .catch((err) = console.log(error))
}



let generate_dog = document.querySelector('.generate_dog');

generate_dog.addEventListener('click', fetchPicsDog);

function fetchPicsDog() {
    let doguinhosImgDiv = document.querySelector("doguinhos")

    fetch('https://api.thedogapi.com/v1/images/search') 
    .then(response => response.json(0))
    .then(data => { let doguinhosImgUrl = data[0].url

        let doguinhosImgEl = document.createElement("img")

        doguinhosImgEl.setAttribute('src', `${doguinhosImgUrl}`)
        doguinhosImgEl.classList.add("doguinhos");

        let doguinhosImgDiv = document.querySelector(".doguinhos");
        doguinhosImgDiv.replaceWith(doguinhosImgEl);
     })

    .catch((err) = console.log(error))
}


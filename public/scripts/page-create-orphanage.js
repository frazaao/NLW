//Tipos de dados
//String ""
//Number 01
//Object {}
//Boolean true or false
//Array[]

//Create Map
const map = L.map("mapid").setView([-20.0263689, -48.9377522], 15);

//Create and add a tile Layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

//Create and add Marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon Layer
    marker = L.marker([lat, lng],{icon})
    .addTo(map)
})

//Add photo Field
function addPhotoField () {
    //pegar o container de photos id=  #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar class = .new-upload
    const fieldsContainer = document.querySelectorAll ('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verificação se o campo está vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao container de images
    newFieldContainer.children[0].value=''

    // add o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span =  event.currentTarget

    const fieldsContainer = document.querySelectorAll ('.new-upload')
    //limpar o valor do campo
    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

// selecionar sim ou nao
function toggleSelect(event){
    //retirar a classe active
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })
    //colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}
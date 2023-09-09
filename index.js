function newImage(left, bottom, src){
let characters = document.createElement('img')
characters.src = src
characters.style.position = 'fixed'
characters.style.left = left +"px"
characters.style.bottom = bottom +"px"
document.body.append(characters)

characters.addEventListener('dblclick', function(){
    characters.remove()
})

}
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newImage(450,200,'assets/pine-tree.png')
newImage(100,100,'assets/green-character.gif')
newImage(200,300,'assets/tree.png')
newImage(350,100,'assets/pillar.png')
newImage(150,200,'assets/crate.png')
newImage(500,425,'assets/well.png')

newItem(500,405,'assets/sword.png')
newItem(165,185,'assets/shield.png')
newItem(600,100,'assets/staff.png')


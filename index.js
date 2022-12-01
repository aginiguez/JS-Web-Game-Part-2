function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}
let inventory = document.createElement('div')
function newInventory(url, left,){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px'
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)
//(1)
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}
//(2)
function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer === 'follow'){
        follow()
    } else if(secondAnswer === 'continue') {
        onward()
    } else if(secondAnswer === 'back') {
        start()
    }
}
//(2)
function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon.
    On the other side of him, you see a shiny chest of treasure. Will you take another path or go past the dragon? Which do you take?`)
    if(secondAnswer === 'another path'){
        away()
    } else if(secondAnswer === 'go past') {
        past()
    } else if(secondAnswer === 'back') {
        start()
    }
}
//(3)
function follow(){
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. Will you spread the word or stay?')
    if (thirdAnswer === 'spread the word'){
        spread()
    } else if(thirdAnswer === 'stay') {
        stay()
    } else if(thirdAnswer === 'back') {
        goLeft()
    }
}
//(3)
function away(){
    let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
    if (thirdAnswer === 'draw it') {
        draw()
    } else if(thirdAnswer === 'pick it') {
        picking()
    } else if(thirdAnswer === 'back') {
        goRight()
    }
}
//(4)
function past(){
    let fourthAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')
    if (fourthAnswer === 'stay') {
        friendship()
    } else if(fourthAnswer === 'run') {
        runaway()
    } else if(fourthAnswer === 'back') {
        goRight()
    }
}
//(4)
function onward(){
    let fourthAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')
    if (fourthAnswer === 'ladder') {
        ladder()
    } else if(fourthAnswer === 'staircase') {
        staircase()
    } else if(fourthAnswer === 'back') {
        goLeft()
    }
}
//(5)
function stay(){
    let fifthAnswer = window.prompt('End of your journey. You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
    if (fifthAnswer === 'back') {
        follow()
    }
}
//(5)
function picking(){
    let fifthAnswer = window.prompt('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
    if(fifthAnswer === 'back')
    away()
}
//(6)
function spread (){
    let sixthAnswer = window.prompt('End of your journey. After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless. You are deemed crazy and thrown in jail.')
    if(sixthAnswer === 'back') {
    follow()
    }
}

//(6)
function draw(){
    let sixthAnswer = window.prompt('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
    if(sixthAnswer === 'back') {
        away()
    }
}
//(7)
function runaway(){
    let seventhAnswer = window.prompt('Quickly, you run back to the caves entrance. Sheepish, you return home.')
    if(seventhAnswer === 'back') {
        past()
    }
}
//(7)
function ladder() {
    let seventhAnswer = window.prompt('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
    if(seventhAnswer === 'back') {
        onward()

    }
}
//(8)
function friendship(){
    let eightAnswer = window.prompt('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
    if(eightAnswer === 'back') {
        past()
    }
}
//(8)
function staircase(){
    let eigthAnswer = window.prompt('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
    if(eightAnswer === 'back') {
        onward()
    }
}
start()



























let reasons = document.querySelector('#reasons-controls>ul')
let reasonschildren = reasons.children
const reasonsContainer=document.getElementById('description')
// console.log(reasons)
// console.log(reasons.children)

// reasons.addEventListener('click',(event)=>console.log(event.currentTarget))

// for (item of reasons.children){
//     console.log(item)
//     item.addEventListener('click', (event)=> {
//         console.log(event)
//         console.log('click')
//         console.log(Array.from(reasonschildren).indexOf(event.currentTarget))
//     })
// }
for (item of reasons.children){
    console.log(item)
    item.addEventListener('click', nextReason)
}

//to go over the next reasons if not clicked. Im getting the active element and grabbing the next li element
//that way i can go over to the next, but if I get to the last element, theres no next sibling, so I have to go back to the start
//thats where the if comes in, but i think it would be better if the else was the first condition
//because the way it is 3 times out of 4 it is checking the if condition and going through the else.
//I had to debug it through devtools to find out that the length should be -1, silly me, thought i had used less than
setInterval(function() {
    let getCurrentElement = document.querySelector("li.active");
    if (Array.from(reasonschildren).indexOf(getCurrentElement) === (reasonschildren.length)-1)
    {
        getCurrentElement = Array.from(reasonschildren)[0]
        getCurrentElement.click()
    }
    else{

        getCurrentElement.nextElementSibling.click()
    }

},1500)



function nextReason(event)
{
    let indexCurrentElement=Array.from(reasonschildren).indexOf(event.currentTarget) //se for target n vai funcionar
    for (reason of reasonschildren)
    {
        reason.classList.remove('active')
    }
    event.target.classList.add('active')
    texts=["to remind you that even if you are a failure, your cat is still there for you","to make you laugh","to give you loving tatoos","to netflix and chill with you"]
    let textToChange=document.getElementById("description-reason");
    textToChange.textContent = texts[indexCurrentElement]

    // console.log(`clicked, ${event}`)
    console.log(indexCurrentElement)
}

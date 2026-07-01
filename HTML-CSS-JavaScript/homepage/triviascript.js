//TODO update progress bar with class w-25 w-50 w-75
// console.log(document.querySelectorAll("input[name=question1]"))

const questionsQuantity = 4
const inputsByName = document.querySelectorAll("input[type=radio]")
let labels = document.querySelectorAll('label')

for (input of inputsByName)
{
    input.addEventListener('click', upgradeBar)
}

function upgradeBar(event)
{
    // console.log('clicked')

    let questionsChecked = 0
    for (input of inputsByName){
        if (input.checked === true){
            questionsChecked++
        }
    }
    // console.log(`questions checked: ${questionsChecked}`);
    const re = /\d.*/

    const progressBar = document.querySelector(".progress-bar")
     //posso remover a width anterior com regex ou com startsWith
    //pra remover com regex tem que ser classname e nao classlist pq classlist retorna uma domtokenlist que eu chequei mas aparentemente n é string. eu tava tentando usar o values mas ficou mto complicado
    progressBar.className = progressBar.className.replace(re, `${(questionsChecked/questionsQuantity)*100}`)
    progressBar.setAttribute("aria-valuenow",`${(questionsChecked/questionsQuantity)*100}`)
    // console.log(progressBar.className)
}
//TODO check answers
//add checkmark on correct answers and x on incorrecgt
const correctAnswers=
{
    "question1":"b",
    "question2":"c",
    "question3":"c",
    "question4":"b",
}

document.querySelector('button#check').addEventListener('click', checker)
document.querySelector('button#clear').addEventListener('click', clearRadius)

function checker(event){
    let rightAnswers = 0
    Array.from(labels).forEach(l => l.style.color = "")
    for (input of inputsByName)
    {
        // console.log(input)
        if (input.checked)
        {
            const label = document.querySelector(`label[for=${input.id}]`)
            if (correctAnswers[input.name]===input.value){
                label.style.color = "rgb(122, 214, 122)";
                rightAnswers++
            }
            else {
                label.style.color = "rgb(214,122,122)";
            }
            //eu preciso q a label fique verde se correto e vermelha se incorreto
            //como pego a label ?
            //pelo input.name
            // console.log("correct answer is " + correctAnswers[input.name])
            // console.log("marked answer is " + input.value)
        }
    }
    alert(`You got ${rightAnswers} out of ${questionsQuantity}`)
}

function clearRadius(){
    for (label of labels)
    {
        label.style.color=""
    }
    for (input of inputsByName){
        input.checked = false
    }
    upgradeBar()
}


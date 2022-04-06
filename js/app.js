//web Scalable 
function doResize() {
    console.log("scaled")
    let content = document.getElementById("page_content")

    var currentWidth = content.clientWidth;
    var currentHeight = content.clientHeight;

    var availableHeight = window.innerHeight;
    var availableWidth = window.innerWidth;

    var scaleX = availableWidth / currentWidth;
    var scaleY = availableHeight / currentHeight;
    console.log(currentWidth,currentHeight , availableWidth, availableHeight)
    scaleX = Math.min( scaleX, scaleY);
    scaleY = scaleX;

    var translationX = Math.round((availableWidth - (currentWidth * scaleX)) / 2);
  var styles = {
    
    "-webkit-transform": "translate(" + translationX + "px) scale3d("
                                      + scaleX + ", " + scaleY + ", 1)",
    "-webkit-transform-origin": "0 0"
    };
    
    Object.assign(content.style, styles)

}
window.onresize =doResize;

// Loader
window.addEventListener('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
    doResize();

});

function removeLoader(){
    document.getElementById("loader" ).remove(); 
  }

// Pop Ups

const showResource = ()=>{
    document.getElementById('resource').style = "display:block;"
}
const dismissResource = ()=>{
    document.getElementById('resource').style = "display:none;"
}

const showHelp = ()=>{
    document.getElementById('help').style = "display:block;"
}
const dismissHelp = ()=>{
    document.getElementById('help').style = "display:none;"
}
// User InterActions

//  answers

let answer = "";
let answerPicked ="";
let rightAns = "";

const optionClicked = (e)=>{
    if(answer){
        answer.style="background-color: white"; 
    }
    e.target.style ="background-color:#0fa0c5;"
    answer =e.target;
    answerPicked = e.target.innerHTML;
    rightAns =e.target.className.split(" ")[1]
    
}

const answerClicked =(e)=>{
    if(answer){
        e.target.innerHTML = `<p>${answerPicked}</p>`;
        console.log(rightAns === "correct")
        if(rightAns === "correct"){
            setTimeout(()=>{e.target.innerHTML += '<img class="true" src="./assets/images/tikMark-small.png">'},1000)
            answer.style ="visibility:hidden"
            answerPicked = " ";
            answer="";
            e.target.removeEventListener('click', answerClicked)
        }else{
            setTimeout(()=>{e.target.innerHTML += '<img class="false" src="./assets/images/crossMark-small.png">'},500)
            setTimeout(()=>{e.target.innerHTML = " "},1500)
        }

    }
}
// Replay the task
let ansSpaces = Array.from(document.getElementsByClassName("answer"))
    ansSpaces.forEach(el=>{
        el.addEventListener('click',answerClicked)
    })
const reset =()=>{
    let options = Array.from(document.getElementsByClassName("option"))
    options.forEach(el=>{
        el.style="visibility: visible";
    })

    let answers = Array.from(document.getElementsByClassName("answer"))
    answers.forEach(el=>{
        el.innerHTML=" ";
    })
}
// Show Solution 

const solve =()=>{
    let options = Array.from(document.getElementsByClassName("correct"))
    options.forEach(el=>{
        el.style="visibility: hidden";
    })

    let answers = Array.from(document.getElementsByClassName("answer"))
    answers.forEach((el,i)=>{
        el.innerHTML=options[i].innerHTML +"<img class='true' src='./assets/images/tikMark-small.png'>";
    })
}
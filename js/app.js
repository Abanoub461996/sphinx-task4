//web Scalable 
function doResize() {
    let container = document.getElementById("page_wrapper");
    let content = document.getElementById("page_content")

    let contentWidth = content.clientWidth;
    
    if(contentWidth > container.offsetWidth){
        let scale = container.clientWidth/contentWidth;
        content.style = `transform: translateX(-50%) 
        translateY(-50%) scale(${scale}) ;`;
    }else{
        content.style =`transform: translateX(-50%)
         translateY(-50%)`
    }

    
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
// const correctAudio = new Audio();
// const wrongAudio = new Audio()
const answerClicked =(e)=>{
    if(answer){
        e.target.innerHTML = `<p>${answerPicked}</p>`;
        console.log(rightAns === "correct")
        if(rightAns === "correct"){
            setTimeout(()=>{e.target.innerHTML += '<img class="true" src="./assets/images/tikMark-small.png">'},1000)
            // correctAudio.play()
            answer.style ="visibility:hidden"
            answerPicked = " ";
            answer="";
        }else{
            setTimeout(()=>{e.target.innerHTML += '<img class="false" src="./assets/images/crossMark-small.png">'},500)
            setTimeout(()=>{e.target.innerHTML = " "},1500)
            // wrongAudio.play()
        }

    }
}
// Replay the task

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

const audio=document.getElementById("audio");
const button=document.getElementById('button');
const display=document.getElementById('display');
const setting=document.querySelector('.setting');
const textimage=document.querySelector('.text-image');
const map=document.querySelector('.map');
const body=document.getElementsByTagName("body")[0];
const exit = document.getElementById('Exit');


button.onclick=function(){
   display.style.visibility='visible';
   map.style.visibility='hidden';
   body.style.backgroundColor='#588764';
   button.style.visibility='hidden';
   textimage.style.visibility='hidden';
   setting.style.visibility='hidden';
   currentQuestion = 0;
   score = 0;
   usedFlags = [];  
   showFlagAndOptions();  
  }

document.addEventListener('DOMContentLoaded', () => {
const back=document.getElementById('back');
back.addEventListener('click' , () => {
    console.log('Back button clicked');
    display.style.visibility='hidden';
    map.style.visibility='visible';
    button.style.visibility='visible';
    textimage.style.visibility='visible';
    setting.style.visibility='visible'; 
    body.style.backgroundColor="#7d6654";
    playAgainButton.style.visibility="hidden";
});    
});  
 
const flags=[
    {country:"Afghanistan" ,  flagUrl:"https://flagpedia.net/data/flags/w702/af.webp?v=un"},
    {country:"Armenia" ,      flagUrl:"https://flagpedia.net/data/flags/w702/am.webp"},
    {country:"Australia" ,    flagUrl:"https://flagpedia.net/data/flags/w702/au.webp"},
    {country:"Austria" ,     flagUrl:"https://flagpedia.net/data/flags/w702/at.webp"},
    {country:"Bangladesh" ,   flagUrl:"https://flagpedia.net/data/flags/w702/bd.webp"},
    {country:"Belgium" ,     flagUrl :"https://flagpedia.net/data/flags/w702/be.webp"},
    {country:"Brazil" ,       flagUrl:"https://flagpedia.net/data/flags/w702/br.webp"},
    {country:"Canada" ,       flagUrl:"https://flagpedia.net/data/flags/w702/ca.webp"},
    {country:"China" ,        flagUrl:"https://flagpedia.net/data/flags/w702/cn.webp"},
    {country:"Cuba" ,          flagUrl :"https://flagpedia.net/data/flags/w702/cu.webp"},
    {country:"Denmark" ,      flagUrl :"https://flagpedia.net/data/flags/w702/dk.webp"},
    {country:"Egypt" ,         flagUrl :"https://flagpedia.net/data/flags/w702/eg.webp"},
    {country:"England" ,      flagUrl  :"https://flagpedia.net/data/flags/w702/gb-eng.webp"},
    {country:"France" ,        flagUrl :"https://flagpedia.net/data/flags/w702/fr.webp"},
    {country:"Germany" ,      flagUrl :"https://flagpedia.net/data/flags/w702/de.webp"},
    {country:"India" ,        flagUrl :"https://flagpedia.net/data/flags/w702/in.webp"},
    {country:"Ireland" ,      flagUrl:"https://flagpedia.net/data/flags/w702/ie.webp"},
    {country:"Italy" ,        flagUrl:"https://flagpedia.net/data/flags/w702/it.webp"},
    {country:"Georgia" ,     flagUrl :"https://flagpedia.net/data/flags/w702/ge.webp"},
    {country:"Japan" ,       flagUrl :"https://flagpedia.net/data/flags/w702/jp.webp"},
    {country:"Jordan" ,       flagUrl:"https://flagpedia.net/data/flags/w702/jo.webp"},
    {country:"South Korea" ,  flagUrl:"https://flagpedia.net/data/flags/w702/kr.webp"},
    {country:"Pakistan" ,    flagUrl :"https://flagpedia.net/data/flags/w702/pk.webp"},
    {country:"Russia" ,      flagUrl :"https://flagpedia.net/data/flags/w702/ru.webp"},
    {country:"Sri Lanka" ,    flagUrl :"https://flagpedia.net/data/flags/w702/lk.webp"},
    {country:"Switzerland" ,  flagUrl :"https://flagpedia.net/data/flags/w702/ch.webp"},
    {country:"Turkey" ,       flagUrl :"https://flagpedia.net/data/flags/w702/tr.webp"},
    {country:"United States" , flagUrl :"https://flagpedia.net/data/flags/w702/us.webp"},
    {country:"Vietnam" ,      flagUrl :"https://flagpedia.net/data/flags/w702/vn.webp"},
    {country:"South Africa",  flagUrl :"https://flagpedia.net/data/flags/w702/za.webp"},
    {country:"Singapore" ,   flagUrl :"https://flagpedia.net/data/flags/w702/sg.webp"},
    {country:"Philippines" ,  flagUrl:"https://flagpedia.net/data/flags/w702/ph.webp"},
    {country:"Portugal" ,    flagUrl :"https://flagpedia.net/data/flags/w702/pt.webp"},
    {country:"Norway" ,       flagUrl:"https://flagpedia.net/data/flags/w702/no.webp"},
    {country:"New Zealand" , flagUrl :"https://flagpedia.net/data/flags/w702/nz.webp"},
    {country:"Nepal" ,        flagUrl:"https://flagpedia.net/data/flags/w702/np.webp"},
    {country:"Ghana" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/gh.webp "},
    {country:"Hong kong" ,    flagUrl:"https://flagpedia.net/data/flags/w1160/hk.webp"},
    {country:"Iran" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/ir.webp"},
    {country:"Israel" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/il.webp"},
    {country:"Kazakhstan" ,   flagUrl:"https://flagpedia.net/data/flags/w1160/kz.webp"},
    {country:"North korea" ,   flagUrl:"https://flagpedia.net/data/flags/w1160/kp.webp"},
    {country:"Kuwait" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/kw.webp"},
    {country:"Libya" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/ly.webp"},
    {country:"Maldives" ,      flagUrl:"https://flagpedia.net/data/flags/w1160/mv.webp"},
    {country:"Malaysia" ,      flagUrl:"https://flagpedia.net/data/flags/w1160/my.webp"},
    {country:"Mauritius" ,     flagUrl:"https://flagpedia.net/data/flags/w1160/mu.webp"},
    {country:"Mexico" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/mx.webp"},
    {country:"Myanmar" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/mm.webp"},
    {country:"Netherlands" ,    flagUrl:"https://flagpedia.net/data/flags/w1160/nl.webp"},
    {country:"Oman" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/om.webp"},
    {country:"Tajikistan" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/tj.webp"},
    {country:"Thailand" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/th.webp"},
    {country:"United kingdom" ,     flagUrl:"https://flagpedia.net/data/flags/w1160/gb.webp"},
    {country:"United Arab Emirates", flagUrl:"https://flagpedia.net/data/flags/w1160/ae.webp"},
    {country:"Ukraine" ,     flagUrl:"https://flagpedia.net/data/flags/w1160/ua.webp"},
    {country:"Sudan" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/sd.webp"},
    {country:"Sweden" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/se.webp"},
    {country:"Saudi Arabia" ,  flagUrl:"https://flagpedia.net/data/flags/w1160/sa.webp"},
    {country:"Saint Martin" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/mf.webp"},
    {country:"Qatar" ,        flagUrl:"https://flagpedia.net/data/flags/w1160/qa.webp"},

] 

const flagContainer = document.createElement('div');
flagContainer.id = "flag-container";
flagContainer.style.marginTop = "50px";
display.appendChild(flagContainer);

const optionsContainer = document.createElement('div');
optionsContainer.id = "options-container";
optionsContainer.style.marginLeft = "10px"
optionsContainer.style.display = "flex";
optionsContainer.style.flexDirection = "column";
optionsContainer.style.marginTop = "-10px";
optionsContainer.style.alignItems = "center";
display.appendChild(optionsContainer);

const nextButton = document.createElement('button');
nextButton.textContent = "Next";
nextButton.id = "next-button";
nextButton.style.display = "none";
display.appendChild(nextButton);

let currentFlag = {};
let score = 0;
let usedFlags=[];
let currentQuestion = 0;
const maxQuestions = 8;

function getRandomFlags() {
    const randomFlags = [];
    while (randomFlags.length < 4) {
        const randomIndex = Math.floor(Math.random() * flags.length);
        const flag = flags[randomIndex];
        if (!randomFlags.includes(flag) && !usedFlags.includes(flag)) {
            randomFlags.push(flag);
        }
    }
    return randomFlags;
}

function showFlagAndOptions() {
    const randomFlags = getRandomFlags();
    currentFlag = randomFlags[Math.floor(Math.random() * 4)];
    
  
    flagContainer.innerHTML = `<img src="${currentFlag.flagUrl}" alt="Flag of ${currentFlag.country}" style="width: 280px;height: 180px">`;
    
    usedFlags.push(currentFlag);

    optionsContainer.innerHTML = '';
    randomFlags.forEach(flag => {
        const optionButton = document.createElement('button');
        optionButton.textContent = flag.country;
        optionButton.style.marginTop = "-100px"
        optionButton.style.margin = "10px";
        optionButton.style.padding = "13px";
        optionButton.style.backgroundColor="#987654";
        optionButton.style.borderRadius = "10px";
        optionButton.style.fontWeight = "bolder";
        optionButton.style.fontSize = "22px";
        optionButton.style.cursor = "pointer";
        
        optionButton.addEventListener('click', () => checkAnswer(flag.country, optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedCountry, optionButton) {
    if (selectedCountry === currentFlag.country) {
        optionButton.style.backgroundColor = "green";
        score++;
    } else {
        optionButton.style.backgroundColor = "red";
    }

 
    const optionButtons = optionsContainer.querySelectorAll('button');
    optionButtons.forEach(button => button.disabled = true);

    nextButton.style.display = "block";  
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < maxQuestions) {
        showFlagAndOptions();
    } else {
        endQuiz();
    }
    nextButton.style.display = "none";
});

function endQuiz() {
    flagContainer.innerHTML = '';
    optionsContainer.innerHTML = `<h1>Your final score is: ${score}/${maxQuestions}</h1>`;
    nextButton.style.display = "none";
}
    
showFlagAndOptions();

const playAgainButton = document.createElement('button');
playAgainButton.textContent = "Play Again";
playAgainButton.id = "play-again-button";
playAgainButton.style.marginTop = "65px";  
playAgainButton.style.alignSelf = "center";   
playAgainButton.style.display = "none";
playAgainButton.style.justifyContent = "center";
display.appendChild(playAgainButton);

playAgainButton.addEventListener('click', restartGame);

function restartGame() {
 
    score = 0;
    currentQuestion = 0;
    usedFlags= [];
    showFlagAndOptions();
    playAgainButton.style.display = "none";  
}

function endQuiz() {
    flagContainer.innerHTML = '';
    optionsContainer.innerHTML = `<h2 id="final">Your final score is: <br><br>${score}/${maxQuestions}</h2>`;
    nextButton.style.display = "none";
    optionsContainer.style.fontSize="0px";
    playAgainButton.style.display = "block";  
    
}


// document.addEventListener('DOMContentLoaded', () => {
//     const loginPage = document.getElementById('login-page');
//     const loginButton = document.getElementById('login-button');
//     const mainGame = document.body;

//     // Hide everything except login initially
//     mainGame.querySelectorAll('img, .text-image, #button, #display, .setting').forEach(el => {
//         el.style.display = 'none';
//     });

//     loginButton.addEventListener('click', () => {
//         const user = document.getElementById('username').value;
//         const pass = document.getElementById('password').value;

//         // Very basic username/password check
//         if (user === 'user' && pass === 'pass') {
//             loginPage.style.display = 'none';
//             mainGame.querySelectorAll('img, .text-image, #button, .setting').forEach(el => {
//                 el.style.display = '';
//             });
//         } else {
//             alert("Invalid username or password");
//         }
//     });
// });
 














































 

 
 
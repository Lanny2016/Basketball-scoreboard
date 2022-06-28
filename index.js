const homeSocreEl = document.getElementById("home-score")
const guestSocreEl = document.getElementById("guest-score")
const homePulsOneEl = document.getElementById("homePulsOne")
const homePlusTwoEl = document.getElementById("homePlusTwo")
const homePlusThreeEl = document.getElementById("homePlusThree")
const guestPulsOneEl = document.getElementById("guestPulsOne")
const guestPlusTwoEl = document.getElementById("guestPlusTwo")
const guestPlusThreeEl = document.getElementById("guestPlusThree")
const resetButtonEl = document.getElementById("reset-button")

let homeScore = 0
let guestScore = 0
function addOneToHome(){
    homeScore  = homeSocreEl.textContent = homeScore  + 1
    // shining effect
      if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         guestSocreEl.style.textShadow = ""
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
    }
}

function addTwoToHome(){
    homeScore = homeSocreEl.textContent = homeScore + 2
    // shining effect
     if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         guestSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }
}

function addThreeToHome(){
   homeScore  = homeSocreEl.textContent = homeScore + 3
   // shining effect
      if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         guestSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }
}
function addOneToGuest(){
    guestScore = guestSocreEl.textContent = guestScore + 1
    // shining effect
       if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         guestSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }
}

function addTwoToGuest(){
   guestScore = guestSocreEl.textContent = guestScore + 2
   // shining effect
      if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         guestSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }
}

function addThreeToGuest(){
    guestScore = guestSocreEl.textContent = guestScore + 3
    // shining effect
     if(homeScore == guestScore) {
        homeSocreEl.style.textShadow = ""
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "running"
        guestSocreEl.style.animationPlayState  = "running"
    }else if(homeScore > guestScore) {
        homeSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
        guestSocreEl.style.textShadow = ""
        homeSocreEl.style.animationPlayState  = "paused"
        guestSocreEl.style.animationPlayState  = "paused"
    }else if(homeScore < guestScore){
         guestSocreEl.style.textShadow = "5px 5px 10px #F94F6D"
         homeSocreEl.style.textShadow = ""
         homeSocreEl.style.animationPlayState  = "paused"
         guestSocreEl.style.animationPlayState  = "paused"
    }
}

// Event listeners for the home buttons
homePulsOneEl.addEventListener("click",addOneToHome)
homePlusTwoEl.addEventListener("click",addTwoToHome)
homePlusThreeEl.addEventListener("click",addThreeToHome)
// Event listeners for the guest buttons
guestPulsOneEl.addEventListener("click",addOneToGuest)
guestPlusTwoEl.addEventListener("click",addTwoToGuest)
guestPlusThreeEl.addEventListener("click",addThreeToGuest)

// Event lister for the reset button
resetButtonEl.addEventListener("click", () => {
    homeScore = homeSocreEl.textContent = 0
    guestScore = guestSocreEl.textContent = 0
    homeSocreEl.style.textShadow = ""
    guestSocreEl.style.textShadow = ""
    homeSocreEl.style.animationPlayState  = "paused"
    guestSocreEl.style.animationPlayState  = "paused"
})

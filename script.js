const perInfo = document.querySelector("#personalInfo")
const edInfo = document.querySelector("#educationalInfo")
const healthInfo = document.querySelector("#healthInfo")
const firstNextBtn = document.querySelector("#firstNextBtn")
const secondNextBtn = document.querySelector("#secondNextBtn")
const firstBackBtn = document.querySelector("#firstBackBtn")
const secondBackBtn = document.querySelector("#secondBackBtn")
const submitBtn = document.querySelector("#submitBtn")

function firstNext(){
    perInfo.style.display="none"
    edInfo.style.display="flex"
    healthInfo.style.display="none"
}
function secondNext(){
    edInfo.style.display="none"
    healthInfo.style.display="flex"

}
function firstBack(){
    perInfo.style.display="flex"
    edInfo.style.display="none"
}
function secondBack(){
    edInfo.style.display="flex"
    healthInfo.style.display="none"
}
function submit(){
    alert("Submited successfully")
}
firstNextBtn.addEventListener("click",firstNext())
secondNextBtn.addEventListener("click", secondNext())
firstBackBtn.addEventListener("click",firstNext)
secondBackBtn.addEventListener("click", secondBack())

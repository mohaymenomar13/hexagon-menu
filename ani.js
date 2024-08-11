const back = document.getElementById("back");
const hex1 = document.getElementById("h1");
const hex2 = document.getElementById("h2");
const hex3 = document.getElementById("h3");
const hex4 = document.getElementById("h4");
const hex5 = document.getElementById("h5");
const hex6 = document.getElementById("h6");
const hex7 = document.getElementById("h7");

const hex1Content = document.getElementById("aboutMe");

hex1.addEventListener("click", function() {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");
    hex1Content.classList.remove("contentAniL");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");

    hex1.classList.add("h1AniB");
    hex2.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex6.classList.add("removeAni");
    hex7.classList.add("removeAni");

  
    back.setAttribute("onclick", "backha()");
    hex1Content.style.display = "block";
    hex1Content.classList.add("contentAniB");
});

hex2.addEventListener("click", function() {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");

    hex2.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex6.classList.add("removeAni");
    hex7.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhb()");
});
hex3.addEventListener("click", function () {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");

    hex3.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex2.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex6.classList.add("removeAni");
    hex7.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhc()");
});
hex4.addEventListener("click", function () {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");

    hex4.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex2.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex6.classList.add("removeAni");
    hex7.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhd()");
});
hex5.addEventListener("click", function () {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");

    hex5.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex2.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex6.classList.add("removeAni");
    hex7.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhe()");
});
hex6.addEventListener("click", function () {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex7.classList.remove("removeAniL");

    hex6.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex2.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex7.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhf()");
});
hex7.addEventListener("click", function () {
    hex1.classList.remove("h1AniL");
    hex2.classList.remove("h1AniL");
    hex3.classList.remove("h1AniL");
    hex4.classList.remove("h1AniL");
    hex5.classList.remove("h1AniL");
    hex6.classList.remove("h1AniL");
    hex7.classList.remove("h1AniL");
    hex1.classList.remove("removeAniL");
    hex2.classList.remove("removeAniL");
    hex3.classList.remove("removeAniL");
    hex4.classList.remove("removeAniL");
    hex5.classList.remove("removeAniL");
    hex6.classList.remove("removeAniL");

    hex7.classList.add("h1AniB");
    hex1.classList.add("removeAni");
    hex2.classList.add("removeAni");
    hex3.classList.add("removeAni");
    hex4.classList.add("removeAni");
    hex5.classList.add("removeAni");
    hex6.classList.add("removeAni");
    
    back.classList.remove("contentAniL");
    back.classList.add("contentAniB");
    back.setAttribute("onclick", "backhg()");
});

back.addEventListener("click", function () {
    back.classList.remove("contentAniB");
    back.classList.add("contentAniL");
});

function backha() {
    hex1.classList.remove("h1AniB");
    hex2.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex6.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex1.classList.add("h1AniL");
    hex2.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
    hex7.classList.add("removeAniL");

    hex1Content.classList.remove("contentAniB");
    hex1Content.classList.add("contentAniL");

    setTimeout(contentHide, 1000);
}
function contentHide() {
    hex1Content.style.display = "none";
}
function backhb() {
    hex2.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex6.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex2.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
    hex7.classList.add("removeAniL");
}
function backhc() {
    hex3.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex2.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex6.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex3.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex2.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
    hex7.classList.add("removeAniL");
}
function backhd() {
    hex4.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex2.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex6.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex4.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex2.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
    hex7.classList.add("removeAniL");
}
function backhe() {
    hex5.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex2.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex6.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex5.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex2.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
    hex7.classList.add("removeAniL");
}
function backhf() {
    hex6.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex2.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex7.classList.remove("removeAni");

    hex6.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex2.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex7.classList.add("removeAniL");
}
function backhg() {
    hex7.classList.remove("h1AniB");
    hex1.classList.remove("removeAni");
    hex2.classList.remove("removeAni");
    hex3.classList.remove("removeAni");
    hex4.classList.remove("removeAni");
    hex5.classList.remove("removeAni");
    hex6.classList.remove("removeAni");

    hex7.classList.add("h1AniL");
    hex1.classList.add("removeAniL");
    hex2.classList.add("removeAniL");
    hex3.classList.add("removeAniL");
    hex4.classList.add("removeAniL");
    hex5.classList.add("removeAniL");
    hex6.classList.add("removeAniL");
}


/*
<div class="colorPicker">
    <input type="color" name="colorPicker" id="colorPicker" onchange="colorPicker()" hidden>
    <p id="value" class="hexx1"></p>
</div>        
*/
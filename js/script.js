/*let ccinputs = document.getElementsByName("captcha_code");
ccinputs[2].remove();
ccinputs[1].remove();
ccinputs[0].remove();

let ccimages = document.getElementsByName("captcha");
ccimages[2].remove();
ccimages[1].remove();
ccimages[0].remove();

let cctexts = document.querySelectorAll("a[href='#']");
cctexts[2].remove();
cctexts[1].remove();
cctexts[0].remove();*/

function addHint(e) {
    let divhint = document.createElement("div");
    // divhint.style.textAlign = "left";
    divhint.style.color = "white"; 
    divhint.style.marginTop = "20px"; 
    divhint.innerHTML = "咱偉大的 e3 現在啟用後端驗證拉，總之這個套件已經廢了。";
    divhint.style.fontSize = "18px";
    e.appendChild(divhint);
}

let lgcard = document.querySelectorAll("div.LoginCard");
let lgcardtab = document.querySelectorAll("div.LoginCard-tablet");
let lgcardphone = document.querySelectorAll("div.LoginCard-phone");
let lgform = document.querySelectorAll("div.LoginForm");
let lgformphone = document.querySelectorAll("div.LoginForm-phone");
lgcard[0].style.height = "initial";
lgcardtab[0].style.height = "initial";
lgcardphone[0].style.height = "initial";
lgcard[0].style.paddingBottom = "20px"; 
lgcardtab[0].style.paddingBottom = "20px";
lgcardphone[0].style.paddingBottom = "20px";
lgform[0].style.height = "initial";
lgform[1].style.height = "initial";
lgformphone[0].style.height = "initial";

addHint(lgform[0]);
addHint(lgform[1]);
addHint(lgformphone[0]);

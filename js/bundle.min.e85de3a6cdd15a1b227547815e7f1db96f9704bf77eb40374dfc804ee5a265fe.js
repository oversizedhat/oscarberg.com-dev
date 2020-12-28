var contactElements=[];function MeMail(){var memail=atob("b3NjYXJAb3NjYXJiZXJnLmNvbQ==");if(contactElements.length<=0){window.location.href="mailto:"+memail;return;}
contactElements.forEach(element=>{if(document.getElementById(element).text.indexOf("@")!=-1){window.location.href="mailto:"+memail;return;}
document.getElementById(element).text=memail;});}
function registerContactElement(replaceElem){contactElements.push(replaceElem);};const cookieBanner_acceptCookieId="acceptingCookies";function cookieBanner_show(){let cookieBanner=document.getElementsByClassName("cookie-banner")[0];cookieBanner.style.display="block";}
function cookieBanner_accept(){localStorage.setItem(cookieBanner_acceptCookieId,"true");let cookieBanner=document.getElementsByClassName("cookie-banner")[0];cookieBanner.style.display="none";}
function cookieBanner_init(){let alreadyAcceptingCookies=localStorage.getItem(cookieBanner_acceptCookieId);if(alreadyAcceptingCookies!="true"){cookieBanner_show();}}
window.onload=cookieBanner_init();
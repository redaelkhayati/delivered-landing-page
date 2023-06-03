const form = document.querySelector('form');
const nameFeild = form.querySelector('.name');
const mailFeild = form.querySelector('.mail');
const messageFeild = form.querySelector('.message');
const nameInput = nameFeild.querySelector('input');
const mailInput = mailFeild.querySelector('input');
const messageInput = messageFeild.querySelector('textarea');
const nameErreur = nameFeild.querySelector('.erreur-txt');
const mailErreur = mailFeild.querySelector('.erreur-txt');
const messageErreur = messageFeild.querySelector('.erreur-txt');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const humbergerIcon = document.querySelector('.menu-bar');
const xIcon = document.querySelector('.menu-x');
const menu = document.querySelector('.menu');
const backgroundMenu = document.querySelector('.background-menu');
    /*the menu and navbar display*/
    humbergerIcon.onclick=()=>{
        menu.style.display = 'flex' ;
        backgroundMenu.style.display = 'block' ;
    }
    backgroundMenu.onclick=()=>{
        menu.style.display = 'none' ;
        backgroundMenu.style.display = 'none' ;
    }
    xIcon.onclick=()=>{
        menu.style.display = 'none' ;
        backgroundMenu.style.display = 'none' ;
    }
    window.addEventListener('resize', function() {
    let screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
            menu.style.display = 'none';
            backgroundMenu.style.display = 'none';
        }
    });
    let links = document.querySelectorAll('.link');
    links.forEach(function(link) {
        link.onclick = function() {

            menu.style.display = 'none';
            backgroundMenu.style.display = 'none';
        };
    });  
/*small animation (swapping two words) in the home section */
const   firstWord = "fiabilite!"
const  secondWord = "confiance."
const word = document.querySelector('.word');
let wordTab = "";
setInterval(() => {
    for(let i=0 ; i<firstWord.length;i++){
        setTimeout((index) => {
            wordTab = firstWord.slice(0, index + 1);
            word.innerHTML = wordTab;
        }, 200 * (i + 1), i);
    }
    wordTab="";
    setTimeout(() => {
        for(let i=0 ; i<secondWord.length;i++){
        setTimeout((index) => {
            wordTab = secondWord.slice(0, index + 1);
            word.innerHTML = wordTab;
        }, 300 * (i + 1), i);
    }  
    }, 4000);
}, 8000);
        
/*this code is for the "savoir plus " button */    
const savoirPlusBtn = document.querySelector('.btn-savoir');
const paragraph = document.querySelector('.js-para1');
savoirPlusBtn.onclick=()=>{
    if(savoirPlusBtn.innerHTML === 'savoir plus'){
        savoirPlusBtn.innerHTML = `savoir moins`
        paragraph.innerHTML = `Services de livraison exceptionnels avec un taux de satisfaction client de plus de 90 %.Faites confiance à plus de 90 clients satisfaits pour des livraisons efficaces.` 
    }else{
        savoirPlusBtn.innerHTML = `savoir plus`
        paragraph.innerHTML = `Services de livraison exceptionnels avec un taux de satisfaction client de plus de 90 %.`
    }
}
/*for form validation */  
form.onsubmit=(e)=>{
    e.preventDefault();
    /*name check*/
    if(nameInput.value === ''){
        nameFeild.classList.add("erreur");
        nameFeild.classList.remove("good");
        nameErreur.innerHTML = `ce champ ne peut pas etre vide`
    }else{
        nameFeild.classList.remove("erreur");
        nameFeild.classList.add("good");
        nameErreur.innerHTML = ``
    }
    /*email check*/
    if(mailInput.value === ''){
        mailFeild.classList.add("erreur");
        mailFeild.classList.remove("good");
        mailErreur.innerHTML = `ce champ ne peut pas etre vide`
    }else if(!mailInput.value.match(emailPattern)){
        mailFeild.classList.remove("good");
        mailFeild.classList.add("erreur");
        mailErreur.innerHTML = `invalid email adress`
    }else{
        mailFeild.classList.remove("erreur");
        mailFeild.classList.add("good");
        mailErreur.innerHTML = ``
    }
    /*message check*/
    if(messageInput.value === ''){
        messageFeild.classList.remove("good");
        messageFeild.classList.add("erreur");
        messageErreur.innerHTML = `ce champ ne peut pas etre vide`
    }else{
        messageFeild.classList.remove("erreur");
        messageFeild.classList.add("good");
        messageErreur.innerHTML = ``
    }
    /*this check information at the same time when the user is typing*/
    nameInput.onkeyup=()=>{
        if(nameInput.value === ''){
            nameFeild.classList.add("erreur");
            nameFeild.classList.remove("good");
            nameErreur.innerHTML = `ce champ ne peut pas etre vide`
        }else{
            nameFeild.classList.remove("erreur");
            nameFeild.classList.add("good");
            nameErreur.innerHTML = ``
        }
    }
    mailInput.onkeyup=()=>{
        if(mailInput.value === ''){
            mailFeild.classList.add("erreur");
            mailFeild.classList.remove("good");
            mailErreur.innerHTML = `ce champ ne peut pas etre vide`
        }else if(!mailInput.value.match(emailPattern)){
            mailFeild.classList.remove("good");
            mailFeild.classList.add("erreur");
            mailErreur.innerHTML = `invalid email adress`
        }else{
            mailFeild.classList.remove("erreur");
            mailFeild.classList.add("good");
            mailErreur.innerHTML = ``
        }
    }
    messageInput.onkeyup=()=>{
        if(messageInput.value === ''){
            messageFeild.classList.add("erreur");
            messageFeild.classList.remove("good");
            messageErreur.innerHTML = `ce champ ne peut pas etre vide`
        }else{
            messageFeild.classList.remove("erreur");
            messageFeild.classList.add("good");
            messageErreur.innerHTML = ``
        }
    }
    if(nameInput.value !== '' && emailCheck() === 1 && messageInput.value !== ''){
            alert("Message sent successfully")
            location.reload();
    }
}

function emailCheck(){
    if(mailInput.value === ''){
        mailFeild.classList.add("erreur");
        mailFeild.classList.remove("good");
        mailErreur.innerHTML = `ce champ ne peut pas etre vide`
    }else if(!mailInput.value.match(emailPattern)){
        mailFeild.classList.remove("good");
        mailFeild.classList.add("erreur");
        mailErreur.innerHTML = `invalid email adress`
    }else{
        mailFeild.classList.remove("erreur");
        mailFeild.classList.add("good");
        mailErreur.innerHTML = ``
    }
    if(mailInput.value.match(emailPattern)){
        return 1 ;
    }else{
        return 0 ;
    }
}


    



//for User Page side bar (black)

window.addEventListener('scroll',()=>{
    if(window.innerWidth>=933){
        console.log(window.pageYOffset);
        
        let li=document.getElementsByTagName('li');
        for(i=0;i<li.length;i++){
            li[i].style.top=window.pageYOffset+'px';
        }
        
        console.log(document.getElementById('signLogin').offsetLeft)

    }
    
})







{
 //home page form should link to user page
 
 let form=document.forms['loginDropdownForm'];
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    location='./UserPage.html';
})

//when login icon is clicked on homePage, show drop down


let backgroun=document.getElementById('background');
let login1=document.getElementById('signLogin');
let login2= document.getElementById('loginIcon'); 
let log= document.getElementById('log'); 

login1.addEventListener('click',()=>{
        backgroun.style.display!=='block'?backgroun.style.display='block':backgroun.style.display='none';
        if(login1.style.color==='black'){
            login1.style.color='white';
            login1.style.backgroundColor='indigo';
            login2.style.color='white';
            login2.style.backgroundColor='indigo';
        }else{
            login1.style.color='black';
            login1.style.backgroundColor='white';
            login2.style.color='black';
            login2.style.backgroundColor='white';
        }
 
        })
login2.addEventListener('click',()=>{
    if(login1.style.color==='black'){
        login1.style.color='white';
        login1.style.backgroundColor='indigo';
        login2.style.color='white';
        login2.style.backgroundColor='indigo';
    }else{
        login1.style.color='black';
        login1.style.backgroundColor='white';
        login2.style.color='black';
        login2.style.backgroundColor='white';
    }
   if(backgroun.style.display!=='block'){
       backgroun.style.display='block';
   }
   else{
       backgroun.style.display='none';
   }
})
log.addEventListener('click',()=>{
    
    if(backgroun.style.display!=='block'){
        backgroun.style.display='block';
    }
    else{
        backgroun.style.display='none';
    }
    
        login1.style.color='black';
        login1.style.backgroundColor='white';
        login2.style.color='black';
        login2.style.backgroundColor='white';
    
 })
backgroun.addEventListener('click',(e)=>{
    let target=e.target;
    let attributeid=target.getAttribute('id');
    if(attributeid==='background'){

        backgroun.style.display='none';
        login1.style.color='white';
        login1.style.backgroundColor='indigo';
        login2.style.color='white';
        login2.style.backgroundColor='indigo';
    
    }   
}) 
}



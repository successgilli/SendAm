
{
    //for userPage and MyOrders Page....click toogle icon to toggle side bar
    let navBar=document.getElementById('navBarU');
    navBar.addEventListener('click', ()=>{
        let UserbackgroundToggle=document.getElementById('UserbackgroundToggle');
        let aside=document.getElementById('UserMain').firstElementChild;
        let toggle=document.getElementById('Toggle');
        if(window.innerWidth>=933){
            if(aside.style.marginLeft!=='-370px'){
                setTimeout(()=>{
                     
                },1000)
                aside.style.marginLeft=-370 + 'px';
                
                
                toggle.style.marginLeft='-370px';
            }else{
                
                setTimeout(()=>{
                    
                },1000)
                aside.style.marginLeft=0 + 'px';
                
                toggle.style.marginLeft='0px';
            }
        }
        if(window.innerWidth<=932){
            if(aside.style.marginLeft!=='0px'){
                aside.style.marginLeft=0 + 'px';
                toggle.style.marginLeft='0px';
                UserbackgroundToggle.style.display='block';
            }else{
                aside.style.marginLeft=-200 + 'px';
                toggle.style.marginLeft='-200px';
                UserbackgroundToggle.style.display='none';
            }
        }
    })
    673
}




/*targets select dropdown menu and changes styles
or not*/
{
    let pickUpLocation=document.getElementById('pickUpLocation');
    let pickUpLocationlabel=document.getElementById('loc1');
    let weight=document.getElementById('weight');
    let weightlabel=document.getElementById('weightlabel');
    pickUpLocation.addEventListener('click',()=>{
        pickUpLocationlabel.style.top='-90px';
        pickUpLocationlabel.style.fontSize='12px';
        pickUpLocation.style.borderBottomColor='indigo';
        pickUpLocationlabel.style.color='indigo';
    })
    pickUpLocation.addEventListener('blur',()=>{

        if(pickUpLocation.options[pickUpLocation.selectedIndex].value!==""){
            pickUpLocationlabel.style.top='-70px';
            
        }else{
            pickUpLocationlabel.style.top='-50px';
            pickUpLocationlabel.style.fontSize='16px';
            pickUpLocation.style.borderBottomColor='grey';
            pickUpLocationlabel.style.color='grey';
        }

        
        
    })
    weight.addEventListener('click',()=>{
        weightlabel.style.top='-90px';
        weightlabel.style.fontSize='12px';
        weight.style.borderBottomColor='indigo';
        weightlabel.style.color='indigo';
    })
    weight.addEventListener('blur',()=>{

        if(weight.options[weight.selectedIndex].value!==""){
            weightlabel.style.top='-70px';
            
        }else{
            weightlabel.style.top='-50px';
            weightlabel.style.fontSize='16px';
            weight.style.borderBottomColor='grey';
            weightlabel.style.color='grey';
        }

        
        
    })

}

//close modal in user createorder Page
{
    let closeModal=document.getElementById('closeModal');
    let modalBackground=document.getElementById('Userbackground');
    closeModal.addEventListener('click',()=>{
        modalBackground.style.display='none';
    })


 //Open modal by clicking on craeteModal Div

    let createOrder=document.getElementById('createOrder');
    createOrder.addEventListener('click', ()=>{
        modalBackground.style.display='block';
    })

}


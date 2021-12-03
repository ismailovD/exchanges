const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'),
        pageContent =document.querySelector('.return__content'), 
        selectBtns = document.querySelectorAll('.select__btn'),
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'), 
        dropdownWindow = document.querySelector('.side-bar__dropdown'),
        dropdownBtn = document.querySelector('.side-bar__dropdown-btn'),
        mainCheckbox = document.querySelector('.main-checkbox'), 
        exchangeInputs = document.querySelectorAll('.exchanges__input'),
        speedItem = ".exchanges__speed-item",
        speedRadio = document.querySelectorAll('.exchanges__speed-item .exchanges__radio'),
        speedChekcs = document.querySelectorAll('.exchanges__speed-input');


let  paddinL = window.getComputedStyle(pageContent, null).getPropertyValue("padding-left");
window.addEventListener('resize', ()=> {
    paddinL =  window.getComputedStyle(pageContent, null).getPropertyValue("padding-left");
}) 
    
sideBarBtn.addEventListener('click', () => { 
    sideBar.classList.toggle('active');
    if(sideBar.classList.contains('active')){  
            pageContent.style.paddingLeft = parseInt(paddinL) + "px"; 
    }else { 
        console.log(paddinL);
        pageContent.style.paddingLeft = parseInt(paddinL) - 215 + "px";  
    }
});
 

selectBtns.forEach(btn => { 
    btn.addEventListener('click', () => {  
        document.querySelectorAll(selectParent).forEach(parent => {
            if(btn.closest(selectParent) != parent){
                parent.classList.remove('show-select')
            }
        })
        btn.closest(selectParent).classList.toggle('show-select') 
    });
}) 

selectItems.forEach(item => {
     item.addEventListener('click', () => {
        selectItems.forEach(el => {
            el.classList.remove('item-selected')
        })
        item.classList.add('item-selected'); 
        item.closest(selectParent).children[0].textContent = item.getAttribute('data-value');
        item.closest(selectParent).classList.remove('show-select')
     })
})  

dropdownBtn.addEventListener('click', () => {
    dropdownWindow.classList.toggle('active')
})

mainCheckbox.addEventListener('change' , ()=> {
    if(mainCheckbox.checked){
        exchangeInputs.forEach(inp => {
            inp.setAttribute('disabled', true)
        })
    }else {
        exchangeInputs.forEach(inp => {
            inp.removeAttribute('disabled')
        })
    }
})

speedRadio.forEach(checkbox => { 
    checkbox.addEventListener('change', () => { 
        // speedChekcs.forEach(choose => {
        //     choose.checked = false;
        // })
        speedRadio.forEach(checking => {
            checking.closest(speedItem).classList.remove('visible');
            if(checking.checked) {
                checking.closest(speedItem).classList.add('visible')
           }
        }) 
      
    })
})
 

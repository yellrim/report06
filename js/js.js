 //메뉴
$('.nav-level1').mouseover(function(){
    $('.nav-level2').slideDown(300);
})
$('.nav-level1').mouseleave(function(){
    $('.nav-level2').slideUp(300);
})



// 슬라이드
let slider = document.querySelectorAll('.slide');
let tmp = 0;

setInterval(function(){
    tmp+=100;
    if(tmp==300){
        tmp=0;
        for(let idx=0; idx<slider.length; idx++){
            slider[idx].style.transition = '0';
        }
    }
    for(let idx=0; idx<slider.length; idx++){
        slider[idx].style.transform = 'translateY(-'+ tmp +'%)';
    }
},3000);


// 공지사항
let subTit = document.querySelectorAll('.sub-tit');
let artEls = document.querySelectorAll('.art');

tabMenu();

function tabMenu(){
    for(let idx=0; idx<subTit.length; idx++){
        subTit[idx].addEventListener('click',function(){
            for(let idx2=0; idx2<artEls.length; idx2++){
                artEls[idx2].classList.remove('on');
                this.parentElement.classList.add('on');
            } 
        })
    }
}


// 모달
let modalN = document.querySelector('.modal-notice');
let modalTit = document.querySelector('.modal-tit');
let modalTxt = document.querySelector('.modal-txt');
let modalTitle = document.querySelectorAll('.notice-content .title');
let modalCon = document.querySelectorAll('.notice-content .content');
let btnCloseN = document.querySelector('.modal-notice .modal-close');


for(let idx=0; idx<modalTitle.length; idx++){
    
    modalTitle[idx].addEventListener('click',function(e){
        noticeBtn('block');
        modalTit.innerHTML = this.innerHTML;
        modalTxt.innerHTML = modalCon[idx].innerHTML;

        e.preventDefault();
    })
    
}

btnCloseN.addEventListener('click',function(){
    noticeBtn('none');
})

function noticeBtn(e){
    modalN.style.display = e;
}

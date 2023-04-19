const card_1 = document.querySelector('.card_item_1');
const card_2 = document.querySelector('.card_item_2');
const card_3 = document.querySelector('.card_item_3');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup_title');
const popupText = document.querySelector('.popup_text');
const popupButtonExit = document.querySelector('.popup_button-exit');
const titleCard_1 = card_1.querySelector('.card_title');
const titleCard_2 = card_2.querySelector('.card_title');
const titleCard_3 = card_3.querySelector('.card_title');


function openPopup(elementPopup){
    elementPopup.classList.add("popup_opened");
    
}

function closePopup(elementPopup){
    elementPopup.classList.remove("popup_opened");
}

popupButtonExit.addEventListener('click',()=>{
    closePopup(popup);
})

card_1.addEventListener('click',function(){
    popupTitle.textContent = titleCard_1.textContent;
    popupText.textContent = `Фаршированный перец (рум. ardei umplut) — блюдо болгарской,
        молдавской и румынской, украинской, грузинской, русской,
        а также азербайджанской кухни (азерб. istiot dolmas?).
        Готовится из очищенного от семян сладкого перца (часто сорта гогошар),
        который наполняется мясным фаршем (обычно говяжьим, а в азербайджанской кухне — бараньим), 
        рисом и тёртыми помидорами.
        Фаршированные перцы варятся вертикально в кастрюле с водой.
        К столу подаются со сметаной.`

    openPopup(popup);
    
})


card_2 .addEventListener('click',function(){
    popupTitle.textContent = titleCard_2.textContent;
    popupText.textContent = `Пельмени (ед. ч. пельмень) — блюдо,
        распространённое в традиционной кухне народов Северной Евразии:
        русской, удмуртской,коми и некоторых других финно-угорских народов.
        Изготавливаются в виде термически обработанных изделий из пресного теста
        с начинкой из рубленого мяса или рыбы.`

        openPopup(popup);

   })


   card_3 .addEventListener('click',function(){
    popupTitle.textContent = titleCard_3.textContent;
    popupText.textContent = `Котлета (от фр. cotelette — «рёбрышко» — в первоначальном значении:
        кусок мяса, приготовленный на кости.
        В современном русском языке и русской кухне: 
        изделие из мясного фарша,
        его аналога (рыбного фарша, фарша из мяса птицы)
        или заменителя (фарш из овощей и т. д.).`

        openPopup(popup);
        
   })   
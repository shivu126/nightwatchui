module.exports={
    url:'',
    elements:{
        addCardBtn:'.js-add-a-card',
        cardText:'.list-card-details textarea',
        addCardToList:'.cc-controls-section input',
        cardLabel:'.list-card-title',
    },
    commond:[{
        clickOnCreateCard(){
            this.pause(1000);
            return this
            .click('@addCardBtn'); 
        },
        enterCardname(value){
            this.pause(1000);
            return this.setValue('@cardText',value);
        },
        clickOnCreateCardButton(){
            this.pause(1000);
            return this.click('@addCardToList');
        },
        checkCardlabel(){
            this.pause(1000);
            return this.getText('@cardLabel');
        }
    }]
}
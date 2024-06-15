module.exports={
    url:'',
    elements:{
        listName: '.list-name-input',
        addListButton:'.list-add-controls input',
        listLabel:'.list-header textarea',
    },
    commond:[{
        enterListname(value){
            this.pause(1000);
            return this.setValue('@listName',value);
        },
        clickOnCreateListButton(){
            this.pause(1000);
            return this.click('@addListButton');
        },
        checkListlabel(){
            this.pause(1000);
            return this.getText('@listLabel');
        }
    }]
}
module.exports={
    url:'',
    elements:{
        createBoard:'li[data-test-id="create-board-tile"]',
        boardName:'input[data-test-id="create-board-title-input"]',
        createBoardButton: 'button[data-test-id="create-board-submit-button"]',
        createdBoardName: '.mod-board-name',
    },
    commond:[{
        clickOnCreateBoard(){
            return this
            .click('@createBoard'); 
        },
        enterBoardname(value){
            this.pause(1000);
            return this.setValue('@boardName',value);
        },
        clickOnCreateBoardButton(){
            this.pause(1000);
            const board = this.click('@createBoardButton');
            this.pause(2000)
            return this;
        },
        checkBoardlabel(){
            this.pause(1000);
            return this.getText('@createdBoardName');
        }
    }]
}
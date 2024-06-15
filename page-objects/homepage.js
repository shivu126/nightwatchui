module.exports={
    url:'',
    elements:{
        signInLink:'a[href="/login"]',
        username:'#user',
        password:'#password',
        loginWithAtlassian:'#login',
        loginButton:'#login-submit',
        createBoard:'li[data-test-id="create-board-tile"]',
        boardName:'input[data-test-id="create-board-title-input"]',
        createBoardButton: 'button[data-test-id="create-board-submit-button"]',
        createdBoardName: '.mod-board-name',
        listName: '.list-name-input',
        addListButton:'.list-add-controls input',
        listLabel:'.list-header textarea',
        addCardBtn:'.js-add-a-card',
        cardText:'.list-card-details textarea',
        addCardToList:'.cc-controls-section input',
        cardLabel:'.list-card-title',
    },
    commands:[{
        clickSignInLink(){
            return this
            .click('@signInLink');
        },
        enterUserName(value){
            this.waitForElementVisible('@username');
            this.pause(3*1000);
            return this.setValue('@username',value);
        },
        clickOnloginWithAtlassian(){
            this.waitForElementVisible('@loginWithAtlassian');
            this.pause(3*1000);
            return this
            .click('@loginWithAtlassian');
        },
        enterPassword (value){
            this.waitForElementVisible('@password');
            this.pause(3*1000);
            return this.setValue('@password',value);
        },
        clickLoginButton(){
            this.waitForElementVisible('@loginButton');
            this.pause(3*1000);
            const click= this.click('@loginButton');
            return click;
        },
        clickOnCreateBoard(){
            this.waitForElementVisible('@createBoard');
            return this
            .click('@createBoard'); 
        },
        enterBoardname(value){
            this.waitForElementVisible('@boardName');
            this.pause(3*1000);
            return this.setValue('@boardName',value);
        },
        clickOnCreateBoardButton(){
            this.waitForElementVisible('@createBoardButton');
            this.pause(5*1000);
            return this.click('@createBoardButton');
        },
        enterListname(value){
            this.waitForElementVisible('@listName');
            this.pause(5*1000);
            return this.setValue('@listName',value);
        },
        clickOnCreateListButton(){
            this.waitForElementVisible('@addListButton');
            this.pause(5*1000);
            return this.click('@addListButton');
        },
        checkListlabel(){
            this.waitForElementVisible('@listLabel');
            this.pause(5*1000);
            return this.getText('@listLabel');
        },
        clickOnCreateCard(){
            this.waitForElementVisible('@addCardBtn');
            this.pause(5*1000);
            return this
            .click('@addCardBtn'); 
        },
        enterCardname(value){
            this.waitForElementVisible('@cardText');
            this.pause(5*1000);
            return this.setValue('@cardText',value);
        },
        clickOnCreateCardButton(){
            this.waitForElementVisible('@addCardToList');
            this.pause(5*1000);
            return this.click('@addCardToList');
        },
        checkCardlabel(){
            this.waitForElementVisible('@cardLabel');
            this.pause(5*1000);
            return this.getText('@cardLabel');
        }
    }]

}
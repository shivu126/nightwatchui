module.exports={
    before: function (browser) {
       browser.maximizeWindow();
    },
    after: function (browser) {
        browser.end();
    },
    'Create Card':function (browser){
        browser.page.homepage()
        .navigate()
        .clickSignInLink().enterUserName(browser.globals.username)
        .clickOnloginWithAtlassian()
        .enterPassword(browser.globals.password)
        .clickLoginButton()
        .clickOnCreateBoard()
        .enterBoardname(browser.globals.boardName)
        .clickOnCreateBoardButton()
        .enterListname(browser.globals.listName)
        .clickOnCreateListButton()
        .clickOnCreateCard()
        .enterCardname(browser.globals.cardName)
        .clickOnCreateCardButton();
        browser.page.homepage().expect.element('@cardLabel').text.to.equal(browser.globals.cardName);
    }
}
Feature('Add person');

Scenario('add a john doe the janitor to the list', (I) => {
    
    //go to the page that we are testing
    I.amOnPage('/');
    
    //start the profiler
    I.startProfiling();

    //assertion on initial page
    I.see('React Tutorial');
    I.dontSee('john doe');
    I.dontSee('janitor');

    //optional: save screenshot for manual verification
    I.saveScreenshot('InitialPage.png');

    //do the action of entering data
    I.fillField('Name', 'john doe');
    I.fillField('Job', 'janitor');

    //optional: save screenshot for manual verification
    I.saveScreenshot('EnteringData.png');

    //do the action of submitting data
    I.click('Submit');

    //assertion that data have been entered successfully in the table section
    I.see('john doe', 'table');
    I.see('janitor', 'table');

    //optional: save screenshot for manual verification
    I.saveScreenshot('AfterSubmit.png');

    //stop the profiler
    I.stopProfiling();
});

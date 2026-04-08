import selectablePage from '../pages/selectablePage';

describe('Selectable Grid Test', () => {

  it('should select correct grid items', () => {

    selectablePage.visit();       
    selectablePage.clickGrid();  

    const selected = ['Two', 'Four', 'Six', 'Eight'];
    const notSelected = ['One', 'Three', 'Five', 'Seven', 'Nine'];

    
    selected.forEach(item => selectablePage.clickItem(item));

    selected.forEach(item => selectablePage.validateSelected(item));

    
    notSelected.forEach(item => selectablePage.validateNotSelected(item));

  });

});
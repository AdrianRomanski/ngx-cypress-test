
function selectDayFromCurrent(day: number) {
    const date = new Date();
    date.setDate(date.getDate() + day);
    const futureDay = date.getDate();
    const futureMonth = date.toLocaleString('default', {month: 'short'});
    const dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear();
    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
        if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]').click();
            selectDayFromCurrent(day);
        } else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click();
        }
    });
    return dateAssert;
}

export class DatepickerPage {

    selectCommonDatepickerDateFromToday(dayFromToday: any) {
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click();
            const dateAssert = selectDayFromCurrent(dayFromToday);
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert);
            cy.wrap(input).should('have.value', dateAssert);
        });
    }

    selectDatepickerWithRangeFromToday(firstDay: any, secondDay: any) {
        cy.contains('nb-card', 'Datepicker With Range').find('input').then( input => {
            cy.wrap(input).click();
            const dateAssertFirst = selectDayFromCurrent(firstDay);
            const dateAssertSecond = selectDayFromCurrent(secondDay);
            const finalDate = dateAssertFirst + ' - ' + dateAssertSecond;
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate);
            cy.wrap(input).should('have.value', finalDate);
        });
    }


}

export const onDatePickerPage = new DatepickerPage();

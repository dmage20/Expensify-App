import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should return 0 when no expenses', () => {
    const res = expensesTotal([])
    expect(res).toBe(0)
})

test('should return the total of one expense', () =>{
    const res = expensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test('should return total sum of multiple expenses', () =>{
    const res = expensesTotal(expenses)
    expect(res).toBe(109500+4500+195)
})

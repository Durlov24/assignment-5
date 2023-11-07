document.getElementById('player-button').addEventListener('click', function () {
    const playerTittle = document.getElementById('player-tittle1');
    const playerTittleString = playerTittle.innerText;
    const playerName = document.getElementById('player-name1');
    const playerNameString = playerName.innerText;
    playerTittleString = playerNameString;
})


// Budget/* Budget part */
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerField = document.querySelector('#per-player').value;
    const playerExpensefield = document.getElementById('player-expense');
    const playerExpenseString = playerExpensefield.innerText;
    const playerExpense = perPlayerField * 5;
    playerExpenseString = playerExpense;
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = document.getElementById('manager').value;
    const coachCost = document.getElementById('coach').value;
    const totalField = document.getElementById('total-expense').innerText;
    const totalCost = playerExpense + managerCost + coachCost;
    totalField = totalCost;

})

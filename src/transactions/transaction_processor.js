function processTransactions(transActions) {
    let txCount = {};
    transActions.sort().forEach(el => txCount[el] ? txCount[el] += 1 : txCount[el] = 1);
    return Object.entries(txCount).sort((a,b) => b[1]-a[1]).map(el => el.join(' '));
}
 

module.exports = processTransactions;
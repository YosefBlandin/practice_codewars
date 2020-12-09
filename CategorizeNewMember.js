function openOrSenior (stats) {
    let senior = 'Senior'
    let open = 'Open'
    let result = []
    stats.forEach(el => {
        let years = el[0]
        let handicap = el[1]
        years >= 55 && handicap > 7 ? result.push(senior): result.push(open);
        });
        return result
    }
    openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])

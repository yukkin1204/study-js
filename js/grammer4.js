// 文法4　条件分岐

// 4-1 if文
const printSign = number => {
    if (number > 0) {
        console.log(`${number}は正です`);
    } else if (number < 0) {
        console.log(`${number}は負です`);
    } else {
        console.log(`${number}は0です`);
    }
};
printSign(1);
printSign(-1);
printSign(0);

// 4-2 switch文
// caseの終わりにbreak(またはreturn)を忘れないこと
const printECMAScriptName = version => {
    switch (version) {
        case 'ES5':
            console.log('ECMAScript 5');
            break;
        case 'ES6':
            console.log('ECMAScript 2015');
            break;
        case 'ES7':
            console.log('ECMAScript 2016');
            break;
        default:
            console.log('知らないバージョンです');
    }
};
printECMAScriptName('ES5');
printECMAScriptName('ES6');
printECMAScriptName('ES7');
printECMAScriptName('ES8');



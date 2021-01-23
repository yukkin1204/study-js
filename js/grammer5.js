// 文法5　反復処理

// 5-1 while文
let number = 0;
while (number < 3) {
    console.log(number);
    number++;
}

// 5-2 do-while文
// 最初から条件を満たさなくても必ず一度は実行される (非推奨)
let number2 = 5;
do {
    console.log(number2);
    number2++;
} while (number2 < 3);

// 5-3 for文
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// 5-4 break文とcontinue文
let numbers2 = [2, 5, 4, 6, 7, 0, 8];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 !== 0) {
        // skipして次のループへ
        continue;
    } else if (numbers2[i] === 0) {
        // ループから抜け出す
        break;
    }
    console.log(numbers2[i]);
}

// 5-5 for-of文
// インデックスを使わず、中身を順番に取り出す繰り返し (iterableオブジェクトに対し使える)
let numbers3 = [1, 2, 3];
for (const value of numbers3) {
    console.log(value);
}

let text = '桑原幸大'
for (const value of text) {
    console.log(value);
}








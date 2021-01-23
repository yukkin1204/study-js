// 文法2　演算子

// 2-1 算術用の演算子
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2); // 2.5
console.log(Math.floor(5 / 2)); // 商
console.log(5 % 2); // 余り
console.log(5 ** 2); //累乗

a = 1;
b = 1;
c = 1;
console.log(a++); // 出力後にインクリメント
console.log(a);
console.log(++b); // インクリメント後に出力
console.log(c += 2); // 足した後に出力

// 2-2 比較演算子
// 厳密等価演算子
console.log(1 === 1); // true
console.log('1' === '1'); // true
console.log(1 === '1'); // false (型が異なるため)
console.log([1] === [1]); // false (オブジェクトの参照先が異なるため)
console.log(1 !== 1); // false

// 等価演算子 (暗黙的な型変換をするため、使うべきでない)
console.log(1 == 1); // true
console.log('1' == '1'); // true
console.log(1 == '1'); // true
console.log(1 == true); // true
console.log([1] == [1]); // false
console.log(1 != 1); // false

// 大小比較
console.log(41 < 42); // true
console.log(41 >= 42); // false

// 2-3 論理演算子
console.log(1 > 0 && -1 > 0); // false
console.log(1 > 0 || -1 > 0); // true
console.log(!true); // false.

// 2-4 三項演算子 (便利だが可読性は低下)
const x = true ? "正" : "誤";
const y = false ? "正" : "誤";
console.log(x); // "正"
console.log(y); // "誤"

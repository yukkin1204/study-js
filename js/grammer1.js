// 文法1　変数と型

// 1-1 変数
const a = '再代入も再定義もできない変数';
let b = '再代入できるが、再定義できない変数';
var c = '再代入も再定義もできる変数(非推奨)';

// 1-2 プリミティブ型
// Boolean, Number, String, undefined, null, Symbol の6種類

console.log(typeof true);

console.log(typeof 1);
console.log(typeof 1.23);
console.log(0b1111); // 2進数
console.log(123e-2); // 1.23

console.log(typeof 'a'); // "a"もOK

// テンプレートリテラル
// 複数行の文字列を書くことができ、また、変数の埋め込みも可能
const str = '文字列';
const text = 
`複数行の
${str}に
対応`;
console.log(text);

// 1-3 オブジェクト型(プリミティブ型以外)
// オブジェクトリテラル
const obj = {
    key1: 'value1',
    key2: 'value2'
};
console.log(typeof obj) ;
console.log(obj.key1); // ドット記法(こちらの方が好き)
console.log(obj['key2']); // ブラケット記法

// 配列リテラル
const array = ['blue', 'yellow', 'red'];
console.log(typeof array);
console.log(array[0]);

// 1-4 明示的な型変換
// 勝手に行われる暗黙的な型変換はなるべく避けよう
console.log(String(1)); // Number→String
console.log(Number('1')); // String→Number
console.log(Number('a')); // NaNになる (Not a Number)
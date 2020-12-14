// 1.コメントの書き方
// コメント

// 2.変数
const a = '再代入できない変数';
let b = '再代入できる変数';
var c = '非推奨な変数';
console.log(a); //出力

// 3.プリミティブ型(boolean, number, stringなど)
console.log(typeof true); // 型調べ

console.log(typeof 1);
console.log(0b1111); // 2進数
console.log(typeof 1.23);
console.log(123e-2); // 1.23

console.log(typeof 'a'); // "a"もOK

// テンプレートリテラル
// 複数行の文字列を書けるだけでなく、変数の埋め込みも可能
const str = '文字列';
const text = 
`複数行の
${str}に
対応`;
console.log(text);

// 4.オブジェクトリテラル
const obj = {
    key1: 'value1',
    key2: 'value2'
};
console.log(typeof obj) ;
console.log(obj.key1); // ドット記法(こちらの方が好き)
console.log(obj['key2']); // ブラケット記法

// 5.配列リテラル
const array = ['blue', 'yellow', 'red'];
console.log(typeof array);
console.log(array[0]);
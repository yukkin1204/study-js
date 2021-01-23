// 文法3　関数

// 3-1 関数宣言
function add(a, b) {
    return a + b;
}
console.log(add(2, 1));
// 仮引数より実引数のほうが少ない場合、余った仮引数にはundefinedが代入される
// 仮引数より実引数のほうが多い場合、余った実引数は無視される

// 3-2 デフォルト引数
function introduce(name = 'Kuwabara') {
    console.log(`私の名前は${name}です`);
}
introduce(); // 実引数が書かれていない場合、デフォルトの値が代入される
introduce('Yoshino'); // 実引数が書かれている場合、その値が代入される

// 3-3 Rest parameters
// 可変長引数を実現するための方法として、Rest parametersと呼ばれるものがある
function f(arg1, ...restArgs) {
    console.log(arg1);
    console.log(restArgs); // Rest parametersをまとめた配列が代入される
}
f('a', 'b', 'c'); // a と ['b', 'c']が出力される
f('a', 'b', 'c', 'd'); // a と ['b', 'c', 'd']が出力される

// Spread構文
function sum(x, y, z) {
    return x + y + z;
}
const numArray = [1, 2, 3];
console.log(sum(...numArray)); // 配列の各要素を実引数とする

// 3-4 関数式
// 関数式とは関数を値として変数に代入している式のことである
// 右辺の関数は名前がないことから無名関数と呼ばれる (addFuncは関数名ではなく変数名)
// 関数宣言による関数は定義より前の行で呼び出せるが、関数式による関数は定義より前の行では呼び出せない
const add2 = function(a, b) {
    return a + b;
};
// 文末の ; を忘れないように注意が必要
// ブロックで終わる文にはセミコロン不要だが、無名関数は式であり宣言文の一部なので、これはブロックでない
console.log(add2(2,3));

// 3-5 Arrow関数
// 関数式はfunctionキーワードを使った書き方の他に、=>を用いたArrow関数と呼ばれる書き方がある
const introduce2 = (name) => {
    console.log(`私の名前は${name}です`);
};
introduce2('Kuwabara');

// Arrow関数は仮引数が1つのときに()を省略できる
// 関数の処理が1つの式のときにブロックとreturnを省略できる(その式の結果をreturnする)
const multi = a => a * a;
console.log(multi(3));

// 3-6 コールバック関数
// 関数を関数の引数として渡すことができる
// 引数として渡される関数をコールバック関数と呼ぶ
// コールバック関数は非同期処理でよく用いられる
function introduce3(callback, name) {
    console.log(`自己紹介をします`);
    callback(name);
}

const hoge = (name) => {
    console.log(`私の名前は${name}だよ`);
};

const fuga = (name) => {
    console.log(`私の名前は${name}ですわ`);
};

introduce3(hoge, 'Kuwabara');
introduce3(fuga, 'Nishikawa');

// 3-7 メソッド
// オブジェクトのプロパティである関数をメソッドと呼ぶ
const calc = {
    // key-value の value が無名関数
    add: function(a, b) {
        return a + b
    },
    // メソッドの短縮記法
    minus(a, b) {
        return a - b
    }
};
console.log(calc.add(3, 2))
console.log(calc.minus(3, 2))

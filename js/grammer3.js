// 文法3　関数

// 3-1. 関数
function add(a, b) {
    return a + b;
}
console.log(add(2, 1));
// 仮引数より実引数のほうが少ない場合、余った仮引数にはundefinedが代入される
// 仮引数より実引数のほうが多い場合、余った実引数は無視される

// 3-2. デフォルト引数
function introduce(name = 'Kuwabara') {
    const text = `私の名前は${name}です`;
    console.log(text);
}
introduce(); // 実引数が書かれていない場合、デフォルトの値が代入される
introduce('Yoshino'); // 実引数が書かれている場合、その値が代入される

// 3-3. Rest parametersと可変長引数


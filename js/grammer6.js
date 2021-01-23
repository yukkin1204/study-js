// 文法6　オブジェクト

// 6-1 オブジェクトの基本
// オブジェクトはキーとバリューの対が集まったものである
const obj = {
    'key1': 'value1',
    // キーの''は省略できる (識別子の命名規則を満たすなら)
    key2: 'value2'
};
console.log(obj)
console.log(obj.key1); // ドット記法 (識別子の命名規則を満たすなら)
console.log(obj['key1']); // ブラケット記法

// プロパティの追加 (基本的には初期化以降追加すべきでない)
obj.key3 = 'value3';
console.log(obj);

// プロパティの削除
delete obj.key2;
console.log(obj);

// 6-2 プロパティが存在するかどうか
// 方法1 in演算子 (親も辿り、プロパティが存在するか確認する)
console.log('key1' in obj);
console.log('key4' in obj);

// 方法2 hasOwnPropertyメソッド (オブジェクト自身がそのプロパティをもつか)
console.log(obj.hasOwnProperty('key1'));
console.log(obj.hasOwnProperty('key4'));

// 6-3 オブジェクトのメソッド
const obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
console.log(Object.keys(obj2)); // キーを並べた配列を返す
console.log(Object.values(obj2)); // バリューを並べた配列を返す
console.log(Object.entries(obj2)); // [キー, バリュー]を並べた配列を返す

// オブジェクトのマージ
const objA = {a: 'a'};
const objB = {b: 'b'};

const merged = Object.assign({}, objA, objB);
console.log(merged); // objectAとobjectBをマージしたものを{}に入れている
console.log(objA); // 変化なし
console.log(objB); // 変化なし

const merged2 = Object.assign(objA, objB);
console.log(merged2); // objectAとobjectBをマージしたものをobjectAに入れている
console.log(objA); // merged2と同じ
console.log(objB); // 変化なし

// オブジェクトの複製 (マージを用いて行う)
const obj3 = {
    key1: 'value1',
    key2: 'value2'
};
const clone = Object.assign({}, obj3);
console.log(clone);
console.log(obj3 === clone); // オブジェクトとしては異なるのでfalse



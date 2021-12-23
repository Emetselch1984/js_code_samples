// https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8
// からのコード

// 個々の値に展開
const data = [15, -3, 78, 1];
console.log(Math.max(...data));    // 78

// もう以下のように書く必要はありません
console.log(Math.max.apply(null, data));

// 配列の複製
const ary = ['Pen', 'Pineapple', 'apple'];
const myAry = [...ary];

console.log(ary === myAry);    // false
console.log(myAry);            // ["Pen","Pineapple","apple"]

const data1 = [1, 2, 3];
const data2 = ['d', 'e', 'f'];
data1.push(...data2);
console.log(data1);    // [1,2,3,"d","e","f"]

data1.unshift(...data2);
console.log(data1);    // ["d", "e", "f", 1, 2, 3]

const merged = ['あ', ...data1, 'い', ...data2, 'う'];
console.log(merged);    // ["あ",1,2,3,"い","d","e","f","う"]

// 配列の分割

let [a, b, ...other] = [1, 2, 3, 4, 5];

console.log(a);        // 1
console.log(b);        // 2
console.log(other);    // [3, 4, 5]

// 文字列を配列にする
const word = 'JavaScriptプログラミング';
const converted = [...word];

console.log(converted);    // ["J","a","v","a","S","c","r","i","p","t","プ","ロ","グ","ラ","ミ","ン","グ"]

// 配列から重複を取り除く
const data = ['a', 'b', 'c', 'a', 'b', 'd'];
const dist = [...(new Set(data))];

console.log(dist);    // ["a","b","c","d"]

const sum = (...nums) => nums.reduce((p, c) => p + c);

console.log(sum(1, 2, 3, 4, 5));     // 15

const elems = document.getElementByClassName('checkboxClassName');

// 取得した **NodeList** から、**checked** プロパティが **true** かつ **class** プロパティに **'foo'** が含まれているものを抽出します。
const filtered = [...elems].filter(el => el.checked && el.classList.contains('foo'));

const setCheckBox = (name, ...values) => {
    const elems = document.getElementsByName(name);
    elems.forEach(el => el.checked = values.includes(el.value));
}

setCheckBox('fruits', 'apple', 'banana');    // value が 'apple' 、'banana' のチェックボックスをチェックします。


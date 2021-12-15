let user = {
    name:'山田太郎',
    age:27,
    address:'東京都',
    hobby:['読書', 'スポーツ'],
    getAge:function(){
        return this.age;
    }
}

let obj = new Object();
obj = {
    name:'山田太郎',
    age:27,
    address:'東京都',
    hobby:['読書', 'スポーツ'],
    getAge:function(){
        return this.age;
    }
}

console.log(user.getAge())
console.log(obj);

let mybox = {
    width:400,
    height:300
};
mybox.color = '#FF0000';  // 新しいプロパティを追加
delete mybox.height;  // プロパティを削除
console.log(mybox)

console.log(mybox.hasOwnProperty('width'));
console.log(mybox.hasOwnProperty('height'));

for (key in user){
    console.log('user.'+ key + '=' + user[key]);
}
for (key in user) {
    console.log('user.'+ key + '=' + user[key])
}

let keyArray = Object.keys(user);
console.log(keyArray);
keyArray.forEach(function(element){
    console.log(user[element]);
});
keyArray.forEach(function (element) {
    console.log(user[element])
})

let valueArray = Object.values(user);
console.log(valueArray);

let propertyArray = Object.entries(user);
propertyArray.forEach(function(element){
    console.log(element);
});

let userArray = [
    ['name', '山田太郎'],
    ['age', 32],
    ['address', '大阪府']
];

let userObj = Object.fromEntries(userArray);

console.log(userObj);

const user = {
    name:'山田太郎',
    age:32,
    address:'大阪府'
};

Object.freeze(user);

user.address = '東京都'; // プロパティの値を変更する
console.log(user);

let objA = {a:'Ant'};
let objB = {b:'bee'};
let objC = {c:'cicada'};
let allObj = Object.assign(objA, objB, objC);

console.log(allObj);
//コピー先オブジェクトも変更される
console.log(objA);

let objD = {a:'Ant'};
let objE = {b:'bee'};
let objF = {c:'cicada'};
let allObjB = Object.assign({}, objD, objE, objF);

console.log(allObjB);
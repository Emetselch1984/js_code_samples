const counter = ref(0) // 0 は object になり、valueプロパティでアクセスできる

// counter.value が変更されたら、effectの引数に渡した関数が自動で再実行される
let double = 0
effect(() => {
double = counter.value * 2
})

console.log(double) // 0
counter.value = 5
console.log(double) // 10 <- Changed!
fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));

// POST メソッドの実装の例
async function postData(url = '', data = {}) {
    // 既定のオプションには * が付いています
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    return response.json(); // レスポンスの JSON を解析
}

postData('https://example.com/answer', { answer: 42 })
    .then(data => {
        console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
    });

// 認証情報つきのリクエストの送信
fetch('https://example.com', {
    credentials: 'include'
});
// 同一オリジン
fetch('https://example.com', {
    credentials: 'same-origin'
});
// リクエストにクレデンシャルを含んでいない
fetch('https://example.com', {
    credentials: 'omit'
})

// JSONデータのアップロード
const data = { username: 'example' };

fetch('https://example.com/profile', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

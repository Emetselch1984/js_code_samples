let request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if (request.readyState == 4){
        // 受信したデータの処理を記述する
        if (request.status == 200){
            // 受信したデータの処理を記述する
        }
    }
};

request.open('GET', 'https://www.example.com/data.txt', true);

let request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if (request.readyState == 4){
        if (request.status == 200){
            let data = request.responseText;
            console.log(data);
        }
    }
}

request.open('GET', 'https://www.example.com/data.txt', true);
request.send(null);
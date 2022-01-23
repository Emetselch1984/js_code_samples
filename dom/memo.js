function getElements() {
    let element = document.getElementById('box');
    let children = element.childNodes;
    let len = children.length

    console.log("ノード数:" + len)
    for (let i = 0 ; i < len; i++){
        console.log(children.item(i).nodeName);
    }
}

function getElements() {
    let element = document.getElementById('box');
    let echildren = element.children;
    let len = echildren.length

    console.log("ノード数:" + len)
    for (let i = 0 ; i < len; i++){
        console.log(echildren.item(i).textContent);
    }
}
function getElements(){
    let elements = document.querySelectorAll("#blog div p");
    let len = elements.length;
    for (let i = 0; i < len; i++){
        let value = elements.item(i).firstChild.nodeValue;
        elements.item(i).firstChild.nodeValue = '【'+ value +'】'
    }

}


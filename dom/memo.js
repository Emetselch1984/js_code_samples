function getElements() {
    let element = document.getElementById('box');
    let children = element.childNodes;
    let len = children.length

    console.log("ノード数:" + len)
    for (let i = 0 ; i < len; i++){
        console.log(children.item(i).nodeName);
    }
}
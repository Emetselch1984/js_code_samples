// 置き換え前
function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// プロミスで置き換え
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// 置き換え前
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

// 置き換え

doSomething()
    .then(function(result) {
        return doSomethingElse(result);
    })
    .then(function(newResult) {
        return doThirdThing(newResult);
    })
    .then(function(finalResult) {
        console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);
// アローバック関数
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);
// async/await
async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
        failureCallback(error);
    }
}

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
    .then(() => {
        throw new Error('Something failed');

        console.log('Do this');
    })
    .catch(() => {
        console.error('Do that');
    })
    .then(() => {
        console.log('Do this, no matter what happened before');
    });

const promise = new Promise(function(resolve, reject) {
    console.log("Promise callback");
    resolve();
}).then(function(result) {
    console.log("Promise callback (.then)");
});

setTimeout(function() {
    console.log("event-loop cycle: Promise (fulfilled)", promise)
}, 0);

console.log("Promise (pending)", promise);


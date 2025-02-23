// setTimeout을 사용하여 1초 후에 "Hello, Async/Await!" 메시지를 반환하는 async 함수 waitForMessage를 만들어보세요.
// 그리고 이 함수를 사용하여 메시지를 콘솔에 출력해 보세요.

async function waitForMessage() {
    try {
        const message = await setTimeout(() => {
            console.log("Hello, Async/Await!");
        }, 1000);
    } catch(error) {
        console.log(error);
    }
}

waitForMessage();
function waitTwoseconds(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(
                "hoan thanh sau hai giay"
            )
        }, 2000);
    })
}

async function waitTwoseconds(){
    console.log("ok");
    const result = await waitTwoseconds();
    console.log(result);
}


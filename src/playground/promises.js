

const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        // resolve('This is my resolved data');
        // reject('something went wrong')
    }, 5000);
});

// console.log('before')
// promise.then((data) => {
//     // console.log(data);
// }).catch((data) =>{
//     console.log('error',data)
// })
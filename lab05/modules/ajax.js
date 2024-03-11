class Ajax {
    // post(url, callback) {
    //     let xhr = new XMLHttpRequest()
    //     xhr.open('POST', url)
    //     xhr.send()

    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {
    //             const data = JSON.parse(xhr.response)
    //             callback(data)
    //         }
    //     }
    // }
    
    post(url) {
        const getDataFromServer = async() => {
            try {
                return await fetch(url);
            } catch(e){
                console.log(e);
            }
        }
        return getDataFromServer();
    }
}

export const ajax = new Ajax();
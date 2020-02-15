export const addGiff = (gif) => (
    {
        type: "Add_GIF",
        gif: gif
    }
);

export const getRandomGif = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=FP9R3N8tfayY6arNiUFojviyZB0iUnXI&limit=25&offset=0&rating=G&lang=en`)
            .then(res => res.json())
            .then((json) => {
                if(json.meta.status === 200){
                    resolve(json.data);
                } else {
                    reject();
                }
            })
            .catch((e) => {
                console.log(e);
            });
    });
}

export const getTrending = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=FP9R3N8tfayY6arNiUFojviyZB0iUnXI&limit=25&offset=0&rating=G&lang=en`)
        .then(res => res.json())
        .then(json => {
            if (json.meta.status === 200) {
                return resolve(json.data)
            } else {
                reject();
            }
        })
        .catch(e => {
            return reject(e);
        });
    });
}
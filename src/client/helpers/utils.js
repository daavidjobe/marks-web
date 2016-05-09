

export let formatUrl = (url) => {
    let protocol = '';
    if(url.indexOf('http') === -1) {
        protocol = 'http://';
    }
    return protocol + url;
} 
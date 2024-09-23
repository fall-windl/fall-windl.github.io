function lastModified(url, id) {
    const contentDiv = document.getElementById(id);
    fetch(url)
        .then(response => response.headers)
        .then(headers => {
            contentDiv.innerText = headers.get("Last-Modified");
        });
}
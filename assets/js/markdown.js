function markdown(url, id) {
    const markdownUrl = url;
    const markdownContentDiv = document.getElementById(id);
    fetch(markdownUrl)
        .then(response => response.text())
        .then(markdownText => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(markdownText);
            markdownContentDiv.innerHTML = html;
        });
}
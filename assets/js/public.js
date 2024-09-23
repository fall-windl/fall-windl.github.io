function header() {
    document.writeln("<div id=\'header\'></div>");
    document.writeln("<script>markdown(\'/components/header.html\', \'header\')</script>");
}
function footer() {
    document.writeln("<div id=\'footer\'></div>");
    document.writeln("<script>markdown(\'/components/footer.html\', \'footer\')</script>");
}
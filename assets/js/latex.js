window.MathJax.Hub.Config({
showProcessingMessages: false, //关闭js加载过程信息
messageStyle: "none", //不显示信息
jax: ["input/TeX", "output/HTML-CSS"],
tex2jax: {
inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
},
"HTML-CSS": {
availableFonts: ["STIX", "TeX"], //可选字体
showMathMenu: false //关闭右击菜单显示
}
});
//下面第三个参数可以不写，默认对整个html内的latex进行翻译
window.MathJax.Hub.Queue(["Typeset", MathJax.Hub,document.getElementsByClassName("ck-content")]);
document.addEventListener("DOMContentLoaded", function(event) {
    replaceInText(document);
});

function replaceInText(element) {
    for (let node of element.childNodes) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            replaceInText(node);
        } else if (node.nodeType == Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(/\b[Aa]n [Aa][Ii]\b/g, 'a love');
            node.textContent = node.textContent.replace(/\b[Aa][Ii]\b/g, 'love');
            node.textContent = node.textContent.replace(/\bOpenAI\b/g, 'OpenLove');
        }
    }
}

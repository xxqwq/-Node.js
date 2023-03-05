function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
                break;
            case '>':
                return '&gt;'
                break;
            case '"':
                return '&quot;'
                break;
            case '&':
                return '&amp;'
            default:
                break;
        }
    })
}
//还原html字符串
function htmlUnEscape(htmlStr) {

    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
                break;
            case '&gt;':
                return '>'
                break;
            case '&quot;':
                return '"'
                break;
            case '&amp;':
                return '&'
            default:
                break;
        }
    })
}
module.exports={
    htmlEscape,htmlUnEscape
}
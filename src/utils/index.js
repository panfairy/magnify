import html2canvas from "html2canvas";

export default function toCanvas (dom) {
    html2canvas(dom, {
        width: dom.offsetWidth,
        height: dom.offsetHeight,
        scale: 1,
        useCORS: true,
    }).then(canvas => {
        if (canvas) {
            document.getElementsByClassName('contain')[0].replaceChildren(canvas)
        }
    })
}

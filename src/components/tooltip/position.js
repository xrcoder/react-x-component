import get_direction from './direction';

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function getTipMaxWidth() {
    return (typeof document !== 'undefined') ? document.documentElement.clientWidth - (bodyPadding * 2) : 1000;
}

function getTipsPos(target, tip) {

    const targetRect = target.getBoundingClientRect();
    const left = targetRect.left;
    const top = targetRect.top;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const tipWidth = tip.offsetWidth;
    const tipHeight = tip.offsetHeight;

    const tipLeft = left + width / 2 - tipWidth / 2;
    const tipTop = top - tipHeight;

    return {
        tipLeft, tipTop
    }
}

export default {
    getTipsPos
}
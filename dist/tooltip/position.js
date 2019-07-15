(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/defineProperty", "./direction"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/defineProperty"), require("./direction"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.direction);
    global.position = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _direction) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getScrollLeft = getScrollLeft;
  _exports.getArrowSpacing = getArrowSpacing;
  _exports["default"] = positions;
  _exports.minArrowPadding = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _direction = _interopRequireDefault(_direction);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var minArrowPadding = 5;
  _exports.minArrowPadding = minArrowPadding;
  var bodyPadding = 0;
  var noArrowDistance = 3;

  function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  }

  function getTipMaxWidth() {
    return typeof document !== 'undefined' ? document.documentElement.clientWidth - bodyPadding * 2 : 1000;
  }

  function parseAlignMode(direction) {
    var directionArray = direction.split('-');

    if (directionArray.length > 1) {
      return directionArray[1];
    }

    return 'middle';
  }

  function getArrowSpacing(props) {
    var defaultArrowSpacing = props.arrow ? props.arrowSize : noArrowDistance;
    return typeof props.distance === 'number' ? props.distance : defaultArrowSpacing;
  }

  function getUpDownPosition(tip, target, state, direction, alignMode, props) {
    var left = -10000000;
    var top;
    var transform = state.showTip ? undefined : 'translateX(-10000000px)';
    var arrowSpacing = getArrowSpacing(props);

    if (tip) {
      var scrollLeft = getScrollLeft();
      var targetRect = target.getBoundingClientRect();
      var targetLeft = targetRect.left + scrollLeft;
      var halfTargetWidth = Math.round(target.offsetWidth / 2);
      var tipWidth = Math.min(getTipMaxWidth(), tip.offsetWidth);
      var arrowCenter = targetLeft + halfTargetWidth;
      var arrowLeft = arrowCenter - props.arrowSize;
      var arrowRight = arrowCenter + props.arrowSize;

      if (alignMode === 'start') {
        left = props.arrow ? Math.min(arrowLeft, targetLeft) : targetLeft;
      } else if (alignMode === 'end') {
        var rightWithArrow = Math.max(arrowRight, targetLeft + target.offsetWidth);
        var rightEdge = props.arrow ? rightWithArrow : targetLeft + target.offsetWidth;
        left = Math.max(rightEdge - tipWidth, bodyPadding + scrollLeft);
      } else {
        var centeredLeft = targetLeft + halfTargetWidth - Math.round(tipWidth / 2);
        var availableSpaceOnLeft = bodyPadding + scrollLeft;
        left = Math.max(centeredLeft, availableSpaceOnLeft);
      }

      var rightOfTip = left + tipWidth;
      var rightOfScreen = scrollLeft + document.documentElement.clientWidth - bodyPadding;
      var rightOverhang = rightOfTip - rightOfScreen;

      if (rightOverhang > 0) {
        left -= rightOverhang;
      }

      if (direction === 'up') {
        top = targetRect.top + getScrollTop() - (tip.offsetHeight + arrowSpacing);
      } else {
        top = targetRect.bottom + getScrollTop() + arrowSpacing;
      }
    }

    return {
      left: left,
      top: top,
      transform: transform
    };
  }

  function getLeftRightPosition(tip, target, state, direction, alignMode, props) {
    var left = -10000000;
    var top = 0;
    var transform = state.showTip ? undefined : 'translateX(-10000000px)';
    var arrowSpacing = getArrowSpacing(props);
    var arrowPadding = props.arrow ? minArrowPadding : 0;

    if (tip) {
      var scrollTop = getScrollTop();
      var scrollLeft = getScrollLeft();
      var targetRect = target.getBoundingClientRect();
      var targetTop = targetRect.top + scrollTop;
      var halfTargetHeight = Math.round(target.offsetHeight / 2);
      var arrowTop = targetTop + halfTargetHeight - props.arrowSize;
      var arrowBottom = targetRect.top + scrollTop + halfTargetHeight + props.arrowSize;

      if (alignMode === 'start') {
        top = props.arrow ? Math.min(targetTop, arrowTop) : targetTop;
      } else if (alignMode === 'end') {
        var topForBottomAlign = targetRect.bottom + scrollTop - tip.offsetHeight;
        top = props.arrow ? Math.max(topForBottomAlign, arrowBottom - tip.offsetHeight) : topForBottomAlign;
      } else {
        var centeredTop = Math.max(targetTop + halfTargetHeight - Math.round(tip.offsetHeight / 2), bodyPadding + scrollTop);
        top = Math.min(centeredTop, arrowTop - arrowPadding);
      }

      var bottomOverhang = top - scrollTop + tip.offsetHeight + bodyPadding - window.innerHeight;

      if (bottomOverhang > 0) {
        top = Math.max(top - bottomOverhang, arrowBottom + arrowPadding - tip.offsetHeight);
      }

      if (direction === 'right') {
        left = targetRect.right + arrowSpacing + scrollLeft;
      } else {
        left = targetRect.left - arrowSpacing - tip.offsetWidth + scrollLeft;
      }
    }

    return {
      left: left,
      top: top,
      transform: transform
    };
  }

  function getArrowStyles(target, tip, direction, state, props) {
    if (!target || !props.arrow) {
      return {
        top: '0',
        left: '-10000000px'
      };
    }

    var targetRect = target.getBoundingClientRect();
    var halfTargetHeight = Math.round(target.offsetHeight / 2);
    var halfTargetWidth = Math.round(target.offsetWidth / 2);
    var scrollTop = getScrollTop();
    var scrollLeft = getScrollLeft();
    var arrowSpacing = getArrowSpacing(props);
    var borderStyles = {};

    switch (direction) {
      case 'right':
        borderStyles.borderTop = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderBottom = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderRightWidth = "".concat(props.arrowSize, "px");
        borderStyles.borderRightStyle = 'solid';
        return _objectSpread({}, borderStyles, {
          top: state.showTip && tip ? targetRect.top + scrollTop + halfTargetHeight - props.arrowSize : '-10000000px',
          left: targetRect.right + scrollLeft + arrowSpacing - props.arrowSize
        });

      case 'left':
        borderStyles.borderTop = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderBottom = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderLeftWidth = "".concat(props.arrowSize, "px");
        borderStyles.borderLeftStyle = 'solid';
        return _objectSpread({}, borderStyles, {
          top: state.showTip && tip ? targetRect.top + scrollTop + halfTargetHeight - props.arrowSize : '-10000000px',
          left: targetRect.left + scrollLeft - arrowSpacing - 1
        });

      case 'up':
        borderStyles.borderLeft = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderRight = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderTopWidth = "".concat(props.arrowSize, "px");
        borderStyles.borderTopStyle = 'solid';
        return _objectSpread({}, borderStyles, {
          left: state.showTip && tip ? targetRect.left + scrollLeft + halfTargetWidth - props.arrowSize : '-10000000px',
          top: targetRect.top + scrollTop - arrowSpacing
        });

      case 'down':
      default:
        borderStyles.borderLeft = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderRight = "".concat(props.arrowSize, "px solid transparent");
        borderStyles.borderBottomWidth = "".concat(props.arrowSize, "px");
        borderStyles.borderBottomStyle = 'solid';
        return _objectSpread({}, borderStyles, {
          left: state.showTip && tip ? targetRect.left + scrollLeft + halfTargetWidth - props.arrowSize : '-10000000px',
          top: targetRect.bottom + scrollTop + arrowSpacing - props.arrowSize
        });
    }
  }

  function positions(direction, forceDirection, tip, target, state, props) {
    var alignMode = parseAlignMode(direction);
    var trimmedDirection = direction.split('-')[0];
    var realDirection = trimmedDirection;

    if (!forceDirection && tip) {
      var testArrowStyles = props.arrow && getArrowStyles(target, tip, trimmedDirection, state, props);
      realDirection = (0, _direction["default"])(trimmedDirection, tip, target, props, bodyPadding, testArrowStyles);
    }

    var tipPosition = realDirection === 'up' || realDirection === 'down' ? getUpDownPosition(tip, target, state, realDirection, alignMode, props) : getLeftRightPosition(tip, target, state, realDirection, alignMode, props);
    return {
      tip: _objectSpread({}, tipPosition),
      arrow: getArrowStyles(target, tip, realDirection, state, props),
      realDirection: realDirection
    };
  }
});
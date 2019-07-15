(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./position"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./position"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.position);
    global.direction = mod.exports;
  }
})(this, function (_exports, _position) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = direction;

  function checkLeftRightWidthSufficient(tip, target, distance, bodyPadding) {
    var targetRect = target.getBoundingClientRect();
    var deadSpace = Math.min(targetRect.left, document.documentElement.clientWidth - targetRect.right);
    return tip.offsetWidth + target.offsetWidth + distance + bodyPadding + deadSpace < document.documentElement.clientWidth;
  }

  function checkTargetSufficientlyVisible(target, tip, props) {
    var targetRect = target.getBoundingClientRect();
    var bottomOverhang = targetRect.bottom > window.innerHeight;
    var topOverhang = targetRect.top < 0;

    if (topOverhang && bottomOverhang) {
      return true;
    }

    if (target.offsetHeight > tip.offsetHeight) {
      var halfTargetHeight = target.offsetHeight / 2;
      var arrowClearance = props.arrowSize + _position.minArrowPadding;
      var bottomOverhangAmount = targetRect.bottom - window.innerHeight;
      var topOverhangAmount = -targetRect.top;
      var targetCenterToBottomOfWindow = halfTargetHeight - bottomOverhangAmount;
      var targetCenterToTopOfWindow = halfTargetHeight - topOverhangAmount;
      return targetCenterToBottomOfWindow >= arrowClearance && targetCenterToTopOfWindow >= arrowClearance;
    }

    return !bottomOverhang && !topOverhang;
  }

  function checkForArrowOverhang(props, arrowStyles, bodyPadding) {
    var scrollLeft = (0, _position.getScrollLeft)();
    var hasLeftClearance = arrowStyles.left - scrollLeft > bodyPadding;
    var hasRightClearance = arrowStyles.left + props.arrowSize * 2 < scrollLeft + document.documentElement.clientWidth - bodyPadding;
    return !hasLeftClearance || !hasRightClearance;
  }

  function direction(currentDirection, tip, target, props, bodyPadding, arrowStyles, recursive) {
    if (!target) {
      return currentDirection;
    }

    var targetRect = target.getBoundingClientRect();
    var arrowSpacing = (0, _position.getArrowSpacing)(props);
    var heightOfTipWithArrow = tip.offsetHeight + arrowSpacing + bodyPadding;
    var spaceBelowTarget = window.innerHeight - targetRect.bottom;
    var spaceAboveTarget = targetRect.top;
    var hasSpaceBelow = spaceBelowTarget >= heightOfTipWithArrow;
    var hasSpaceAbove = spaceAboveTarget >= heightOfTipWithArrow;

    switch (currentDirection) {
      case 'right':
        if (!checkLeftRightWidthSufficient(tip, target, arrowSpacing, bodyPadding) || !checkTargetSufficientlyVisible(target, tip, props)) {
          return direction('up', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
        }

        if (document.documentElement.clientWidth - targetRect.right < tip.offsetWidth + arrowSpacing + bodyPadding) {
          return 'left';
        }

        return 'right';

      case 'left':
        if (!checkLeftRightWidthSufficient(tip, target, arrowSpacing, bodyPadding) || !checkTargetSufficientlyVisible(target, tip, props)) {
          return direction('up', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
        }

        if (targetRect.left < tip.offsetWidth + arrowSpacing + bodyPadding) {
          return 'right';
        }

        return 'left';

      case 'up':
        if (!recursive && arrowStyles && checkForArrowOverhang(props, arrowStyles, bodyPadding)) {
          return direction('left', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
        }

        if (!hasSpaceAbove) {
          if (hasSpaceBelow) {
            return 'down';
          }

          if (!recursive && checkLeftRightWidthSufficient(tip, target, arrowSpacing, bodyPadding)) {
            return direction('right', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
          }
        }

        return 'up';

      case 'down':
      default:
        if (!recursive && arrowStyles && checkForArrowOverhang(props, arrowStyles, bodyPadding)) {
          return direction('right', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
        }

        if (!hasSpaceBelow) {
          if (hasSpaceAbove) {
            return 'up';
          }

          if (!recursive && checkLeftRightWidthSufficient(tip, target, arrowSpacing, bodyPadding)) {
            return direction('right', tip, target, arrowSpacing, bodyPadding, arrowStyles, true);
          }
        }

        return 'down';
    }
  }

  module.exports = exports.default;
});
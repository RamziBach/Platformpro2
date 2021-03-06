import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';
import { useSpring, animated } from 'react-spring';

let AnimatedCard = function AnimatedCard(_ref) {
  let _ref$clickable = _ref.clickable,
    clickable = _ref$clickable === void 0 ? true : _ref$clickable,
    _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? 1.5 : _ref$weight,
    children = _ref.children;

  let _useSpring = useSpring(function () {
      return {
        xys: [0, 0, 1],
        config: {
          mass: 5,
        },
        tension: 350,
        friction: 40,
      };
    }),
    _useSpring2 = _slicedToArray(_useSpring, 2),
    animatedProps = _useSpring2[0],
    setAnimatedProps = _useSpring2[1];

  let ref = useRef(null);

  let _useComponentSize = useComponentSize(ref),
    width = _useComponentSize.width,
    height = _useComponentSize.height;

  let transition = function transition(x, y, s) {
    return 'perspective(600px) rotateX('
      .concat(y, 'deg) rotateY(')
      .concat(x, 'deg) scale(')
      .concat(s, ')');
  };

  let calc = function calc(_ref2) {
    let _ref2$nativeEvent = _ref2.nativeEvent,
      offsetX = _ref2$nativeEvent.offsetX,
      offsetY = _ref2$nativeEvent.offsetY;
    let x = ((offsetX - width / 2) / 20) * weight;
    let y = (-(offsetY - height / 2) / 20) * weight;
    setAnimatedProps({
      xys: [x, y, 1.1],
    });
  };

  return React.createElement(
    animated.div,
    {
      ref: ref,
      onMouseMove: calc,
      onMouseLeave: function onMouseLeave() {
        return setAnimatedProps({
          xys: [0, 0, 1],
        });
      },
      onMouseDown: clickable
        ? function () {
            return setAnimatedProps({
              xys: [0, 0, 0.9],
            });
          }
        : null,
      style: {
        transform: animatedProps.xys.interpolate(transition),
      },
      clickable: clickable ? 1 : 0, // styles
    },
    children
  );
};

export default AnimatedCard;

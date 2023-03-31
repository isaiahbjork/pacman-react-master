function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["onEnd"],
    _excluded2 = ["id"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import io from "socket.io-client";
import PropTypes from 'prop-types';
import { EAST, NORTH, WEST, SOUTH } from './constants';
import getInitialState from './state';
import { animate, changeDirection as _changeDirection } from './game';
import Board from './Board';
import Scores from './Scores';
import AllFood from './AllFood';
import Monster from './Monster';
import Player from './Player';
import './style.scss';

var Pacman = /*#__PURE__*/function (_Component) {
  _inherits(Pacman, _Component);

  var _super = _createSuper(Pacman);

  function Pacman(props) {
    var _this;

    _classCallCheck(this, Pacman);

    _this = _super.call(this, props);
    _this.state = getInitialState();
    _this.onKey = function (evt) {
      if (evt.key === 'ArrowRight') {
        return _this.changeDirection(EAST);
      }

      if (evt.key === 'ArrowUp') {
        return _this.changeDirection(NORTH);
      }

      if (evt.key === 'ArrowLeft') {
        return _this.changeDirection(WEST);
      }

      if (evt.key === 'ArrowDown') {
        return _this.changeDirection(SOUTH);
      }

      return null;
    };
    _this.handleCommentEvent = function (direction) {
      console.log('Received comment:', direction);
    
      switch (direction) {
        case 1:
          this.changeDirection(NORTH);
          break;
        case 2:
          this.changeDirection(SOUTH);
          break;
        case 3:
          this.changeDirection(WEST);
          break;
        case 4:
          this.changeDirection(EAST);
          break;
        default:
          break;
      }
    };
    
    

    _this.timers = {
      start: null,
      animate: null
    };
    return _this;
  }

  _createClass(Pacman, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('keydown', this.onKey);
      this.timers.start = setTimeout(function () {
        _this2.setState({
          stepTime: Date.now()
        });

        _this2.step();
      }, 3000);
      this.socket = io("http://localhost:3001/");
      this.socket.on("connect", function () {
        console.log("Connected to the server");
      });
      this.socket.on("comment", this.handleCommentEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.onKey);
      clearTimeout(this.timers.start);
      clearTimeout(this.timers.animate);
      this.socket.disconnect();
    }
  }, {
    key: "step",
    value: function step() {
      var _this3 = this;

      var result = animate(this.state);
      this.setState(result);
      clearTimeout(this.timers.animate);
      this.timers.animate = setTimeout(function () {
        return _this3.step();
      }, 20);
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.setState(_changeDirection(this.state, {
        direction: direction
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onEnd = _this$props.onEnd,
          otherProps = _objectWithoutProperties(_this$props, _excluded);

      var props = _objectSpread({
        gridSize: 12
      }, otherProps);

      var monsters = this.state.monsters.map(function (_ref) {
        var id = _ref.id,
            monster = _objectWithoutProperties(_ref, _excluded2);

        return /*#__PURE__*/React.createElement(Monster, _extends({
          key: id
        }, props, monster));
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "pacman"
      }, /*#__PURE__*/React.createElement(Board, props), /*#__PURE__*/React.createElement(Scores, {
        score: this.state.score,
        lost: this.state.lost
      }), /*#__PURE__*/React.createElement(AllFood, _extends({}, props, {
        food: this.state.food
      })), monsters, /*#__PURE__*/React.createElement(Player, _extends({}, props, this.state.player, {
        lost: this.state.lost,
        onEnd: onEnd
      })));
    }
  }]);

  return Pacman;
}(Component);

export { Pacman as default };
Pacman.propTypes = {
  gridSize: PropTypes.number.isRequired,
  onEnd: PropTypes.func
};
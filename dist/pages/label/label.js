'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_wepy$page) {
  _inherits(Label, _wepy$page);

  function Label() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Label',
      usingComponents: {
        'wxc-label': '../../packages/@minui/wxc-label/dist/index',
        'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Label, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Label;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Label , 'pages/label/label'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLmpzIl0sIm5hbWVzIjpbIkxhYmVsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWEsNENBREU7QUFFZixvQkFBWTtBQUZHO0FBRlYsSyxRQU9UQyxPLEdBQVUsRTs7Ozs7NkJBQ0Q7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQVhnQyxlQUFLQyxJOztrQkFBbkJQLEsiLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0xhYmVsJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHt9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==
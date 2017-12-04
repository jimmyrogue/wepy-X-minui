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

var Price = function (_wepy$page) {
  _inherits(Price, _wepy$page);

  function Price() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Price);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Price.__proto__ || Object.getPrototypeOf(Price)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'price',
      usingComponents: {
        'wxc-price': '../../packages/@minui/wxc-price/dist/index'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Price, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Price;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Price , 'pages/price/price'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlLmpzIl0sIm5hbWVzIjpbIlByaWNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUZWLEssUUFNVEMsTyxHQUFVLEU7Ozs7OzZCQUNEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUFWZ0MsZUFBS0MsSTs7a0JBQW5CUCxLIiwiZmlsZSI6InByaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpY2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdwcmljZScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1wcmljZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXByaWNlL2Rpc3QvaW5kZXgnLFxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge31cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19
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

var Toast = function (_wepy$page) {
  _inherits(Toast, _wepy$page);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'toast',
      usingComponents: {
        'wxc-toast': '../../packages/@minui/wxc-toast/dist/index'
      }
    }, _this.data = {
      isShow: false
    }, _this.methods = {
      showToast: function showToast(index) {
        var toastComponent = this.$wxpage.selectComponent('.wxc-toast' + index);
        toastComponent && toastComponent.show();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Toast;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/toast/toast'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpc1Nob3ciLCJtZXRob2RzIiwic2hvd1RvYXN0IiwiaW5kZXgiLCJ0b2FzdENvbXBvbmVudCIsIiR3eHBhZ2UiLCJzZWxlY3RDb21wb25lbnQiLCJzaG93IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHFCQUFhO0FBREU7QUFGVixLLFFBTVRDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSyxRQUdQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixlQUFlSCxLQUE1QyxDQUFyQjtBQUNBQywwQkFBa0JBLGVBQWVHLElBQWYsRUFBbEI7QUFDRDtBQUpPLEs7Ozs7OzZCQU1EO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUFsQmdDLGVBQUtDLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndG9hc3QnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtdG9hc3QnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10b2FzdC9kaXN0L2luZGV4JyxcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGlzU2hvdzogZmFsc2VcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dUb2FzdChpbmRleCkge1xuICAgICAgICBsZXQgdG9hc3RDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXRvYXN0JyArIGluZGV4KTtcbiAgICAgICAgdG9hc3RDb21wb25lbnQgJiYgdG9hc3RDb21wb25lbnQuc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19
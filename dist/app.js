'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/avatar/avatar', 'pages/badge/badge', 'pages/elip/elip', 'pages/label/label', 'pages/loadmore/loadmore', 'pages/price/price', 'pages/progress/progress', 'pages/dialog/dialog', 'pages/popup/popup', 'pages/toast/toast'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzTEFHRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwscUJBRkssRUFHTCxtQkFISyxFQUlMLGlCQUpLLEVBS0wsbUJBTEssRUFNTCx5QkFOSyxFQU9MLG1CQVBLLEVBUUwseUJBUkssRUFTTCxxQkFUSyxFQVVMLG1CQVZLLEVBV0wsbUJBWEssQ0FEQTtBQWNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBZEQsSzs7Ozs7K0JBc0JFO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7Ozs7RUF6QjBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAncGFnZXMvYXZhdGFyL2F2YXRhcicsXHJcbiAgICAgICAgJ3BhZ2VzL2JhZGdlL2JhZGdlJyxcclxuICAgICAgICAncGFnZXMvZWxpcC9lbGlwJyxcclxuICAgICAgICAncGFnZXMvbGFiZWwvbGFiZWwnLFxyXG4gICAgICAgICdwYWdlcy9sb2FkbW9yZS9sb2FkbW9yZScsXHJcbiAgICAgICAgJ3BhZ2VzL3ByaWNlL3ByaWNlJyxcclxuICAgICAgICAncGFnZXMvcHJvZ3Jlc3MvcHJvZ3Jlc3MnLFxyXG4gICAgICAgICdwYWdlcy9kaWFsb2cvZGlhbG9nJyxcclxuICAgICAgICAncGFnZXMvcG9wdXAvcG9wdXAnLFxyXG4gICAgICAgICdwYWdlcy90b2FzdC90b2FzdCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb24gbGF1bmNoJylcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=
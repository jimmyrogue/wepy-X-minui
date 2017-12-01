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

var Avatar = function (_wepy$page) {
  _inherits(Avatar, _wepy$page);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'avatar',
      usingComponents: {
        'wxc-avatar': '../../packages/@minui/wxc-avatar/dist/index'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Avatar;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Avatar , 'pages/avatar/avatar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5qcyJdLCJuYW1lcyI6WyJBdmF0YXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYztBQURDO0FBRlYsSyxRQU1UQyxPLEdBQVUsRTs7Ozs7NkJBQ0Q7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQVZpQyxlQUFLQyxJOztrQkFBcEJQLE0iLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnYXZhdGFyJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWF2YXRhcic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWF2YXRhci9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge31cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19
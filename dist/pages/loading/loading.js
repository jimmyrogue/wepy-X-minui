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

var Loading = function (_wepy$page) {
  _inherits(Loading, _wepy$page);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'loading',
      usingComponents: {
        'wxc-loading': '../../packages/@minui/wxc-loading/dist/index'
      }
    }, _this.data = {}, _this.methods = {
      showLoading: function showLoading(index) {
        var loadingComponent = this.$wxpage.selectComponent('.wxc-loading' + index);
        loadingComponent && loadingComponent.show();

        setTimeout(function () {
          loadingComponent && loadingComponent.hide();
        }, 2000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Loading;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Loading , 'pages/loading/loading'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsInNob3dMb2FkaW5nIiwiaW5kZXgiLCJsb2FkaW5nQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixTQURqQjtBQUVQQyx1QkFBaUI7QUFDZix1QkFBZTtBQURBO0FBRlYsSyxRQU1UQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLEtBREosRUFDVztBQUNqQixZQUFJQyxtQkFBbUIsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGlCQUFpQkgsS0FBOUMsQ0FBdkI7QUFDQUMsNEJBQW9CQSxpQkFBaUJHLElBQWpCLEVBQXBCOztBQUVBQyxtQkFBVyxZQUFNO0FBQ2ZKLDhCQUFvQkEsaUJBQWlCSyxJQUFqQixFQUFwQjtBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBcEJrQyxlQUFLQyxJOztrQkFBckJoQixPIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnbG9hZGluZycsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1sb2FkaW5nJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbG9hZGluZy9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge31cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0xvYWRpbmcoaW5kZXgpIHtcbiAgICAgICAgbGV0IGxvYWRpbmdDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLWxvYWRpbmcnICsgaW5kZXgpO1xuICAgICAgICBsb2FkaW5nQ29tcG9uZW50ICYmIGxvYWRpbmdDb21wb25lbnQuc2hvdygpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQgJiYgbG9hZGluZ0NvbXBvbmVudC5oaWRlKCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19
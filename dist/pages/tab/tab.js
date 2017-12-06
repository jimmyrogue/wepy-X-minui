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

var Tab = function (_wepy$page) {
  _inherits(Tab, _wepy$page);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'tab',
      usingComponents: {
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/index'
      }
    }, _this.data = {
      tabs: [{
        title: '选项一',
        content: '内容一'
      }, {
        title: '选项二',
        content: '内容二'
      }, {
        title: '选项三',
        content: '内容三'
      }]
    }, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Tab;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Tab , 'pages/tab/tab'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixLQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVywwQ0FESTtBQUVmLHlCQUFpQjtBQUZGO0FBRlYsSyxRQU9UQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDO0FBQ0hDLGVBQU8sS0FESjtBQUVIQyxpQkFBUztBQUZOLE9BQUQsRUFJSjtBQUNFRCxlQUFPLEtBRFQ7QUFFRUMsaUJBQVM7QUFGWCxPQUpJLEVBUUo7QUFDRUQsZUFBTyxLQURUO0FBRUVDLGlCQUFTO0FBRlgsT0FSSTtBQURELEssUUFlUEMsTyxHQUFVO0FBQ1JDLGVBQVMsaUJBQVVDLENBQVYsRUFBYTtBQUNwQkMsZ0JBQVFDLEdBQVIsa0JBQTJCRixFQUFFRyxNQUFGLENBQVNDLFdBQXBDLHNCQUFnRUosRUFBRUcsTUFBRixDQUFTRSxHQUF6RTtBQUNEO0FBSE8sSzs7Ozs7NkJBS0Q7QUFDUEosY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQTlCOEIsZUFBS0ksSTs7a0JBQWpCaEIsRyIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0YWInLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgdGFiczogW3tcbiAgICAgICAgICB0aXRsZTogJ+mAiemhueS4gCcsXG4gICAgICAgICAgY29udGVudDogJ+WGheWuueS4gCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6YCJ6aG55LqMJyxcbiAgICAgICAgICBjb250ZW50OiAn5YaF5a655LqMJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfpgInpobnkuIknLFxuICAgICAgICAgIGNvbnRlbnQ6ICflhoXlrrnkuIknXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb21wb25lbnRJZDoke2UuZGV0YWlsLmNvbXBvbmVudElkfSx5b3Ugc2VsZWN0ZWQ6JHtlLmRldGFpbC5rZXl9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuXG4iXX0=
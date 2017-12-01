'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'wepy-X-minui',
      usingComponents: {
        'wxc-dialog': '../packages/@minui/wxc-dialog/dist/index'
      }
    }, _this.methods = {
      toComponent: function toComponent(name) {
        this.$navigate('./' + name + '/' + name);
      },
      showDialog: function showDialog() {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog');
        dialogComponent && dialogComponent.show();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJ0b0NvbXBvbmVudCIsIm5hbWUiLCIkbmF2aWdhdGUiLCJzaG93RGlhbG9nIiwiZGlhbG9nQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsY0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQUZWLEssUUFNVEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxJQURKLEVBQ1U7QUFDaEIsYUFBS0MsU0FBTCxRQUFvQkQsSUFBcEIsU0FBNEJBLElBQTVCO0FBQ0QsT0FITztBQUlSRSxnQkFKUSx3QkFJSztBQUNYLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JHLElBQWhCLEVBQW5CO0FBQ0Q7QUFQTyxLOzs7Ozs2QkFTRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBbEJnQyxlQUFLQyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd3ZXB5LVgtbWludWknLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLWRpYWxvZyc6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWRpYWxvZy9kaXN0L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b0NvbXBvbmVudChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoYC4vJHtuYW1lfS8ke25hbWV9YCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dEaWFsb2coKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcclxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LnNob3coKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19
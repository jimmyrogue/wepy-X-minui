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

var Abnor = function (_wepy$page) {
  _inherits(Abnor, _wepy$page);

  function Abnor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Abnor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Abnor.__proto__ || Object.getPrototypeOf(Abnor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'abnor',
      usingComponents: {
        'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index'
      }
    }, _this.data = {
      image: 'https://s10.mogucdn.com/p2/161213/upload_76h1c5hjc8heecjehlfgekjdl2ki0_514x260.png',
      title: '自定义标题',
      tip: '自定义副标题',
      button: '点我'
    }, _this.methods = {
      showpopup: function showpopup(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.show();
      },
      onCancel: function onCancel(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Abnor, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Abnor;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Abnor , 'pages/abnor/abnor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFibm9yLmpzIl0sIm5hbWVzIjpbIkFibm9yIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpbWFnZSIsInRpdGxlIiwidGlwIiwiYnV0dG9uIiwibWV0aG9kcyIsInNob3dwb3B1cCIsImluZGV4IiwicG9wdXBDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsIm9uQ2FuY2VsIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYTtBQURFO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsYUFBTyxvRkFERjtBQUVMQyxhQUFPLE9BRkY7QUFHTEMsV0FBSyxRQUhBO0FBSUxDLGNBQVE7QUFKSCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxLQURGLEVBQ1M7QUFDZixZQUFJQyxpQkFBaUIsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGVBQWVILEtBQTVDLENBQXJCO0FBQ0FDLDBCQUFrQkEsZUFBZUcsSUFBZixFQUFsQjtBQUNELE9BSk87QUFLUkMsY0FMUSxvQkFLQ0wsS0FMRCxFQUtRO0FBQ2QsWUFBSUMsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixlQUFlSCxLQUE1QyxDQUFyQjtBQUNBQywwQkFBa0JBLGVBQWVLLElBQWYsRUFBbEI7QUFDRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUF6QmdDLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiYWJub3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBYm5vciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2Fibm9yJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWFibm9yJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYWJub3IvZGlzdC9pbmRleCcsXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBpbWFnZTogJ2h0dHBzOi8vczEwLm1vZ3VjZG4uY29tL3AyLzE2MTIxMy91cGxvYWRfNzZoMWM1aGpjOGhlZWNqZWhsZmdla2pkbDJraTBfNTE0eDI2MC5wbmcnLFxuICAgICAgdGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuICAgICAgdGlwOiAn6Ieq5a6a5LmJ5Ymv5qCH6aKYJyxcbiAgICAgIGJ1dHRvbjogJ+eCueaIkSdcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dwb3B1cChpbmRleCkge1xuICAgICAgICBsZXQgcG9wdXBDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLXBvcHVwJyArIGluZGV4KTtcbiAgICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuc2hvdygpO1xuICAgICAgfSxcbiAgICAgIG9uQ2FuY2VsKGluZGV4KSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtcG9wdXAnICsgaW5kZXgpO1xuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuXG4iXX0=
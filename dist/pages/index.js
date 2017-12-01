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
    }, _this.data = {
      components: [{
        title: '基础元件',
        list: ['avatar', 'badge']
      }]
    }, _this.methods = {
      toComponent: function toComponent(name) {
        this.$navigate('./' + name + '/' + name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjO0FBREM7QUFGVixLLFFBTVRDLEksR0FBTztBQUNMQyxrQkFBWSxDQUFDO0FBQ1hDLGVBQU8sTUFESTtBQUVYQyxjQUFNLENBQUMsUUFBRCxFQUFXLE9BQVg7QUFGSyxPQUFEO0FBRFAsSyxRQU1QQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLElBREosRUFDVTtBQUNoQixhQUFLQyxTQUFMLFFBQW9CRCxJQUFwQixTQUE0QkEsSUFBNUI7QUFDRDtBQUhPLEs7Ozs7OzZCQUtELENBQUU7Ozs7RUFsQnNCLGVBQUtFLEk7O2tCQUFuQlosSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3dlcHktWC1taW51aScsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNvbXBvbmVudHM6IFt7XHJcbiAgICAgICAgdGl0bGU6ICfln7rnoYDlhYPku7YnLFxyXG4gICAgICAgIGxpc3Q6IFsnYXZhdGFyJywgJ2JhZGdlJ11cclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvQ29tcG9uZW50KG5hbWUpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi8ke25hbWV9LyR7bmFtZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge31cclxuICB9XHJcblxyXG4iXX0=
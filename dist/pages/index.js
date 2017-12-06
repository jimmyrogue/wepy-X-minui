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
        'wxc-dialog': '../packages/@minui/wxc-dialog/dist/index',
        'wxc-icon': '../packages/@minui/wxc-icon/dist/index'
      }
    }, _this.data = {
      components: [{
        title: '基础元件',
        list: ['avatar', 'badge', 'elip', 'label', 'loadmore', 'price', 'progress']
      }, {
        title: '功能组件',
        list: ['abnor', 'countdown', 'counter', 'loading', 'mask', 'steps', 'tab']
      }, {
        title: '提示反馈',
        list: ['dialog', 'popup', 'toast']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLDBDQURDO0FBRWYsb0JBQVk7QUFGRztBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBQUM7QUFDVEMsZUFBTyxNQURFO0FBRVRDLGNBQU0sQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixNQUFwQixFQUE0QixPQUE1QixFQUFxQyxVQUFyQyxFQUFpRCxPQUFqRCxFQUEwRCxVQUExRDtBQUZHLE9BQUQsRUFHUDtBQUNERCxlQUFPLE1BRE47QUFFREMsY0FBTSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLE1BQTdDLEVBQXFELE9BQXJELEVBQThELEtBQTlEO0FBRkwsT0FITyxFQU9WO0FBQ0VELGVBQU8sTUFEVDtBQUVFQyxjQUFNLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsT0FBcEI7QUFGUixPQVBVO0FBRFAsSyxRQWNQQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLElBREosRUFDVTtBQUNoQixhQUFLQyxTQUFMLFFBQW9CRCxJQUFwQixTQUE0QkEsSUFBNUI7QUFDRDtBQUhPLEs7Ozs7OzZCQUtELENBQUU7Ozs7RUEzQnNCLGVBQUtFLEk7O2tCQUFuQlosSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3dlcHktWC1taW51aScsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29tcG9uZW50czogW3tcclxuICAgICAgICAgIHRpdGxlOiAn5Z+656GA5YWD5Lu2JyxcclxuICAgICAgICAgIGxpc3Q6IFsnYXZhdGFyJywgJ2JhZGdlJywgJ2VsaXAnLCAnbGFiZWwnLCAnbG9hZG1vcmUnLCAncHJpY2UnLCAncHJvZ3Jlc3MnXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqf6IO957uE5Lu2JyxcclxuICAgICAgICAgIGxpc3Q6IFsnYWJub3InLCAnY291bnRkb3duJywgJ2NvdW50ZXInLCAnbG9hZGluZycsICdtYXNrJywgJ3N0ZXBzJywgJ3RhYiddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuuWPjemmiCcsXHJcbiAgICAgICAgICBsaXN0OiBbJ2RpYWxvZycsICdwb3B1cCcsICd0b2FzdCddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b0NvbXBvbmVudChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoYC4vJHtuYW1lfS8ke25hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHt9XHJcbiAgfVxyXG5cclxuIl19
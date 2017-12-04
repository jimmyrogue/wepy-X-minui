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
        list: ['avatar', 'badge', 'elip', 'label', 'loadmore']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjLDBDQURDO0FBRWYsb0JBQVk7QUFGRztBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBQUM7QUFDWEMsZUFBTyxNQURJO0FBRVhDLGNBQU0sQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixNQUFwQixFQUE0QixPQUE1QixFQUFxQyxVQUFyQztBQUZLLE9BQUQ7QUFEUCxLLFFBTVBDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsSUFESixFQUNVO0FBQ2hCLGFBQUtDLFNBQUwsUUFBb0JELElBQXBCLFNBQTRCQSxJQUE1QjtBQUNEO0FBSE8sSzs7Ozs7NkJBS0QsQ0FBRTs7OztFQW5Cc0IsZUFBS0UsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnd2VweS1YLW1pbnVpJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjb21wb25lbnRzOiBbe1xyXG4gICAgICAgIHRpdGxlOiAn5Z+656GA5YWD5Lu2JyxcclxuICAgICAgICBsaXN0OiBbJ2F2YXRhcicsICdiYWRnZScsICdlbGlwJywgJ2xhYmVsJywgJ2xvYWRtb3JlJ11cclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvQ29tcG9uZW50KG5hbWUpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi8ke25hbWV9LyR7bmFtZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge31cclxuICB9XHJcblxyXG4iXX0=
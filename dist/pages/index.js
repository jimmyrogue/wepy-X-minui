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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsInNob3dEaWFsb2ciLCJkaWFsb2dDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixjQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYztBQURDO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsa0JBQVksQ0FBQztBQUNYQyxlQUFPLE1BREk7QUFFWEMsY0FBTSxDQUFDLFFBQUQsRUFBVyxPQUFYO0FBRkssT0FBRDtBQURQLEssUUFNUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxJQURKLEVBQ1U7QUFDaEIsYUFBS0MsU0FBTCxRQUFvQkQsSUFBcEIsU0FBNEJBLElBQTVCO0FBQ0QsT0FITztBQUlSRSxnQkFKUSx3QkFJSztBQUNYLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsYUFBN0IsQ0FBdEI7QUFDQUYsMkJBQW1CQSxnQkFBZ0JHLElBQWhCLEVBQW5CO0FBQ0Q7QUFQTyxLOzs7Ozs2QkFTRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBeEJnQyxlQUFLQyxJOztrQkFBbkJuQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnd2VweS1YLW1pbnVpJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY29tcG9uZW50czogW3tcclxuICAgICAgICB0aXRsZTogJ+WfuuehgOWFg+S7ticsXHJcbiAgICAgICAgbGlzdDogWydhdmF0YXInLCAnYmFkZ2UnXVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9Db21wb25lbnQobmFtZSkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKGAuLyR7bmFtZX0vJHtuYW1lfWApO1xyXG4gICAgICB9LFxyXG4gICAgICBzaG93RGlhbG9nKCkge1xyXG4gICAgICAgIGxldCBkaWFsb2dDb21wb25lbnQgPSB0aGlzLiR3eHBhZ2Uuc2VsZWN0Q29tcG9uZW50KCcud3hjLWRpYWxvZycpXHJcbiAgICAgICAgZGlhbG9nQ29tcG9uZW50ICYmIGRpYWxvZ0NvbXBvbmVudC5zaG93KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==
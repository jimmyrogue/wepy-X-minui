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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJzaG93RGlhbG9nIiwiZGlhbG9nQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsY0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQUZWLEssUUFNVEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsWUFBSUMsa0JBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixhQUE3QixDQUF0QjtBQUNBRiwyQkFBbUJBLGdCQUFnQkcsSUFBaEIsRUFBbkI7QUFDRDtBQUpPLEs7Ozs7OzZCQU1EO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUFmZ0MsZUFBS0MsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnd2VweS1YLW1pbnVpJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxyXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuc2hvdygpO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=
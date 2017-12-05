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

var Dialog = function (_wepy$page) {
  _inherits(Dialog, _wepy$page);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'dialog',
      usingComponents: {
        'wxc-dialog': '../../packages/@minui/wxc-dialog/dist/index'
      }
    }, _this.methods = {
      showDialog: function showDialog(index) {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog' + index);
        dialogComponent && dialogComponent.show();
      },
      onCancel: function onCancel(index) {
        var dialogComponent = this.$wxpage.selectComponent('.wxc-dialog' + index);
        dialogComponent && dialogComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Dialog;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'pages/dialog/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwibWV0aG9kcyIsInNob3dEaWFsb2ciLCJpbmRleCIsImRpYWxvZ0NvbXBvbmVudCIsIiR3eHBhZ2UiLCJzZWxlY3RDb21wb25lbnQiLCJzaG93Iiwib25DYW5jZWwiLCJoaWRlIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFFBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHNCQUFjO0FBREM7QUFGVixLLFFBTVRDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsS0FESCxFQUNVO0FBQ2hCLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZ0JBQWdCSCxLQUE3QyxDQUF0QjtBQUNBQywyQkFBbUJBLGdCQUFnQkcsSUFBaEIsRUFBbkI7QUFDRCxPQUpPO0FBS1JDLGNBTFEsb0JBS0NMLEtBTEQsRUFLUTtBQUNkLFlBQUlDLGtCQUFrQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZ0JBQWdCSCxLQUE3QyxDQUF0QjtBQUNBQywyQkFBbUJBLGdCQUFnQkssSUFBaEIsRUFBbkI7QUFDRDtBQVJPLEs7Ozs7OzZCQVVEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUFuQmlDLGVBQUtDLEk7O2tCQUFwQmYsTSIsImZpbGUiOiJkaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdkaWFsb2cnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtZGlhbG9nJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZGlhbG9nL2Rpc3QvaW5kZXgnLFxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd0RpYWxvZyhpbmRleCkge1xuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnICsgaW5kZXgpO1xuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LnNob3coKTtcbiAgICAgIH0sXG4gICAgICBvbkNhbmNlbChpbmRleCkge1xuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnICsgaW5kZXgpO1xuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==
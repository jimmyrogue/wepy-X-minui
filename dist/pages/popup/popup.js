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

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'popup',
      usingComponents: {
        'wxc-popup': '../../packages/@minui/wxc-popup/dist/index'
      }
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

  _createClass(Popup, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Popup;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Popup , 'pages/popup/popup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJzaG93cG9wdXAiLCJpbmRleCIsInBvcHVwQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJvbkNhbmNlbCIsImhpZGUiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUZWLEssUUFNVEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLEtBREYsRUFDUztBQUNmLFlBQUlDLGlCQUFpQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZUFBZUgsS0FBNUMsQ0FBckI7QUFDQUMsMEJBQWtCQSxlQUFlRyxJQUFmLEVBQWxCO0FBQ0QsT0FKTztBQUtSQyxjQUxRLG9CQUtDTCxLQUxELEVBS1E7QUFDZCxZQUFJQyxpQkFBaUIsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLGVBQWVILEtBQTVDLENBQXJCO0FBQ0FDLDBCQUFrQkEsZUFBZUssSUFBZixFQUFsQjtBQUNEO0FBUk8sSzs7Ozs7NkJBVUQ7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQW5CZ0MsZUFBS0MsSTs7a0JBQW5CZixLIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdwb3B1cCcsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1wb3B1cCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXBvcHVwL2Rpc3QvaW5kZXgnLFxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd3BvcHVwKGluZGV4KSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtcG9wdXAnICsgaW5kZXgpO1xuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5zaG93KCk7XG4gICAgICB9LFxuICAgICAgb25DYW5jZWwoaW5kZXgpIHtcbiAgICAgICAgbGV0IHBvcHVwQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1wb3B1cCcgKyBpbmRleCk7XG4gICAgICAgIHBvcHVwQ29tcG9uZW50ICYmIHBvcHVwQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==
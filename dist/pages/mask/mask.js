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

var Mask = function (_wepy$page) {
  _inherits(Mask, _wepy$page);

  function Mask() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mask.__proto__ || Object.getPrototypeOf(Mask)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'mask',
      usingComponents: {
        'wxc-mask': '../../packages/@minui/wxc-mask/dist/index'
      }
    }, _this.data = {
      maskStatus: {
        0: 'hide',
        1: 'hide',
        2: 'hide',
        3: 'hide',
        4: 'hide',
        5: 'hide'
      }
    }, _this.methods = {
      showMask: function showMask(index) {
        this.maskStatus[index] = 'show';
      },
      hideMask: function hideMask() {
        this.maskStatus[5] = 'hide';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mask, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Mask;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mask , 'pages/mask/mask'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiXSwibmFtZXMiOlsiTWFzayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWFza1N0YXR1cyIsIm1ldGhvZHMiLCJzaG93TWFzayIsImluZGV4IiwiaGlkZU1hc2siLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVk7QUFERztBQUZWLEssUUFNVEMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBQ1YsV0FBRyxNQURPO0FBRVYsV0FBRyxNQUZPO0FBR1YsV0FBRyxNQUhPO0FBSVYsV0FBRyxNQUpPO0FBS1YsV0FBRyxNQUxPO0FBTVYsV0FBRztBQU5PO0FBRFAsSyxRQVVQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsS0FERCxFQUNRO0FBQ2QsYUFBS0gsVUFBTCxDQUFnQkcsS0FBaEIsSUFBeUIsTUFBekI7QUFDRCxPQUhPO0FBSVhDLGNBSlcsc0JBSUE7QUFDWixhQUFLSixVQUFMLENBQWdCLENBQWhCLElBQXFCLE1BQXJCO0FBQ0U7QUFOVSxLOzs7Ozs2QkFRRDtBQUNQSyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBM0IrQixlQUFLQyxJOztrQkFBbEJaLEkiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdtYXNrJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLW1hc2snOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1tYXNrL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBtYXNrU3RhdHVzOiB7XG4gICAgICAgIDA6ICdoaWRlJyxcbiAgICAgICAgMTogJ2hpZGUnLFxuICAgICAgICAyOiAnaGlkZScsXG4gICAgICAgIDM6ICdoaWRlJyxcbiAgICAgICAgNDogJ2hpZGUnLFxuICAgICAgICA1OiAnaGlkZScsXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TWFzayhpbmRleCkge1xuICAgICAgICB0aGlzLm1hc2tTdGF0dXNbaW5kZXhdID0gJ3Nob3cnO1xuICAgICAgfSxcblx0ICBoaWRlTWFzaygpIHtcblx0XHR0aGlzLm1hc2tTdGF0dXNbNV0gPSAnaGlkZSc7XG5cdCAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19
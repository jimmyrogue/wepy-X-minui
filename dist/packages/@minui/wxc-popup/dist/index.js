'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    animationMode: {
      type: String,
      value: 'none'
    },
    align: {
      type: String,
      value: 'center'
    },
    status: {
      type: String,
      value: 'hide'
    }
  },
  data: {
    maskStatus: 'hide'
  },
  methods: {
    showMask: function showMask() {
      this.setData({
        maskStatus: 'show'
      });
    },
    hideMask: function hideMask() {
      this.setData({
        maskStatus: 'hide'
      });
    },
    show: function show() {
      var _this = this;

      if (this.data.animationMode !== 'none') {
        this.showMask();
        this.setData({
          status: 'fadeIn'
        });

        setTimeout(function () {
          _this.setData({
            status: 'show'
          });
        }, 50);
      } else {
        this.showMask();
        this.setData({
          status: 'show'
        });
      }
    },
    forceHide: function forceHide() {
      this.setData({
        status: 'hide'
      });
      this.hideMask();
    },
    hide: function hide() {
      var _this2 = this;

      if (this.data.animationMode !== 'none') {
        this.setData({
          status: 'fadeOut'
        });

        clearTimeout(this._timer);

        this._timer = setTimeout(function () {
          _this2.forceHide();
        }, 300);
      } else {
        // 没有动画
        this.forceHide();
      }
    },
    onContentTap: function onContentTap() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiYW5pbWF0aW9uTW9kZSIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImFsaWduIiwic3RhdHVzIiwiZGF0YSIsIm1hc2tTdGF0dXMiLCJtZXRob2RzIiwic2hvd01hc2siLCJzZXREYXRhIiwiaGlkZU1hc2siLCJzaG93Iiwic2V0VGltZW91dCIsImZvcmNlSGlkZSIsImhpZGUiLCJjbGVhclRpbWVvdXQiLCJfdGltZXIiLCJvbkNvbnRlbnRUYXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxtQkFBZTtBQUNiQyxZQUFNQyxNQURPO0FBRWJDLGFBQU87QUFGTSxLQURMO0FBS1ZDLFdBQU87QUFDTEgsWUFBTUMsTUFERDtBQUVMQyxhQUFPO0FBRkYsS0FMRztBQVNWRSxZQUFRO0FBQ05KLFlBQU1DLE1BREE7QUFFTkMsYUFBTztBQUZEO0FBVEUsRztBQWNaRyxRQUFNO0FBQ0pDLGdCQUFZO0FBRFIsRztBQUdOQyxXQUFTO0FBQ1BDLFlBRE8sc0JBQ0k7QUFDVCxXQUFLQyxPQUFMLENBQWE7QUFDWEgsb0JBQVk7QUFERCxPQUFiO0FBR0QsS0FMTTtBQU1QSSxZQU5PLHNCQU1JO0FBQ1QsV0FBS0QsT0FBTCxDQUFhO0FBQ1hILG9CQUFZO0FBREQsT0FBYjtBQUdELEtBVk07QUFXUEssUUFYTyxrQkFXQTtBQUFBOztBQUVMLFVBQUksS0FBS04sSUFBTCxDQUFVTixhQUFWLEtBQTRCLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQUtTLFFBQUw7QUFDQSxhQUFLQyxPQUFMLENBQWE7QUFDWEwsa0JBQVE7QUFERyxTQUFiOztBQUlBUSxtQkFBVyxZQUFNO0FBQ2YsZ0JBQUtILE9BQUwsQ0FBYTtBQUNYTCxvQkFBUTtBQURHLFdBQWI7QUFHRCxTQUpELEVBSUcsRUFKSDtBQUtELE9BWEQsTUFXTztBQUNMLGFBQUtJLFFBQUw7QUFDQSxhQUFLQyxPQUFMLENBQWE7QUFDWEwsa0JBQVE7QUFERyxTQUFiO0FBR0Q7QUFDRixLQTlCTTtBQStCUFMsYUEvQk8sdUJBK0JLO0FBQ1YsV0FBS0osT0FBTCxDQUFhO0FBQ1hMLGdCQUFRO0FBREcsT0FBYjtBQUdBLFdBQUtNLFFBQUw7QUFDRCxLQXBDTTtBQXFDUEksUUFyQ08sa0JBcUNBO0FBQUE7O0FBRUwsVUFBSSxLQUFLVCxJQUFMLENBQVVOLGFBQVYsS0FBNEIsTUFBaEMsRUFBd0M7QUFDdEMsYUFBS1UsT0FBTCxDQUFhO0FBQ1hMLGtCQUFRO0FBREcsU0FBYjs7QUFJQVcscUJBQWEsS0FBS0MsTUFBbEI7O0FBRUEsYUFBS0EsTUFBTCxHQUFjSixXQUFXLFlBQU07QUFDN0IsaUJBQUtDLFNBQUw7QUFDRCxTQUZhLEVBRVgsR0FGVyxDQUFkO0FBSUQsT0FYRCxNQVdPO0FBQ0w7QUFDQSxhQUFLQSxTQUFMO0FBQ0Q7QUFDRixLQXRETTtBQXVEUEksZ0JBdkRPLDBCQXVEUSxDQUFFO0FBdkRWIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnd3hjLW1hc2snOiAnQG1pbnVpL3d4Yy1tYXNrJ1xuICAgIH1cbiAgfSxcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIGFuaW1hdGlvbk1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbm9uZSdcbiAgICB9LFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2NlbnRlcidcbiAgICB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdoaWRlJ1xuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIG1hc2tTdGF0dXM6ICdoaWRlJ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd01hc2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtYXNrU3RhdHVzOiAnc2hvdydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZU1hc2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtYXNrU3RhdHVzOiAnaGlkZSdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvdygpIHtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5hbmltYXRpb25Nb2RlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1czogJ2ZhZGVJbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3Nob3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1czogJ3Nob3cnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZm9yY2VIaWRlKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc3RhdHVzOiAnaGlkZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oaWRlTWFzaygpO1xuICAgIH0sXG4gICAgaGlkZSgpIHtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5hbmltYXRpb25Nb2RlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzdGF0dXM6ICdmYWRlT3V0J1xuICAgICAgICB9KTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JjZUhpZGUoKTtcbiAgICAgICAgfSwgMzAwKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDmsqHmnInliqjnlLtcbiAgICAgICAgdGhpcy5mb3JjZUhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ29udGVudFRhcCgpIHt9XG4gIH1cbn0iXX0=
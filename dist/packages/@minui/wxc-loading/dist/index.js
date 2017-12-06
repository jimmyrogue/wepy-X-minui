'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  _timer: null,

  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'mgj'
    },
    image: {
      type: String,
      value: ''
    },
    slip: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    show: function show() {
      var _this = this;

      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timer = setTimeout(function () {
        _this._timer = null;
        _this.setData({ isShow: true });
      }, 500);
    },
    hide: function hide() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }

      this.setData({ isShow: false });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJfdGltZXIiLCJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiaXNTaG93IiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsIlN0cmluZyIsImltYWdlIiwic2xpcCIsImRhdGEiLCJtZXRob2RzIiwic2hvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzZXREYXRhIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0VBLFVBQVEsSTs7QUFJUkMsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsWUFBUTtBQUNOQyxZQUFNQyxPQURBO0FBRU5DLGFBQU87QUFGRCxLQURFO0FBS1ZGLFVBQU07QUFDSkEsWUFBTUcsTUFERjtBQUVKRCxhQUFPO0FBRkgsS0FMSTtBQVNWRSxXQUFPO0FBQ0xKLFlBQU1HLE1BREQ7QUFFTEQsYUFBTztBQUZGLEtBVEc7QUFhVkcsVUFBTTtBQUNKTCxZQUFNRyxNQURGO0FBRUpELGFBQU87QUFGSDtBQWJJLEc7QUFrQlpJLFFBQU0sRTtBQUNOQyxXQUFTO0FBQ1BDLFFBRE8sa0JBQ0E7QUFBQTs7QUFDTCxVQUFJLEtBQUtaLE1BQVQsRUFBaUI7QUFDZmEscUJBQWEsS0FBS2IsTUFBbEI7QUFDRDtBQUNELFdBQUtBLE1BQUwsR0FBY2MsV0FBVyxZQUFNO0FBQzdCLGNBQUtkLE1BQUwsR0FBYyxJQUFkO0FBQ0EsY0FBS2UsT0FBTCxDQUFhLEVBQUVaLFFBQVEsSUFBVixFQUFiO0FBQ0QsT0FIYSxFQUdYLEdBSFcsQ0FBZDtBQUlELEtBVE07QUFVUGEsUUFWTyxrQkFVQTtBQUNMLFVBQUksS0FBS2hCLE1BQVQsRUFBaUI7QUFDZmEscUJBQWEsS0FBS2IsTUFBbEI7QUFDQSxhQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVELFdBQUtlLE9BQUwsQ0FBYSxFQUFFWixRQUFRLEtBQVYsRUFBYjtBQUNEO0FBakJNIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3RpbWVyOiBudWxsLFxuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIGJlaGF2aW9yczogW10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpc1Nob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbWdqJ1xuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgc2xpcDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9LFxuICBkYXRhOiB7fSxcbiAgbWV0aG9kczoge1xuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKVxuICAgICAgfVxuICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IGlzU2hvdzogdHJ1ZSB9KVxuICAgICAgfSwgNTAwKVxuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpXG4gICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoeyBpc1Nob3c6IGZhbHNlIH0pXG4gICAgfVxuICB9XG59Il19
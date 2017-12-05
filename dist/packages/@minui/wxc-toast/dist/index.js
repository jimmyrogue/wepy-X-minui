'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false
    },
    text: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    iconColor: {
      type: String,
      value: ''
    },
    iconImage: {
      type: String,
      value: ''
    },
    duration: {
      type: Number,
      value: 2000
    }
  },
  data: {},
  methods: {
    show: function show() {
      var _this = this;

      var duration = this.data.duration;

      clearTimeout(this._timer);
      this.setData({
        isShow: true
      });

      if (duration > 0 && duration !== Infinity) {
        this._timer = setTimeout(function () {
          _this.hide();
          _this.triggerEvent('success', {}, {});
        }, duration);
      }
    },
    hide: function hide() {
      this._timer = clearTimeout(this._timer);

      this.setData({ isShow: false });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiaXNTaG93IiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsInRleHQiLCJTdHJpbmciLCJpY29uIiwiaWNvbkNvbG9yIiwiaWNvbkltYWdlIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJkYXRhIiwibWV0aG9kcyIsInNob3ciLCJjbGVhclRpbWVvdXQiLCJfdGltZXIiLCJzZXREYXRhIiwiSW5maW5pdHkiLCJzZXRUaW1lb3V0IiwiaGlkZSIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUVBLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLFlBQVE7QUFDTkMsWUFBTUMsT0FEQTtBQUVOQyxhQUFPO0FBRkQsS0FERTtBQUtWQyxVQUFNO0FBQ0pILFlBQU1JLE1BREY7QUFFSkYsYUFBTztBQUZILEtBTEk7QUFTVkcsVUFBTTtBQUNKTCxZQUFNSSxNQURGO0FBRUpGLGFBQU87QUFGSCxLQVRJO0FBYVZJLGVBQVc7QUFDVE4sWUFBTUksTUFERztBQUVURixhQUFPO0FBRkUsS0FiRDtBQWlCVkssZUFBVztBQUNUUCxZQUFNSSxNQURHO0FBRVRGLGFBQU87QUFGRSxLQWpCRDtBQXFCVk0sY0FBVTtBQUNSUixZQUFNUyxNQURFO0FBRVJQLGFBQU87QUFGQztBQXJCQSxHO0FBMEJaUSxRQUFNLEU7QUFDTkMsV0FBUztBQUNQQyxRQURPLGtCQUNBO0FBQUE7O0FBQ0wsVUFBSUosV0FBVyxLQUFLRSxJQUFMLENBQVVGLFFBQXpCOztBQUVBSyxtQkFBYSxLQUFLQyxNQUFsQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYaEIsZ0JBQVE7QUFERyxPQUFiOztBQUlBLFVBQUlTLFdBQVcsQ0FBWCxJQUFnQkEsYUFBYVEsUUFBakMsRUFBMkM7QUFDekMsYUFBS0YsTUFBTCxHQUFjRyxXQUFXLFlBQU07QUFDN0IsZ0JBQUtDLElBQUw7QUFDQSxnQkFBS0MsWUFBTCxDQUFrQixTQUFsQixFQUE2QixFQUE3QixFQUFpQyxFQUFqQztBQUNELFNBSGEsRUFHWFgsUUFIVyxDQUFkO0FBSUQ7QUFDRixLQWZNO0FBaUJQVSxRQWpCTyxrQkFpQkE7QUFDTCxXQUFLSixNQUFMLEdBQWNELGFBQWEsS0FBS0MsTUFBbEIsQ0FBZDs7QUFFQSxXQUFLQyxPQUFMLENBQWEsRUFBRWhCLFFBQVEsS0FBVixFQUFiO0FBQ0Q7QUFyQk0iLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd3eGMtaWNvbic6ICdAbWludWkvd3hjLWljb24nXG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXNTaG93OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgaWNvbkNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIGljb25JbWFnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBkdXJhdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDIwMDBcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdygpIHtcbiAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMuZGF0YS5kdXJhdGlvblxuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc3VjY2VzcycsIHt9LCB7fSlcbiAgICAgICAgfSwgZHVyYXRpb24pXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICB0aGlzLl90aW1lciA9IGNsZWFyVGltZW91dCh0aGlzLl90aW1lcilcblxuICAgICAgdGhpcy5zZXREYXRhKHsgaXNTaG93OiBmYWxzZSB9KVxuICAgIH1cbiAgfVxufSJdfQ==
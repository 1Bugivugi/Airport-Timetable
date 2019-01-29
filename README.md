# Airport-Timetable
Yandex testing


```javascript
function Ticker() {
  this._i = 0
};

Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};

var ticker = new Ticker();
setInterval(() => {ticker.tick()}  //fixes the scope(by letting tick's function to leave her own and access global '_i')
, 1000);
```



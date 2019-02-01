# Airport-Timetable

Yandex testing

## Table of Contents

* [Instructions](#instructions)
* [Usage](#usage)
* [Installation](#installation)
* [Libraries](#libraries)
* [Additional task](#additionalTask)

## Instructions

This task-project was given to me by Yandex. The task was:  
__Разработайте клиентское приложение(сайт), где будет табло аэропорта.__  
У табло должны быть следующие функции:  
* просмотр только вылетающий рейсов
* просмотр только прилетающих рейсов
* просмотр задержанных рейсов
* поиск по номеру рейса
В качестве примера можно посмотреть на http://www.svo.aero/.  
Ограничений на использование шаблонизаторов и библиотек нет.  

Дополнительное задание  
#### Ticker

Почему `this._i` не увеличивается. Как исправить?
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
setInterval(ticker.tick, 1000);
```

## Usage

Basically that's supposed to be an airport timetable where you can view arriving, departuring and delayed flights. There's also a board number search field.

## Installation

To install and use the project:

* **Zip-Download:** Download the repository as a zip-file, extract it, use Git Bash to change
into the project directory.
* **Clone the Repository:** Clone the repository with Git Bash to your machine with: ```git clone https://github.com/1Bugivugi/Airport-Timetable.git/```.
* install all project dependencies with `npm install`
* start the development server with `npm start`
* ater running `npm start`, the React App should open automatically in your browser. If it doesn't, open `localhost:3000` in your Browser.
* **Service-Workers** only work in build-mode, not in the dev-mode. Run `npm run build` to build the app.

## Libraries

* Axios
* Create React App

## Additional task

This is the most right solution I came up with.

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

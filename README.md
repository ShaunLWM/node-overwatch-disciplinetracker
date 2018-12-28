# node-overwatch-disciplinetracker
Overwatch League Player Discipline Tracker

Retreive stats from the official [Overwatch League Player Discipline Tracker](https://overwatchleague.com/en-us/news/22823906/2019-player-discipline-tracker)


## Install

```
$ npm install node-overwatch-disciplinetracker
```
or
```
$ yarn add node-overwatch-disciplinetracker
```


## Usage

```js
const owl = require('node-overwatch-disciplinetracker');

owl((error, results) => {
    if (error) {
        return console.error(error);
    }

    console.log(results);
});
```


## API

### owl(callback)

Returns a callback with `error` and `results` as parameters.

Contains `lastUpdated` & `players` information in json.

## License

MIT © [ShaunLWM](https://github.com/ShaunLWM)
let owl = require('./index');
owl((error, results) => {
    if (error) {
        return console.error(error);
    }

    console.log(results);
    console.log(results['lastUpdated']);
    console.log(results['players']);
    console.log(results['players'][0]);
});
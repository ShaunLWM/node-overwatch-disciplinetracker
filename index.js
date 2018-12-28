const request = require('request');
const cheerio = require('cheerio');

let BASE_URL = "https://overwatchleague.com/en-us/news/22823906/2019-player-discipline-tracker";
const options = {
    url: BASE_URL,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
    }
};

module.exports = callback => {
    request(options, (error, response, body) => {
        if (error) {
            return callback(error);
        }

        if (typeof response === 'undefined' || response.statusCode !== 200) {
            return callback(`Error getting response. ${response.statusCode}`);
        }

        let results = {};
        let $ = cheerio.load(body);
        results.lastUpdated = $('#main-news-section > article > div > p:nth-child(8) > em').text().replace(/Last updated: /g, '');
        results.players = [];
        $('#main-news-section > article > div > div > table > tbody').children().each((index, element) => {
            if (index === 0) return;
            let child = $(element).children();
            results.players.push({
                date: child.eq(0).text(),
                name: child.eq(1).text(),
                team: child.eq(2).text(),
                reason: child.eq(3).text(),
            })
        });

        return callback(null, results);
    });
}
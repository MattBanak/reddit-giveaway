/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const getUsers = require('./getUsers');

module.exports = async function getResults(
  url,
  isCapitalizationIgnored,
  string,
  numberOfWinners,
) {
  const browser = await puppeteer.launch({ headless: true });
  const pages = await browser.pages();
  const page = pages[0];
  page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36',
  );
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
  } catch (e) {
    console.log(
      "The provided URL is malformed, or didn't work for some other reason.",
    );
    process.exit();
  }
  let winners = [];
  try {
    winners = await page
      .waitForSelector('.comment', {
        timeout: 1000,
      })
      .then(async () => {
        const users = await page.evaluate(getUsers, string);
        const uniqueApplicants = [...new Set(users)];
        if (uniqueApplicants[0]) {
          for (let i = 0; i < numberOfWinners; i += 1) {
            const randomApplicantIndex = Math.floor(
              Math.random() * uniqueApplicants.length,
            );
            winners.push(uniqueApplicants[randomApplicantIndex]);
            uniqueApplicants.splice(randomApplicantIndex);
          }
        }
        return winners;
      });
  } catch (e) {
    console.log('Timed out: This page contains no comments');
  }
  browser.close();
  return winners[0]
    ? winners
    : "No match. Please double check your Reddit url starts with 'https://old.reddit.com/' and your sting is correct.";
};

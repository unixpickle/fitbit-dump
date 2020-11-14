import document from "document";

const DAY_MILLIS = 24 * 60 * 60 * 1000;

const anniversary = new Date(2019, 10, 20, 0, 0, 0, 0);
const daysSince = Math.round((new Date().getTime() - anniversary.getTime()) / DAY_MILLIS);

document.getElementById('days-together').text = daysSince + ' days';

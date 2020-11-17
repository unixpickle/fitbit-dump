import clock from "clock";
import document from "document";

const DAY_MILLIS = 24 * 60 * 60 * 1000;
const ANNIVERSARY = new Date(2019, 10, 20, 0, 0, 0, 0);

function daysSince(d) {
  return Math.round((new Date().getTime() - d.getTime()) / DAY_MILLIS);
}

function fillInYear(d, year) {
  return new Date(year, d.getMonth(), d.getDate(), 0, 0, 0, 0);
}

function nextAnniversary(d) {
  const now = new Date();
  const thisYear = fillInYear(d, now.getFullYear());
  if (thisYear.getTime() + DAY_MILLIS > now.getTime()) {
    return thisYear;
  }
  return fillInYear(d, now.getFullYear() + 1);
}

function formatCountdown(diffMillis) {
  let diffSeconds = Math.round(diffMillis / 1000);
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours = Math.floor(diffMinutes / 60);
  let diffDays = Math.floor(diffHours / 24)
  return monospaceString(diffDays + ':' + padTwoDigits(diffHours % 24) + ':' +
    padTwoDigits(diffMinutes % 60) +
    ':' + padTwoDigits(diffSeconds % 60));
}

function padTwoDigits(number) {
  const res = '' + number;
  if (res.length < 2) {
    return '0' + res;
  }
  return res;
}

function monospaceString(chars) {
  const firstNumeral = '0'.charCodeAt(0);
  const lastNumeral = '9'.charCodeAt(0);
  let result = '';
  for (let i = 0; i < chars.length; i++) {
    const code = chars.charCodeAt(i);
    if (code >= firstNumeral && code <= lastNumeral) {
      result += String.fromCharCode(0x10 + code - firstNumeral);
    } else {
      result += chars.charAt(i);
    }
  }
  return result;
}

function updateCountdown() {
  document.getElementById('days-together').text = daysSince(ANNIVERSARY) + ' days';
  document.getElementById('countdown').text = formatCountdown(nextAnniversary(ANNIVERSARY).getTime() - new Date().getTime());
}

updateCountdown();

clock.granularity = "seconds";
clock.ontick = (evt) => {
   updateCountdown();
};

const getViewsInFormat = (views) => {
  if (views > 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views > 1000) return `${(views / 1000).toFixed(1)}K`;
  return views;
};

const getTimeInFormat = (publishedAt) => {
  const timePassed = Date.now() - Date.parse(publishedAt);
  const timePassedInSeconds = Math.floor(timePassed / 1000);
  const timePassedInMinutes = Math.floor(timePassedInSeconds / 60);
  const timePassedInHours = Math.floor(timePassedInMinutes / 60);
  const timePassedInDays = Math.floor(timePassedInHours / 24);
  const timePassedInMonths = Math.floor(timePassedInDays / 30);
  const timePassedInYears = Math.floor(timePassedInMonths / 12);

  if (timePassedInYears > 0) return `${timePassedInYears} years`;
  if (timePassedInMonths > 0) return `${timePassedInMonths} months`;
  if (timePassedInDays > 0) return `${timePassedInDays} days`;
  if (timePassedInHours > 0) return `${timePassedInHours} hours`;
  if (timePassedInMinutes > 0) return `${timePassedInMinutes} minutes`;
  return `${timePassedInSeconds} seconds`;
};

const getDurationInFormat = (duration) => {
  const durationRegex = /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  let [, days, hours, minutes, seconds] = duration.match(durationRegex);
  days = days ? String(days).padStart(2, "0") : "00";
  hours = hours ? String(hours).padStart(2, "0") : "00";
  minutes = minutes ? String(minutes).padStart(2, "0") : "00";
  seconds = seconds ? String(seconds).padStart(2, "0") : "00";

  if (days !== "00") return `${days}:${hours}:${minutes}:${seconds}`;
  if (hours !== "00") return `${hours}:${minutes}:${seconds}`;
  if (minutes !== "00") return `${minutes}:${seconds}`;
  return `00:${seconds}`;
};
export { getViewsInFormat, getTimeInFormat, getDurationInFormat };

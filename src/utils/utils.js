const convertNumberOfViews = (views) => {
  if (views > 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views > 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  } else {
    return `${views}`;
  }
};

const timePassedByNow = (publishedAt) => {
  const timePassed = Date.now() - Date.parse(publishedAt);
  const timePassedInSeconds = Math.floor(timePassed / 1000);
  const timePassedInMinutes = Math.floor(timePassedInSeconds / 60);
  const timePassedInHours = Math.floor(timePassedInMinutes / 60);
  const timePassedInDays = Math.floor(timePassedInHours / 24);
  const timePassedInMonths = Math.floor(timePassedInDays / 30);
  const timePassedInYears = Math.floor(timePassedInMonths / 12);

  if (timePassedInYears > 0) {
    return `${timePassedInYears} years`;
  } else if (timePassedInMonths > 0) {
    return `${timePassedInMonths} months`;
  } else if (timePassedInDays > 0) {
    return `${timePassedInDays} days`;
  } else if (timePassedInHours > 0) {
    return `${timePassedInHours} hours`;
  } else if (timePassedInMinutes > 0) {
    return `${timePassedInMinutes} minutes`;
  } else {
    return `${timePassedInSeconds} seconds`;
  }
};

export { convertNumberOfViews, timePassedByNow };

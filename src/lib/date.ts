const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const format = (dateString: string) => {
  const date = new Date(dateString);
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  let day = date.getDate().toString();
  day = day.length == 1 ? `0${day}` : day;
  return `${month} ${day}, ${year}`;
};

export const UTCString = (dateString:string) => {
  const date = new Date(dateString)
  return date.toISOString()
}

export const getISODate = (dateString:string) => {
  let isoDate = (new Date(dateString)).toISOString()
  let splitDate = isoDate.split('.')
  let tail = splitDate[splitDate.length - 1]
  let lastChar = tail.slice(-1)
  splitDate.pop()

  return splitDate.join('')+lastChar
}
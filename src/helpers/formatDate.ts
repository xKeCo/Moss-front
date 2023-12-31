export const formatDate = (date: string, showTime: boolean = false) => {
  if (!date) return 'N/A';

  const [year, month, day] = date.split('T')[0].split('-');

  // add time to date
  const [hour, minute] = date.split('T')[1].split(':');

  if (showTime) {
    return `${day}/${month}/${year.slice(2, 4)} ${hour}:${minute}`;
  }

  return `${day}/${month}/${year}`;
};

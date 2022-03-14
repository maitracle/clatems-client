export const formatCurrency = (money: string | number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
};

export const formatDate = (date: string) => {
  return date.slice(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$1. $2. $3.');
};

export const formatDateMMDD = (date: string) => {
  return date.slice(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2월 $3일');
};

export const formatPhone = (phone: string) => {
  return phone.replace('+82', '0').replace(/(\d{3})(\d{3,4})(\d{4})/g, '$1-$2-$3');
};

export const getDDayString = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);

  const diffInMilliSeconds = today.getTime() - date.getTime();
  const diffInDays = Math.ceil(diffInMilliSeconds / (1000 * 3600 * 24)) - 1;

  const dDayPrefix = diffInDays > 0 ? 'D+' : 'D-';

  return `${dDayPrefix}${Math.abs(diffInDays)}일`;
};

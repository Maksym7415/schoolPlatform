export default (url, value) => {
  if (!url) return null;
  const email = url.split('/')[url.split('/').length - 1];
  return email === value;
};

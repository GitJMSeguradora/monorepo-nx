// eslint-disable-next-line
export const forceDownload = (fileUrl, fileName = '', target = '_self') => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = target;
  link.download = fileName || fileUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

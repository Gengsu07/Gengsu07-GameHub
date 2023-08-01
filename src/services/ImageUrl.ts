const getCroppedImg = (url: string) => {
  const delim = "media/";
  const index = url.indexOf(delim) + delim.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImg;

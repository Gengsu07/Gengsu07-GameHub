const getCroppedImg = (url: string) => {
  if (!url) return; //kalau ada game yg tidak ada gambarnya biar tidak error
  const delim = "media/";
  const index = url.indexOf(delim) + delim.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImg;

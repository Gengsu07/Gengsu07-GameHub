import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImg = (url: string) => {
  if (!url) return noImage; //kalau ada game yg tidak ada gambarnya biar tidak error
  const delim = "media/";
  const index = url.indexOf(delim) + delim.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImg;

const data = [
  {
    title: "Folio 1",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148d518924f1f620d590e3_zip-code-800-p-500x.jpeg",
  },
  {
    title: "Folio 2",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56147659a92a0f0d59878a02_thum-p-500x.png",
  },
  {
    title: "Folio 3",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148b4b8924f1f620d590b6_cthulu_van_v2-p-500x.jpeg",
  },
  {
    title: "Folio 4",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148b65a38c7c456668150c_fan-p-500x.png",
  },
  {
    title: "Folio 5",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148b8e8924f1f620d590bd_human-p-500x.jpeg",
  },
  {
    title: "Folio 6",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/5614744aa92a0f0d598789c0_dribbble-p-500x.png",
  },
  {
    title: "Folio 7",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148bc1a38c7c456668151a_sans_titre_-_17-01-p-500x.png",
  },
  {
    title: "Folio 8",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148bf08924f1f620d590c2_astrav1-p-500x.jpeg",
  },
  {
    title: "Folio 9",
    img: "https://daks2k3a4ib2z.cloudfront.net/56104995fd4f22cf7e335ea0/56148c2e404247a362fcde2a_neighborhood.jpg",
  },
];
const folioWrapper = document.querySelector(".folio-wrapper");

data.map((item) => {
  let imageContainer = document.createElement("div");
  imageContainer.innerHTML = `<img src=${item.img} alt=${item.title} width="100%">`;
  folioWrapper.append(imageContainer);
});

async function downloadImage(imageSrc, nameOfDownload = "my-image.png") {
    const response = await fetch(imageSrc);
  
    const blobImage = await response.blob();
  
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement("a");
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }

let base_url = "https://evaluation.kiitresults.com/endnov2023stview/cs/GenerateImage.aspx"

for (var i = 1; i <= 24; i++) {
    if (i < 10) {
        let url = `${base_url}?pgno=00${i}|du|${i}`;
        try {
            downloadImage(url, `00${i}.png`);
        } catch (error) {
            console.error(`Error downloading ${url} with HTTPS, trying HTTP as fallback.`);
            url = url.replace("https://", "http://");
            downloadImage(url, `00${i}.png`);
        }
        console.log(url);
    } else {
        let url = `${base_url}?pgno=0${i}|du|${i}`;
        try {
            downloadImage(url, `0${i}.png`);
        } catch (error) {
            console.error(`Error downloading ${url} with HTTPS, trying HTTP as fallback.`);
            url = url.replace("https://", "http://");
            downloadImage(url, `0${i}.png`);
        }
        console.log(url);
    }
}
  
function domainName(url){
  url = url.replace(/(https?:\/\/)?(www.)?/i, '');

  if (url.indexOf('/') !== -1) {
    url = url.split('/')[0];
  }

  if (url.indexOf('.') !== -1) {
    url = url.split('.')[0];
  }
  return console.log(url);
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
javascript:(function(){
  var asinMatch = location.href.match(/\/([A-Z0-9]{10})(?:[/?]|$)/);
  if (asinMatch && asinMatch[1]) {
    var asin = asinMatch[1];
    window.open("https://keepa.com/#!product/5-" + asin, "_blank");
  } else {
    alert("ASINが見つかりませんでした。");
  }
})();/keepa.com/#!product/5-"%20+%20asin,%20"_blank");%20%20}%20else%20{%20%20%20%20alert("ASINが見つかりませんでした%E3%80%82");%20%20}})();

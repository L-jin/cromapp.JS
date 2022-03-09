$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v2/search/web",
  data: { query: $("#find").val() },
  headers: { Authorization: "KakaoAK 859ecf21e9383c3f69050cb274e8f858" },
}).done(function (msg) {
  $("p").append("<strong>" + msg.documents.title + "</strong>");
  $("p").append("<strong>" + msg.documents.contents + "</strong>");
  $("p").append("<strong>" + msg.documents.url + "</strong>");
});

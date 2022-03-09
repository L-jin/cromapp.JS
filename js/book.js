const quotes = [
  {
    quote:
      "타인의 희생 위에 축조된 삶이 과연 행복할까. 위험을 외주화 할 수 있다. 죽음도 하도급 줄 수 있다. 그러나 행복은 하청 줄 수 없다.",
    book: "-미하엘 하우스켈러<왜 살아야 하는가>",
  },
  {
    quote:
      "토론에서 정말로 필요한 것은 논지의 완벽함이지 그 논지가 지니는 권위의 무게가 아니다.",
    book: "-키케로",
  },
  {
    quote:
      "인간은 그 무엇도 영원하지 않다고 믿으면서 불합리한 제도와 관념에 도전했다.",
    book: "-유시민<거꾸로 읽는 세계사>",
  },
  {
    quote: "십 년마다 위대한 인물이 나타난다. 그 비용은 누가 지불했던가?",
    book: "브레히트<어느 책 읽는 노동자의 의문>",
  },
  {
    quote:
      "나는 신에게 모든 것을 부탁했다. 삶을 누릴 수 있도록. 하지만 신은 내게 삶을 선물했다. 모든 것을 누릴 수 있도록.",
    book: "-류시화<지금 알고 있는 걸 그때도 알았더라면>",
  },
  {
    quote:
      "건축물이 만들어지기 전의 공간은 막연하다. 벽을 세우게 되면 막연해서 느껴지지 않던 공간이 보이기 시작한다.",
    book: "-유현준<도시는 무엇으로 사는가>",
  },
  {
    quote:
      "삶에서 가장 소중한 것은 다음 세가지이다. 친구,꿈,추억, 이 세가지 말이다.",
    book: "-맹자",
  },
  {
    quote:
      "진실,진리,끝없는 성찰, 그리고 인식과 삶을 일치시키려는 신념과 지조,진리를 위해 고난을 감수하는 용기, 지식인은 이런 것들과 더불어 산다.",
    book: "-유시민<청춘의 독서>",
  },
  {
    quote:
      "코스모스는 과거에도 있었고 현재에도 있으며 미래에도 있을 그 모든 것이다.",
    book: "-칼세이건<코스모스>",
  },
];

const quote = document.querySelector("#quotes div");
const book = document.querySelector("#quotes span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

book.innerText = todaysQuote.book;
quote.innerText = todaysQuote.quote;

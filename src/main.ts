/**
 * ヘッダーを表すHTML要素を取得します。
 * @returns {Element} ヘッダーを表すHTML要素です。
 */
const getHeader = (): Element => {
  const header = document.querySelector(".header");
  if (header === null) {
    throw new Error("ヘッダーを表すHTML要素が見つかりません。");
  }
  return header;
};

/**
 * 現在表示している位置を表すスタイルを適用する一連の処理を実装します。
 */
const implementCurrentContentStyleSetting = (): void => {
  const mainContentList = Array.from(document.querySelectorAll(".main__content"));
  const inPageLinkList = Array.from(document.querySelectorAll(".header__in-page-link"));

  // 初期化のため一度実行しておきます。
  // どういうわけか、ページ読みこみ時にHomeを表示していてもHomeの次にあるPortfolioにスタイルが適用されてしまうため、
  // setTimeoutメソッドで処理の開始を少し遅らせています。
  setTimeout((): void => {
    setStylesOfCurrentContent(mainContentList, inPageLinkList);
  }, 200);

  // scrollイベントが発生するたびに処理します。
  addEventListener("scroll", (event: Event): void => {
    setStylesOfCurrentContent(mainContentList, inPageLinkList);
  });
};

/**
 * 当ポートフォリオ用のページ内移動処理を実装します。
 */
const implementInPageScrolling = (): void => {
  for (const e of Array.from(document.querySelectorAll(".header__in-page-link"))) {
    e.addEventListener("click", (event: Event): void => {
      event.preventDefault();
      const destinationPath = (event.target as HTMLAnchorElement).href;
      const destinationID = destinationPath.match(/#.*$/);
      if (destinationID === null) {
        document.documentElement.scrollTop = 0;
        return;
      }
      const destination = document.querySelector(destinationID[0]);
      document.documentElement.scrollTop += destination?.getBoundingClientRect().top ?? 0;
    });
  }
};

/**
 * 当ポートフォリオを構成する主要なコンテンツのmin-heightプロパティに適当な値を設定します。
 * 具体的にはビューポートの高さからヘッダーの高さを引いた値が設定値となります。
 */
const implementProcessingThatResizeMinHeightOfContents = (): void => {
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
    for (const e of Array.from(document.querySelectorAll<HTMLElement>(".main__content"))) {
      e.style.minHeight = `${document.documentElement.clientHeight - _header.scrollHeight}px`;
    }
  }).observe(document.documentElement);
};

/**
 * 当ポートフォリオを構成する主要なコンテンツ名のmargin-topプロパティに適当な値を設定します。
 * 具体的にはビューポートの高さと、コンテンツ名を視覚的にちょうどよい位置に置くための幅を設定します。
 */
const setMarginTopOfContentTitles = (): void => {
  for (const e of Array.from(document.querySelectorAll<HTMLElement>(".main__content-title"))) {
    e.style.marginTop = `${_header.scrollHeight * 2}px`;
  }
};

/**
 * 自己紹介文を記述した<table>タグの各行のpadding-topプロパティに適用な値を設定します。
 */
const setPaddingTopOfProfilRow = (): void => {
  const profilTable = document.querySelector(".main__profil");
  if (profilTable === null) {
    throw new Error("自己紹介文を記述した<table>タグが見つかりません。");
  }

  // 自己紹介文を記述した<table>タグを構成する<tr>タグを取得します。
  // <table>タグ直下に<tbody>タグが勝手に挿入されている場合を考慮した処理を実装します。
  let tableRowList: HTMLTableRowElement[];
  if (profilTable.children[0] instanceof HTMLTableSectionElement) {
    tableRowList = Array.from(profilTable.children[0].children) as HTMLTableRowElement[];
  } else {
    tableRowList = Array.from(profilTable.children) as HTMLTableRowElement[];
  }

  for (let i = 0; i < tableRowList.length; i += 1) {
    if (i === 0) {
      continue;
    }
    if (!(tableRowList[i].children[0].classList.contains("main__profil-head"))) {
      continue;
    }
    for (const e of Array.from(tableRowList[i].children) as HTMLElement[]) {
      e.style.paddingTop = "1.5rem";
    }
  }
};

/**
 * 現在表示中のコンテンツに合わせたスタイルを適用します。
 * @param {Element[]} mainContentList ポートフォリオを構成する主要な区画をまとめた配列です。
 * @param {Element[]} inPageLinkList 各区画へのページ内移動用リンクをまとめた配列です。
 */
const setStylesOfCurrentContent = (mainContentList: Element[], inPageLinkList: Element[]): void => {

  // 処理を開始するに先んじて、表示中のコンテンツを表すスタイルを外しておきます。
  for (const e of Array.from(inPageLinkList)) {
    if (e.classList.contains("header__in-page-link--being-displayed")) {
      e.classList.remove("header__in-page-link--being-displayed");
    }
  }

  // ビューポート中央に見えているHTML要素が属しているコンテンツが何かを特定します。
  let contentBeingDisplayed: Element | null = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
  while (contentBeingDisplayed !== null && contentBeingDisplayed !== document.body) {
    const findedContentIndex = mainContentList.findIndex((value: Element, index: number, obj: Element[]): boolean => {
      return value === contentBeingDisplayed;
    });
    if (findedContentIndex === -1) {
      contentBeingDisplayed = contentBeingDisplayed.parentElement;
      continue;
    }
    inPageLinkList[findedContentIndex].classList.add("header__in-page-link--being-displayed");
    return;
  }

  // ビューポートに表示しているのがいずれのコンテンツにも該当しないときはホーム画面を表示中と判断します。
  inPageLinkList[0].classList.add("header__in-page-link--being-displayed");
};

// 各所から参照される値を準備します。
const _header = getHeader();

// 初期化の順番は順不同で問題ありません（とりあえずアルファベット順に並べています）。
implementCurrentContentStyleSetting();
implementInPageScrolling();
implementProcessingThatResizeMinHeightOfContents();
setMarginTopOfContentTitles();
setPaddingTopOfProfilRow();

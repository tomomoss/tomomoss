/**
 * タイトルアニメーションを構成する部品のうち「石田 智義」の部分を生成します。
 * @returns {HTMLElement} タイトルアニメーションを構成する部品のうち「石田 智義」の部分です。
 */
const createText1 = (): HTMLElement => {
  const text1 = document.createElement("div");
  text1.innerText = "石田 智義";
  text1.style.background = "rgb(102, 102, 102)";
  text1.style.color = "rgb(255, 255, 255)";
  text1.style.position = "absolute";
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {

    // 文章周りの空白の大きさです。
    const space = .05;

    text1.style.borderRadius = `${title.clientWidth * space}px`;
    text1.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    text1.style.font = `700 ${title.clientWidth * .15}px/100% "Zen Kaku Gothic Antique", sans-serif`;
    text1.style.padding = `${title.clientWidth * space}px`;
  }).observe(title);
  title.appendChild(text1);
  return text1;
};

/**
 * タイトルアニメーションを構成する部品のうち「の」の部分を生成します。
 * @returns {HTMLElement} タイトルアニメーションを構成する部品のうち「の」の部分です。
 */
const createText2 = (): HTMLElement => {
  const text2 = document.createElement("div");
  text2.innerText = "の";
  text2.style.background = "rgb(102, 102, 102)";
  text2.style.color = "rgb(255, 255, 255)";
  text2.style.position = "absolute";
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {

    // 文章周りの空白の大きさです。
    const space = .03;

    // 完全な円形にするため大きな値を指定しています。
    text2.style.borderRadius = `${title.clientWidth * 1}px`;

    text2.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    text2.style.font = `700 ${title.clientWidth * .12}px/100% "Zen Kaku Gothic Antique", sans-serif`;
    text2.style.padding = `${title.clientWidth * space}px`;
  }).observe(title);
  title.appendChild(text2);
  return text2;
};

/**
 * タイトルアニメーションを構成する部品のうち「ポートフォリオ」の部分を生成します。
 * @returns {HTMLElement} タイトルアニメーションを構成する部品のうち「ポートフォリオ」の部分です。
 */
const createText3 = (): HTMLElement => {
  const text3 = document.createElement("div");
  text3.innerText = "ポートフォリオ";
  text3.style.background = "rgb(102, 102, 102)";
  text3.style.color = "rgb(255, 255, 255)";
  text3.style.position = "absolute";
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {

    // 文章周りの空白の大きさです。
    const space = .04;

    text3.style.borderRadius = `${title.clientWidth * space}px`;
    text3.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    text3.style.font = `700 ${title.clientWidth * .12}px/100% "Zen Kaku Gothic Antique", sans-serif`;
    text3.style.padding = `${title.clientWidth * space}px`;
  }).observe(title);
  title.appendChild(text3);
  return text3;
};

/**
 * タイトルアニメーションの描画対象となるHTML要素を取得します。
 * @returns {HTMLElement} タイトルアニメーションの描画対象となるHTML要素です。
 */
const getTitle = (): HTMLElement => {
  const title = document.querySelector<HTMLElement>(".main__title");
  if (title === null) {
    throw new Error("タイトルアニメーションの描画対象となるHTML要素が見つかりませんでした。");
  }
  return title;
};

/**
 * タイトルアニメーションを再生します。
 */
const playTitleAnimation = (): void => {
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
    text1.style.left = `${(document.body.clientWidth - text1.clientWidth) / 2}px`;
    text1.style.top = `${title.clientHeight * .25}px`;
    text2.style.left = `${(document.body.clientWidth - text2.clientWidth) / 2}px`;
    text2.style.top = `${title.clientHeight * .5}px`;
    text3.style.left = `${(document.body.clientWidth - text3.clientWidth) / 2}px`;
    text3.style.top = `${title.clientHeight * .7}px`;
  }).observe(document.body);
  return;
  requestAnimationFrame(playTitleAnimation);
};

// タイトルアニメーションの進捗率です。
let progress = 0;

// タイトルアニメーションの描画対象となるHTML要素です。
const title = getTitle();

// タイトルアニメーションを構成する部品のうち「石田 智義」の部分です。
const text1 = createText1();

// タイトルアニメーションを構成する部品のうち「の」の部分です。
const text2 = createText2();

// タイトルアニメーションを構成する部品のうち「ポートフォリオ」の部分です。
const text3 = createText3();

export {
  playTitleAnimation
}

/**
 * タイトルアニメーションを構成する部品のうち「石田 智義」の部分を生成します。
 * @returns {HTMLElement} タイトルアニメーションを構成する部品のうち「石田 智義」の部分です。
 */
const createText1 = (): HTMLElement => {
  const text1 = document.createElement("div");
  text1.innerText = "石田 智義";
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
    setStylesOfText1();
  }).observe(document.body);
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
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
    setStylesOfText2();
  }).observe(document.body);
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
  new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
    setStylesOfText3();
  }).observe(document.body);
  title.appendChild(text3);
  return text3;
};

/**
 * ある進捗率に対して、引数で指定された範囲での進捗率がどの程度かを求めます。
 * @param {number} original 計算元となる進捗率です。
 * @param {number} start 範囲の開始率です。
 * @param {number} end 範囲の終了率です。
 * @returns {number} 換算した進捗率です。
 */
const convertProgress = (original: number, start: number, end: number): number => {
  if (original < start) {
    return 0;
  }
  if (original > end) {
    return 1;
  }
  return (original - start) / (end - start);
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

  // ----------------------------------------------------------------
  console.log(`${(progress * 100).toFixed(0)}%`);
  // ----------------------------------------------------------------

  setStylesOfText1();
  setStylesOfText2();
  setStylesOfText3();

  // タイトルアニメーションの再生が完了したかを判定して処理を分岐します。
  if (progress === 1) {
    return;
  }
  progress += .001;
  if (progress > 1) {
    progress = 1;
  }
  requestAnimationFrame(playTitleAnimation);
};

/**
 * タイトルアニメーションを構成する部品のうち「石田 智義」にスタイルを適用します。
 */
const setStylesOfText1 = (): void => {
  const progressOfThisPart = convertProgress(progress, 0, .2);

  // 文章周りの空白の大きさです。
  // paddingプロパティの値であり、またborder-radiusプロパティの値でもあります。
  const space = .05;

  text1.style.background = "rgb(102, 102, 102)";
  text1.style.borderRadius = `${title.clientWidth * space}px`;
  text1.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
  text1.style.color = "rgb(255, 255, 255)";
  text1.style.font = `700 ${title.clientWidth * .15}px/100% "Zen Kaku Gothic Antique", sans-serif`;

  // ビューポート左端から中央に向かって移動させます。
  // 部品「石田 智義」用のアニメーション進捗率における0%から60%を使います。
  const initialPosition = -text1.clientWidth;
  const distanceFromLeftIntoCenter = text1.clientWidth + (document.documentElement.clientWidth - text1.clientWidth) / 2;
  text1.style.left = `${initialPosition + distanceFromLeftIntoCenter * convertProgress(progressOfThisPart, 0, .6)}px`;

  text1.style.padding = `${title.clientWidth * space}px`;
  text1.style.position = "absolute";

  // 部品「石田 智義」用のアニメーション進捗率の80%から100%にかけて5vhぶん下方に移動させます。
  // 最終的な位置はビューポート中央より15vhぶんの間隔を空けた位置です。
  text1.style.top = `${-text1.clientHeight + document.documentElement.clientHeight * (.3 + .05 * convertProgress(progressOfThisPart, .8, 1))}px`;

  text1.style.whiteSpace = "nowrap";
};

/**
 * タイトルアニメーションを構成する部品のうち「の」にスタイルを適用します。
 */
const setStylesOfText2 = (): void => {
  const progressOfThisPart = convertProgress(progress, .55, .8);

  // 文章周りの空白の大きさです。
  // paddingプロパティの値であり、またborder-radiusプロパティの値でもあります。
  const space = .03;

  text2.style.background = "rgb(102, 102, 102)";

  // 完全な円にします。
  text2.style.borderRadius = `${text2.clientWidth + text2.clientHeight}px`;

  text2.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
  text2.style.color = "rgb(255, 255, 255)";
  text2.style.font = `700 ${title.clientWidth * .12}px/100% "Zen Kaku Gothic Antique", sans-serif`;

  // ビューポート左端から中央に向かって移動させます。
  // 中央に向かうにつれて少しずつ遅くなり、中央を少し超えたところで停止して中央に戻ります。
  // 部品「の」用のアニメーション進捗率をいっぱい使いますが0%から80%、80%から90%、90%から100%でそれぞれ挙動が異なります。
  const initialPosition = -text2.clientWidth;
  const distanceFromLeftIntoCenter = text2.clientWidth + (document.documentElement.clientWidth - text2.clientWidth) / 2;
  const distanceFromLeftIntoOverCenter = distanceFromLeftIntoCenter * 1.05;
  const firstPartLimit = .75;
  const secondPartLimit = .85;
  const thirdPartLimit = 1;
  if (progressOfThisPart < firstPartLimit) {
    text2.style.left = `${initialPosition + distanceFromLeftIntoOverCenter * convertProgress(progressOfThisPart, 0, firstPartLimit)}px`;
  } else if (progressOfThisPart < secondPartLimit) {
    text2.style.left = `${initialPosition + distanceFromLeftIntoOverCenter}px`;
  } else {
    const startPosition = initialPosition + distanceFromLeftIntoOverCenter;
    const distanceFromOverCenterIntoCenter = distanceFromLeftIntoOverCenter - distanceFromLeftIntoCenter;
    text2.style.left = `${startPosition - distanceFromOverCenterIntoCenter * convertProgress(progressOfThisPart, secondPartLimit, thirdPartLimit)}px`;
  }

  text2.style.padding = `${title.clientWidth * space}px`;
  text2.style.position = "absolute";

  // ビューポート左端から中央に向かって移動するのにあわせて時計回りに回転させます。
  if (progressOfThisPart < firstPartLimit) {
    text2.style.transform = `rotate(${360 * 1.05 * convertProgress(progressOfThisPart, 0, firstPartLimit)}deg)`;
  } else if (progressOfThisPart < secondPartLimit) {
    text2.style.transform = `rotate(${360 * 1.05}deg)`;
  } else {
    text2.style.transform = `rotate(${360 * 1.05 - 360 * .05 * convertProgress(progressOfThisPart, secondPartLimit, thirdPartLimit)}deg)`;
  }

  // 中央に配置します。
  text2.style.top = `calc(50vh - ${text2.clientHeight / 2}px)`;
};

/**
 * タイトルアニメーションを構成する部品のうち「ポートフォリオ」にスタイルを適用します。
 */
const setStylesOfText3 = (): void => {
  const progressOfThisPart = convertProgress(progress, .25, .45);

  // 文章周りの空白の大きさです。
  const space = .04;

  text3.style.background = "rgb(102, 102, 102)";
  text3.style.borderRadius = `${title.clientWidth * space}px`;
  text3.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
  text3.style.color = "rgb(255, 255, 255)";
  text3.style.font = `700 ${title.clientWidth * .12}px/100% "Zen Kaku Gothic Antique", sans-serif`;

  // ビューポート右端から中央に向かって移動させます。
  // 部品「ポートフォリオ」用のアニメーション進捗率における0%から60%を使います。
  const initialPosition = document.documentElement.clientWidth;
  const distanceFromRightIntoCenter = text3.clientWidth + (document.documentElement.clientWidth - text3.clientWidth) / 2;
  text3.style.left = `${initialPosition - distanceFromRightIntoCenter * convertProgress(progressOfThisPart, 0, .6)}px`;

  text3.style.position = "absolute";
  text3.style.padding = `${title.clientWidth * space}px`;

  // 部品「ポートフォリオ」用のアニメーション進捗率の80%から100%にかけて5vhぶん下方に移動させます。
  // 最終的な位置はビューポート中央より15vhぶんの間隔を空けた位置です。
  text3.style.top = `${60 + 5 * convertProgress(progressOfThisPart, .8, 1)}vh`;

  text3.style.whiteSpace = "nowrap";
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

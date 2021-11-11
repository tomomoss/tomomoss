/**
 * タイトルアニメーションを構成する部品のうち「石田 智義」という文章を運ぶマスコットです。
 * @param {"a" | "b"} type 生成するマスコットの種類です。
 */
class Mascot1 {
  constructor(type: "a" | "b") {
    this.#type = type;
    this.element = document.createElement("canvas");
    title.appendChild(this.element);
    const context = this.element.getContext("2d");
    if (context === null) {
      throw new Error("「マスコット1」のCanvasコンテキストが取得できませんでした。");
    }
    this.#context = context;
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLCanvasElement;

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {
    if (progress.value > .4) {
      this.element.remove();
      return;
    }
    this.element.height = document.documentElement.clientHeight * .1;
    this.element.width = document.documentElement.clientHeight * .1;

    // Canvas APIによって描画される内容は<canvas>タグのスタイル値に依存しますので、
    // スタイルを適用してからCanvas APIを使って描画するようにします。
    this.#setStyles();
    this.#draw();
  }

  // 当部品を描画する<canvas>タグと紐づくCanvasコンテキストです。
  #context: CanvasRenderingContext2D;

  /**
   * 生成するマスコットの種類です。
   */
  #type: "a" | "b";

  /**
   * タイトルアニメーションの進捗率に合わせて描画します。
   */
  #draw(): void {
    this.#context.clearRect(0, 0, this.element.width, this.element.height);

    // 頭を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.arc(this.element.width * .5, this.element.height * .2, this.element.height * .2, 0, Math.PI * 2);
    this.#context.fill();

    // 胴体を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.moveTo(this.element.width * .5, this.element.height * .45);
    this.#context.lineTo(this.element.width * .6, this.element.height * .6);
    this.#context.lineTo(this.element.width * .5, this.element.height * .75);
    this.#context.lineTo(this.element.width * .4, this.element.height * .6);
    this.#context.closePath();
    this.#context.fill();

    // 手を描画します。
    if (progress.value < .2) {
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    } else if (progress.value < .25) {
      const progressOfThisPart = progress.convert(.2, .25);
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1 + document.documentElement.clientHeight * .05 * progressOfThisPart, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1 + document.documentElement.clientHeight * .05 * progressOfThisPart, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    } else if (progress.value < .3) {
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1 + document.documentElement.clientHeight * .05, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1 + document.documentElement.clientHeight * .05, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    }

    // 左足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .15 || progress.value > .3 && progress.value < .4) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .3, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      } else {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .3, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      }
      this.#context.fill();
    } else if (progress.value < .3) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }

    // 右足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .15 || progress.value > .3 && progress.value < .4) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .7, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      } else {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .7, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      }
      this.#context.fill();
    } else if (progress.value < .3) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }
  }

  /**
   * 現在の進捗度合いに合わせたスタイルを適用します。
   */
  #setStyles(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    this.element.style.height = `${this.element.height}px`;
    this.element.style.position = "absolute";
    this.element.style.top = `${document.documentElement.clientHeight * .35 - this.element.clientHeight}px`;
    this.element.style.width = `${this.element.width}px`;

    // 進捗度合いに合わせた処理を実行します。
    const middlePositionA = parseFloat(text1.element.style.left) - this.element.clientWidth * .75;
    const middlePositionB = parseFloat(text1.element.style.left) + text1.element.clientWidth - this.element.clientWidth * .25;
    const distance = this.element.clientWidth * .75 + text1.element.clientWidth + (document.documentElement.clientWidth - text1.element.clientWidth) / 2;

    // 進捗率0%から30%にかけて、部品「石田 智義」からの相対的な位置につきます。
    if (progress.value < .3) {
      if (this.#type === "a") {
        this.element.style.left = `${middlePositionA}px`;
      } else {
        this.element.style.left = `${middlePositionB}px`;
      }
      return;
    }

    // 進捗率30%から40%にかけて、ビューポート右端に移動します。
    if (progress.value < .4) {
      if (this.#type === "a") {
        this.element.style.left = `${middlePositionA + (distance) * progress.convert(.3, .4)}px`;
      } else {
        this.element.style.left = `${middlePositionB + (distance) * progress.convert(.3, .4)}px`;
      }
      return;
    }
  }
}

/**
 * タイトルアニメーションを構成する部品のうち「の」という文章を運ぶマスコットです。
 */
class Mascot2 {
  constructor() {
    this.element = document.createElement("canvas");
    title.appendChild(this.element);
    const context = this.element.getContext("2d");
    if (context === null) {
      throw new Error("「マスコット3」のCanvasコンテキストが取得できませんでした。");
    }
    this.#context = context;
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLCanvasElement;

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {
    if (progress.value === 1) {
      this.element.remove();
      return;
    }
    this.element.height = document.documentElement.clientHeight * .1;
    this.element.width = document.documentElement.clientHeight * .1;

    // Canvas APIによって描画される内容は<canvas>タグのスタイル値に依存しますので、
    // スタイルを適用してからCanvas APIを使って描画するようにします。
    this.#setStyles();
    this.#draw();
  }

  /**
   * 当部品を描画する<canvas>タグと紐づくCanvasコンテキストです。
   */
  #context: CanvasRenderingContext2D;



  /**
   * タイトルアニメーションの進捗率に合わせて描画します。
   */
  #draw(): void {

    // 頭を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.arc(this.element.width * .5, this.element.height * .2, this.element.height * .2, 0, Math.PI * 2);
    this.#context.fill();

    // 胴体を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.moveTo(this.element.width * .5, this.element.height * .45);
    this.#context.lineTo(this.element.width * .6, this.element.height * .6);
    this.#context.lineTo(this.element.width * .5, this.element.height * .75);
    this.#context.lineTo(this.element.width * .4, this.element.height * .6);
    this.#context.closePath();
    this.#context.fill();

    // 手を描画します。
    if (progress.value < .9) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .9, this.element.height * .4, this.element.height * .1, 0, Math.PI * 2);
      this.#context.fill();
    }

    // 左足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .75 || progress.value > .8 && progress.value < .85 || progress.value > .9 && progress.value < 1) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        this.#context.arc(this.element.width * .3, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
      } else {
        this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      }
      this.#context.fill();
    } else if (progress.value < .8 || progress.value > .85 && progress.value < .9) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }

    // 右足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .75 || progress.value > .8 && progress.value < .85 || progress.value > .9 && progress.value < 1) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      } else {
        this.#context.arc(this.element.width * .7, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
      }
      this.#context.fill();
    } else if (progress.value < .8 || progress.value > .85 && progress.value < .9) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }
  }

  /**
   * 現在の進捗度合いに合わせたスタイルを適用します。
   */
  #setStyles(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    this.element.style.height = `${this.element.height}px`;
    this.element.style.position = "absolute";
    this.element.style.top = `${parseFloat(text2.element.style.top) + text2.element.clientHeight - this.element.clientHeight}px`;
    this.element.style.width = `${this.element.width}px`;

    // 進捗度合いに合わせた処理を実行します。
    const initialPosition = parseFloat(text2.element.style.left) - this.element.clientWidth * .85;
    const distance = parseFloat(text2.element.style.left) + this.element.clientWidth;
    if (progress.value < .85) {
      this.element.style.left = `${initialPosition}px`;
      return;
    }
    if (progress.value < 1) {
      this.element.style.left = `${initialPosition - distance * progress.convert(.9, 1)}px`;
      return;
    }
  }
}

/**
 * タイトルアニメーションを構成する部品のうち「ポートフォリオ」という文章を運ぶマスコットです。
 * @param {"a" | "b"} type 生成するマスコットの種類です。
 */
class Mascot3 {
  constructor(type: "a" | "b") {
    this.#type = type;
    this.element = document.createElement("canvas");
    title.appendChild(this.element);
    const context = this.element.getContext("2d");
    if (context === null) {
      throw new Error("「マスコット3」のCanvasコンテキストが取得できませんでした。");
    }
    this.#context = context;
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLCanvasElement;

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {
    if (progress.value > .7) {
      this.element.remove();
      return;
    }
    this.element.height = document.documentElement.clientHeight * .1;
    this.element.width = document.documentElement.clientHeight * .1;

    // Canvas APIによって描画される内容は<canvas>タグのスタイル値に依存しますので、
    // スタイルを適用してからCanvas APIを使って描画するようにします。
    this.#setStyles();
    this.#draw();
  }

  // 当部品を描画する<canvas>タグと紐づくCanvasコンテキストです。
  #context: CanvasRenderingContext2D;

  /**
   * 生成するマスコットの種類です。
   */
  #type: "a" | "b";

  /**
   * タイトルアニメーションの進捗率に合わせて描画します。
   */
  #draw(): void {
    this.#context.clearRect(0, 0, this.element.width, this.element.height);

    // 頭を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.arc(this.element.width * .5, this.element.height * .2, this.element.height * .2, 0, Math.PI * 2);
    this.#context.fill();

    // 胴体を描画します。
    // 進捗率に関係なく同じ内容になります。
    this.#context.beginPath();
    this.#context.moveTo(this.element.width * .5, this.element.height * .45);
    this.#context.lineTo(this.element.width * .6, this.element.height * .6);
    this.#context.lineTo(this.element.width * .5, this.element.height * .75);
    this.#context.lineTo(this.element.width * .4, this.element.height * .6);
    this.#context.closePath();
    this.#context.fill();

    // 手を描画します。
    if (progress.value < .5) {
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    } else if (progress.value < .55) {
      const progressOfThisPart = progress.convert(.5, .55);
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1 + document.documentElement.clientHeight * .05 * progressOfThisPart, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1 + document.documentElement.clientHeight * .05 * progressOfThisPart, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    } else if (progress.value < .6) {
      if (this.#type === "a") {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .9, this.element.height * .1 + document.documentElement.clientHeight * .05, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      } else {
        this.#context.beginPath();
        this.#context.arc(this.element.width * .1, this.element.height * .1 + document.documentElement.clientHeight * .05, this.element.height * .1, 0, Math.PI * 2);
        this.#context.fill();
      }
    }

    // 左足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .45 || progress.value > .6 && progress.value < .7) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .3, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      } else {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .3, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      }
      this.#context.fill();
    } else if (progress.value < .6) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .3, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }

    // 右足を描画します。
    // 移動しているときは一定間隔で足が上下します。
    // マスコットAとBで上がる足が逆になります。
    if (progress.value < .45 || progress.value > .6 && progress.value < .7) {
      this.#context.beginPath();
      if (Math.floor(progress.value * 100) % 2 === 0) {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .7, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      } else {
        if (this.#type === "a") {
          this.#context.arc(this.element.width * .7, this.element.height * .9, this.element.width * .15, Math.PI, Math.PI * 2);
        } else {
          this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
        }
      }
      this.#context.fill();
    } else if (progress.value < .6) {
      this.#context.beginPath();
      this.#context.arc(this.element.width * .7, this.element.height * 1, this.element.width * .15, Math.PI, Math.PI * 2);
      this.#context.fill();
    }
  }

  /**
   * 現在の進捗度合いに合わせたスタイルを適用します。
   */
  #setStyles(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    this.element.style.height = `${this.element.height}px`;
    this.element.style.position = "absolute";
    this.element.style.top = `${document.documentElement.clientHeight * .65 + (text3.element.clientHeight - this.element.clientHeight)}px`;
    this.element.style.width = `${this.element.width}px`;

    // 進捗度合いに合わせた処理を実行します。
    const middlePositionA = parseFloat(text3.element.style.left) - this.element.clientWidth * .75;
    const middlePositionB = parseFloat(text3.element.style.left) + text3.element.clientWidth - this.element.clientWidth * .25;
    const distance = -this.element.clientWidth * .25 + text3.element.clientWidth + (document.documentElement.clientWidth - text3.element.clientWidth) / 2 + this.element.clientWidth;

    // 進捗率30%から60%にかけて、部品「石田 智義」からの相対的な位置につきます。
    if (progress.value < .6) {
      if (this.#type === "a") {
        this.element.style.left = `${middlePositionA}px`;
      } else {
        this.element.style.left = `${middlePositionB}px`;
      }
      return;
    }

    // 進捗率60%から70%にかけて、ビューポート左端に移動します。
    if (progress.value < .7) {
      if (this.#type === "a") {
        this.element.style.left = `${middlePositionA - (distance) * progress.convert(.6, .7)}px`;
      } else {
        this.element.style.left = `${middlePositionB - (distance) * progress.convert(.6, .7)}px`;
      }
      return;
    }
  }
}

/**
 * タイトルアニメーションの進捗度合いを管理するクラスです。
 */
class Progress {
  constructor() {
    this.#limit = 1000;
    this.#rate = 0;
  }

  /**
   * タイトルアニメーションの進捗度合いを「0」から「1」の間で返します。
   */
  get value(): number {
    return this.#rate / this.#limit;
  }

  /**
   * タイトルアニメーション全体の進捗度合いのうち、引数で指定された範囲内における進捗度合いを返します。
   * @param {number} start 範囲の開始率です。
   * @param {number} end 範囲の終了率です。
   * @returns {number} 換算した進捗率です。
   */
  convert(start: number, end: number): number {
    if (this.value < start) {
      return 0;
    }
    if (this.value > end) {
      return 1;
    }
    return (this.value - start) / (end - start);
  }

  /**
   * タイトルアニメーションの進捗度合いを進めます。
   */
  update(): void {

    // 進捗度合いの加算量は必ず整数でなければなりません。
    // というのも、当メソッドが呼びだされるのはrequestAnimationFrameメソッドに渡されるコールバック関数の中からなのですが、
    // 前述の状況下で加算量が小数の場合は処理の途中から合計値がずれはじてしまうのです（原因は不明）。
    this.#rate += 1;
  }

  /**
   * タイトルアニメーションの進捗度合いの上限です。
   * タイトルアニメーションの再生時間はこの値に応じて前後します。
   */
  #limit: number;

  /**
   * タイトルアニメーションの進捗度合いです。
   */
  #rate: number;
};

/**
 * タイトルアニメーションを構成する部品のうち「石田 智義」という文章です。
 */
class Text1 {
  constructor() {
    this.element = document.createElement("div");
    this.element.innerText = "石田 智義";
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
    title.appendChild(this.element);
  }

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    const blankSpaceSize = `${title.clientWidth * .05}px`;
    const fontSize = `${title.clientWidth * .15}px`;
    this.element.style.background = "rgb(102, 102, 102)";
    this.element.style.borderRadius = blankSpaceSize;
    this.element.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    this.element.style.color = "rgb(255, 255, 255)";
    this.element.style.font = `700 ${fontSize}/100% "Zen Kaku Gothic Antique", sans-serif`;
    this.element.style.padding = blankSpaceSize;
    this.element.style.position = "absolute";
    this.element.style.whiteSpace = "nowrap";

    // 進捗度合いに合わせた処理を実行します。
    const initialPositionOfLeft = -this.element.clientWidth - mascot1B.element.clientWidth * .75;
    const distanceOfLeft = this.element.clientWidth + (document.documentElement.clientWidth - this.element.clientWidth) / 2 + mascot1B.element.clientWidth * .75;
    const lastPositionOfLeft = initialPositionOfLeft + distanceOfLeft;
    const initialPositionOfTop = document.documentElement.clientHeight * .3 - this.element.clientHeight;
    const distanceOfTop = document.documentElement.clientHeight * .05;
    const lastPositionOfTop = initialPositionOfTop + distanceOfTop;

    // 進捗率0%から15%にかけて、当部品をビューポート左端から中央に向かって移動させます。
    if (progress.value < .15) {
      this.element.style.left = `${initialPositionOfLeft + distanceOfLeft * progress.convert(0, .15)}px`;
      this.element.style.top = `${initialPositionOfTop}px`;
      return;
    }

    // 15%から20%にかけて、中央で少し待機させます。
    if (progress.value < .2) {
      this.element.style.left = `${lastPositionOfLeft}px`;
      this.element.style.top = `${initialPositionOfTop}px`;
      return;
    }

    // 20%から25%にかけて、5vhぶん下方に移動させます。
    if (progress.value < .25) {
      this.element.style.left = `${lastPositionOfLeft}px`;
      this.element.style.top = `${initialPositionOfTop + distanceOfTop * progress.convert(.2, .25)}px`;
      return;
    }

    // 最終的にはビューポート中央より15vhぶんの空白を空けた位置に部品を固定します。
    this.element.style.left = `${lastPositionOfLeft}px`;
    this.element.style.top = `${lastPositionOfTop}px`;
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLElement;
}

/**
 * タイトルアニメーションを構成する部品のうち「の」という文章です。
 */
class Text2 {
  constructor() {
    this.element = document.createElement("div");
    this.element.innerText = "の";
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
    title.appendChild(this.element);
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLElement;

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    const fontSize = `${title.clientWidth * .12}px`;
    this.element.style.background = "rgb(102, 102, 102)";

    // 完全な円にします。
    this.element.style.borderRadius = `${this.element.clientHeight + this.element.clientWidth}px`;

    this.element.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    this.element.style.color = "rgb(255, 255, 255)";
    this.element.style.font = `700 ${fontSize}/100% "Zen Kaku Gothic Antique", sans-serif`;
    this.element.style.padding = "1.2rem";
    this.element.style.position = "absolute";
    this.element.style.top = `${document.documentElement.clientHeight * .5 - this.element.clientHeight / 2}px`;
    this.element.style.whiteSpace = "nowrap";

    // 進捗度合いに合わせた処理を実行します。
    const initialPositionOfLeft = -this.element.clientWidth;
    const baseDistanceOfLeft = this.element.clientWidth + (document.documentElement.clientWidth - this.element.clientWidth) / 2;
    const distance1OfLeft = baseDistanceOfLeft * 1.05;
    const middlePositionOfLeft = initialPositionOfLeft + distance1OfLeft;
    const distance2OfLeft = baseDistanceOfLeft * .05;
    const lastPositionOfLeft = middlePositionOfLeft - distance2OfLeft;

    // 進捗率60%から75%にかけて、当部品をビューポート左端から中央よりわずかに右寄りに向かって移動させます。
    if (progress.value < .75) {
      this.element.style.left = `${initialPositionOfLeft + distance1OfLeft * progress.convert(.6, .75)}px`;
      this.element.style.transform = `rotate(${360 * 1.05 * progress.convert(.6, .75)}deg)`;
      return;
    }

    // 75%から80%にかけて、中央よりわずかに右寄りで少し待機させます。
    if (progress.value < .8) {
      this.element.style.left = `${middlePositionOfLeft}px`;
      return;
    }

    // 80%から85%にかけて中央に移動します。
    if (progress.value < .85) {
      this.element.style.left = `${middlePositionOfLeft - distance2OfLeft * progress.convert(.8, .85)}px`;
      this.element.style.transform = `rotate(${360 * 1.05 - 360 * .05 * progress.convert(.8, .85)}deg)`;
      return;
    }

    // 最終的にはビューポート中央より15vhぶんの空白を空けた位置に部品を固定します。
    this.element.style.left = `${lastPositionOfLeft}px`;
  }
}

/**
 * タイトルアニメーションを構成する部品のうち「ポートフォリオ」という文章です。
 */
class Text3 {
  constructor() {
    this.element = document.createElement("div");
    this.element.innerText = "ポートフォリオ";
    new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      this.animate();
    }).observe(document.body);
    title.appendChild(this.element);
  }

  /**
   * 当部品を表すHTML要素です。
   */
  element: HTMLElement;

  /**
   * 現在の進捗度合いに合わせて部品を動かします。
   */
  animate(): void {

    // まずは進捗度合いに関係のない処理を実行します。
    const blankSpaceSize = `${title.clientWidth * .04}px`;
    const fontSize = `${title.clientWidth * .12}px`;
    this.element.style.background = "rgb(102, 102, 102)";
    this.element.style.borderRadius = blankSpaceSize;
    this.element.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 10%), 0 .1rem .5rem rgba(0, 0, 0, 10%)";
    this.element.style.color = "rgb(255, 255, 255)";
    this.element.style.font = `700 ${fontSize}/100% "Zen Kaku Gothic Antique", sans-serif`;
    this.element.style.padding = blankSpaceSize;
    this.element.style.position = "absolute";
    this.element.style.whiteSpace = "nowrap";

    // 進捗度合いに合わせた処理を実行します。
    const initialPositionOfLeft = document.documentElement.clientWidth + mascot3A.element.clientWidth * .75;
    const distanceOfLeft = -(this.element.clientWidth + (document.documentElement.clientWidth - this.element.clientWidth) / 2) - mascot3A.element.clientWidth * .75;
    const lastPositionOfLeft = initialPositionOfLeft + distanceOfLeft;
    const initialPositionOfTop = document.documentElement.clientHeight * .6;
    const distanceOfTop = document.documentElement.clientHeight * .05;
    const lastPositionOfTop = initialPositionOfTop + distanceOfTop;

    // 進捗率30%から45%にかけて、当部品をビューポート右端から中央に向かって移動させます。
    if (progress.value < .45) {
      this.element.style.left = `${initialPositionOfLeft + distanceOfLeft * progress.convert(.3, .45)}px`;
      this.element.style.top = `${initialPositionOfTop}px`;
      return;
    }

    // 45%から50%にかけて、中央で少し待機させます。
    if (progress.value < .5) {
      this.element.style.left = `${lastPositionOfLeft}px`;
      this.element.style.top = `${initialPositionOfTop}px`;
      return;
    }

    // 50%から55%にかけて、5vhぶん下方に移動させます。
    if (progress.value < .55) {
      this.element.style.left = `${lastPositionOfLeft}px`;
      this.element.style.top = `${initialPositionOfTop + distanceOfTop * progress.convert(.5, .55)}px`;
      return;
    }

    // 最終的にはビューポート中央より15vhぶんの空白を空けた位置に部品を固定します。
    this.element.style.left = `${lastPositionOfLeft}px`;
    this.element.style.top = `${lastPositionOfTop}px`;
  }
}

/**
 * タイトルアニメーションの描画対象となるHTML要素を取得します。
 * @returns {HTMLElement} タイトルアニメーションの描画対象となるHTML要素です。
 */
function getTitle(): HTMLElement {
  const title = document.querySelector<HTMLElement>(".main__title");
  if (title === null) {
    throw new Error("タイトルアニメーションの描画対象となるHTML要素が見つかりませんでした。");
  }
  return title;
}

/**
 * タイトルアニメーションを再生します。
 */
function playTitleAnimation(): void {

  // タイトルアニメーションを構成する各部品を動かします。
  text1.animate();
  text2.animate();
  text3.animate();
  mascot1A.animate();
  mascot1B.animate();
  mascot2.animate();
  mascot3A.animate();
  mascot3B.animate();

  // タイトルアニメーションの再生が完了したかを判定して処理を分岐します。
  if (progress.value === 1) {
    return;
  }
  progress.update();
  requestAnimationFrame(playTitleAnimation);
}

// タイトルアニメーションの進捗度合いを管理するオブジェクトです。
const progress = new Progress();

// タイトルアニメーションの描画対象となるHTML要素です。
const title = getTitle();

// タイトルアニメーションを構成する部品のうち「石田 智義」という文章です。
const text1 = new Text1();

// タイトルアニメーションを構成する部品のうち「の」という文章です。
const text2 = new Text2();

// タイトルアニメーションを構成する部品のうち「ポートフォリオ」という文章です。
const text3 = new Text3();

// タイトルアニメーションを構成する部品のうち「石田 智義」という文章を運ぶマスコットです。
const mascot1A = new Mascot1("a");

// タイトルアニメーションを構成する部品のうち「石田 智義」という文章を運ぶマスコットです。
const mascot1B = new Mascot1("b");

// タイトルアニメーションを構成する部品のうち「の」という文章を運ぶマスコットです。
const mascot2 = new Mascot2();

// タイトルアニメーションを構成する部品のうち「ポートフォリオ」という文章を運ぶマスコットです。
const mascot3A = new Mascot3("a");

// タイトルアニメーションを構成する部品のうち「ポートフォリオ」という文章を運ぶマスコットです。
const mascot3B = new Mascot3("b");

export {
  playTitleAnimation
}

/**
 * 활성/비활성 기능 추가 및 이벤트를 조정해서
 * Items 컴포넌트가 되게 복잡해졌다.
 *
 * 이런 경우 컴포넌트의 역할인 재사용성이 희미해지는 상황이 연출된다.
 * 이럴땐 컴포넌트를 기능단위로 분해하는게 좋다.
 */

import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector('#app');

    new Items($app);
  }
}

new App();
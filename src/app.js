/**
 * 추상화에서 했던 것 처럼 한곳에 몰아서 하는 것보단 
 * 기능 혹은, 역할별로 분할하는게 관리면에서 좋다.
 * 
 * Component를 가지고 Items를 정의
 */

import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector('#app');

    new Items($app);
  }
}

new App();
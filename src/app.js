/**
 * 2_module에서 진행한 코드에서 render()를 실행할 때 마다 이벤트가 일일히 새로 등록이 된다.
 * 또한, 만약 하나의 li에 해당 item을 삭제하는 버튼이 달려있다면
 * 이 버튼에 일일히 이벤트를 등록해야하는 귀찮은 미래가 펼쳐진다.
 *
 * 이런 상황은 이벤트 버블링을 사용해서
 * 굳이 일일히 등록하는 방식이 아닌 EventListener 하나를 등록한 후
 * 그 안에서 여러 이벤트를 등록하는 방식을 구현한다.
 *
 * 참고로 이때 Event의 라이프사이클을 Component에서 조정해준다.
 */

import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector('#app');

    new Items($app);
  }
}

new App();
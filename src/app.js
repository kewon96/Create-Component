/**
 * ES6의 class문법을 사용해서 추상화
 */

class Component {
  $target;
  $state;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {};
  template() { return '' };
  setEvent() {};

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.$state = { items: [ 'item1', 'item2' ] };
  }

  template() {
    const { items } = this.$state;

    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button id="append">추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector('button').addEventListener("click", () => {
      const { items } = this.$state;

      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector('#app'));

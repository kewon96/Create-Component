/**
 * 활성/비활성 기능 추가 및 이벤트를 조정해서
 * Items 컴포넌트가 되게 복잡해졌다.
 *
 * 이런 경우 컴포넌트의 역할인 재사용성이 희미해지는 상황이 연출된다.
 * 이럴땐 컴포넌트를 기능단위로 분해하는게 좋다.
 */

import Component from "./core/Component.js";
import Items from "./components/Items.js";
import ItemAppender from "./components/ItemAppender.js";
import ItemFilter from "./components/ItemFilter.js";

export default class App extends Component{
  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: 'item1',
          active: false,
        },
        {
          seq: 2,
          contents: 'item2',
          active: true,
        }
      ]
    };
  }

  template() {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
    const $target = this.$target,
          $itemAppender = $target.querySelector('[data-component="item-appender"]'),
          $items = $target.querySelector('[data-component="items"]'),
          $itemFilter = $target.querySelector('[data-component="item-filter"]');

    new ItemAppender($itemAppender, {
      addItem: addItem.bind(this)
    });

    new Items($items, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this)
    });

    new ItemFilter($itemFilter, {
      filterItem: filterItem.bind(this)
    });
  }

  get filteredItems() {
      const { isFilter, items } = this.$state;

      return items.filter( ({ active }) => (isFilter === 1 && active) ||  // 활성만
                                           (isFilter === 2 && !active) || // 비활성만
                                           (isFilter === 0) );
  }

  addItem(contents) {
    const { items } = this.$state;
    const seq = Math.max(0, ...items.map(i => i.seq)) + 1;
    const active = false;
    this.setState({
      items: [
          ...items, // 기존
          {seq, contents, active} // 새로 생성
      ]
    });
  }

  deleteItem(seq) {
    const items = [ ...this.$state.items ];
    items.splice(items.findIndex(i => i.seq === seq), 1);
    this.setState({ items });
  }

  toggleItem(seq) {
    const items = [ ...this.$state.items ];
    const index = items.findIndex(i => i.seq === seq);
    items[index].active = !items[index].active;
    this.setState({ items });
  }

  filterItem(isFilter) {
    this.setState({ isFilter });
  }
}

// new App();
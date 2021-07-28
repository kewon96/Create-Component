import Component from "../core/Component.js";

export default class ItemAppender extends Component {
    template() {
        return `
            <input type="text" class="appender" placeholder="내용 입력">
        `;
    }

    setEvent() {
        const { addItem } = this.$props;
        this.addEvent('keyup', '.appender', ({ key, target }) => {
            if(key !== 'Enter' || !target.value || target.value === '') return;

            addItem(target.value);
        });
    }
}

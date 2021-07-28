export default class Component {
    $target;
    $state;

    constructor($target) {
        this.$target = $target;
        this.setup();
        this.setEvent(); // Event Lifecycle 변경(생성자 호출 시 한번만 동작하게)
        this.render();
    }

    setup() {};
    template() { return ''; };
    setEvent() {};

    render() {
        this.$target.innerHTML = this.template();
    }

    setState(newState) {
        this.$state = { ...this.$state, ...newState };
        this.render();
    }

    addEvent(eventType, selector, callback) {
        const children = [ ...this.$target.querySelectorAll(selector) ];

        // 선택자가 selector보다 하위 요소일 수 있는데
        // 그럴때 closest을 사용
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this.$target.addEventListener(eventType, event => {
            if(!isTarget(event.target)) return false;

            callback(event);
        })
    }
}
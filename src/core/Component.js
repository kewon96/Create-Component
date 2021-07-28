export default class Component {
    $target;
    $props;
    $state;

    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props; // 부모 컴포넌트가 자식 컴포넌트한테 상태나 함수를 넘겨줄 용도
        this.setup();
        this.setEvent(); // Event Lifecycle 변경(생성자 호출 시 한번만 동작하게)
        this.render();
    }

    setup() {};
    mounted() {}; // render이후 추가적인 기능 수행
    template() { return ''; };
    setEvent() {};

    render() {
        this.$target.innerHTML = this.template();
        this.mounted();
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
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
}
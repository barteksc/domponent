import { Exponent } from 'domponent/dist/domponent.development';

export default class DisplayAnything extends Exponent {
  constructor(el) {
    super(el);
    this.code = this.$root.querySelector(".code");
    this.objects = this.$root.querySelector(".propObjects");
    this.displayProps();
  }

  propsDidUpdate(oldProps) {
    if (oldProps.goBold !== this.props.goBold) {
      this.displayProps();
    }
  }
  displayProps() {
    this.code.textContent = JSON.stringify(this.props, undefined, 4);
    this.objects.textContent = JSON.stringify(this.$p.goBold.parentComponentKey, undefined, 4);
  }
}
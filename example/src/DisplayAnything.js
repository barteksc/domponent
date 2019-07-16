import { Component } from "./Framework";

export default class DisplayAnything extends Component {
  constructor(el) {
    super(el);
  }
  componentMade() {
    this.code = this.root.querySelector(".code");
    this.objects = this.root.querySelector(".propObjects");
    this.displayProps();
  }
  propsDidUpdate(oldProps) {
    if (oldProps.goBold !== this.props.goBold) {
      this.displayProps();
    }
  }
  displayProps() {
    this.code.textContent = JSON.stringify(this.props, undefined, 4);
    this.objects.textContent = JSON.stringify(this.propObjects.goBold.parentComponentKey, undefined, 4);
  }
}

import { datasetEnum } from '../enums';

// generates the App
function InitApp(config) {
    // components and their instances
    this.components = config.components;
    this.registeredComponents = {};

    // methods to expose
    // create component
    this._cc = (el, cb) => {
      const key = el.getAttribute("data-key") || createKey();
      this.registeredComponents[key] = new config.components[
        (el.getAttribute("data-component"))
      ]({ rootEl: el, key, app: this });
      cb ? cb() : null;
    };
    // delete component
    this._dc = (key, cb) => {
      delete this.registeredComponents[key];
      cb ? cb() : null;
    };
    // register component
    this._rc = (name, C, cb) => {
      this.components[name] = C;
      cb ? cb() : null;
    };
    // unregister component
    this._urc = (name, cb) => {
      delete this.component[name];
      cb ? cb() : null;
    };
  
    // creating the components initially
    [...config.selector.querySelectorAll("[data-component]")].forEach(
      componentEl => {
        this._cc(componentEl);
      },
      this
    );
    config.appCreated ? config.appCreated() : null;
  
    // exposing methods
    return {
      createComponent: (el, cb) => this._cc(el, cb),
      deleteComponent: (el, cb) => this._dc(el, cb),
      register: (name, C, cb) => this._rc(name, C, cb),
      unregister: (name, cb) => this._urc(name, cb)
    };
  }
  // generates the app
  export default InitApp;
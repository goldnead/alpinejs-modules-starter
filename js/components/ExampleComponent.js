import "./styles.scss";

// if set, only initializes component when found in the DOM
export const selector = ".example-component";

// name that your component uses
// eg. in `<div x-data="example-component"></div>`
export const name = "example-component";

const ExampleComponent = () => ({
  init() {
    console.log("when you see this, I'm woking 🎉");
  }
});

export default ExampleComponent;

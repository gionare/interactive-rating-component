# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## general steps to use useState, props (properties)

In React, props (short for properties) are a way of passing data from parent to child components.

- Import useState: Import the useState hook from the react module at the top of your component file.

```jsx
import { useState } from "react";
```

- Declare state variables: declare one or more state variables using the useState hook.
- "passing props" in React.

```jsx
const [submit, setSubmit] = useState(false);
const [rate, setRate] = useState();
```

- Access State Variables: Lifting: You can use state variables just like any other variables in your component.
- state is moved from a child component to its parent component.

```jsx
<>
  <Header />
  <Score rate={rate} setRate={setRate} />
  <Btn setSubmit={setSubmit} rate={rate} />
</>
```

- in component file:

```jsx
export default function Score(props) {
    onClick={() => {
            props.setRate(item);
          }}
}
```

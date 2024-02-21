# React + Vite

# Feedback Collector

This project is a simple feedback collector built with React. It allows users to rate a service on a scale of 1 to 5 and submit their feedback.

## Highlights

- **React Components**: The project is structured using several React components:

  - `Header`:
  - `Score`:
  - `Btn`:
  - `ThankYouCard`:

- **State Management**: Utilizes React's `useState` hook to manage state within components.

  - `App` component manages the submission state (`submit`) and the selected rating (`rate`).
  - `Score` component updates the selected rating using the `setRate` function passed as a prop.

- **Conditional Rendering**: Conditionally renders components based on the submission state.

  - When `submit` is false, displays the header, rating buttons, and submit button.
  - When `submit` is true, displays a thank you message along with the selected rating.

  ```jsx
  <div className="card">
    {submit ? (
      <ThankYouCard rate={rate} />
    ) : (
      <>
        <Header />
        <Score rate={rate} setRate={setRate} />
        <Btn setSubmit={setSubmit} rate={rate} />
      </>
    )}
  </div>
  ```

- **CSS Styling**: Stylesheets (`App.css`, `Header.css`, `Score.css`, `Btn.css`, `ThankYouCard.css`) are used for styling components and layout.

- **Event Handling**: Handles user clicks on rating buttons and the submit button using event listeners.

```jsx
<button
  className="button"
  onClick={() => {
    if (props.rate) {
      props.setSubmit(true);
      console.log("Submission is happening");
    }
  }}
>
  S U B M I T{" "}
</button>
```

## Usage

To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/feedback-collector.git`
2. Navigate to the project directory: `cd feedback-collector`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000`

## Credits

This project was created by Giorgi Nareklishvili as a simple demonstration of React component composition, state management, and event handling.

## Feedback

If you have any feedback or suggestions for improvement, feel free to open an issue or submit a pull request. Your contributions are welcome!

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

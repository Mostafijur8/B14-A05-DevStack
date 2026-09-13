# DevStack - Technology Stack Builder

## 📌 Project Description

**DevStack** is a React and TypeScript based technology stack builder. Users can explore different technologies and create their own stack by adding their favorite technologies.

The application also prevents duplicate technologies from being added and allows users to remove individual technologies or clear the entire stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons

## ✨ Features

1. **Explore Technologies**
   Users can browse different technologies with their name, category, description, rating, difficulty, and icon.

2. **Build Your Stack**
   Users can add technologies to their personal stack and see the total number of selected technologies.

3. **Manage Your Stack**
   Users can remove individual technologies or remove all technologies at once. Duplicate technologies cannot be added.

## 🌐 Live Website

[Visit the Live Website](https://b14-05-devstack.netlify.app/)

## 📂 GitHub Repository

This project is built with React, TypeScript, and modern frontend technologies.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create UI components.

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data in a React component.

In this project, I used `useState` in the `useStack` custom hook to store the selected technologies:

```tsx
const [selectedCards, setSelectedCards] = useState<Icard[]>([]);
```

It is used to add, remove, and clear technologies from the user's stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to run side effects after a component renders.

It can be used to fetch data from an API or JSON file.

In this project, JSON data is loaded to display the technology cards.

> **Note:** If the project uses React `use()` with a Promise instead of `useEffect`, then `useEffect` is not actually needed in the implementation. The question is answered here based on the general React concept.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It allows React to understand which item was added, removed, or changed and update the UI efficiently.

Example:

```tsx
{
  cards.map((card) => <div key={card.id}>{card.name}</div>);
}
```

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI based on a condition.

In this project, I used it to show an empty message when no technology has been selected:

```tsx
{
  selectedCards.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    <div>{/* Selected technologies */}</div>
  );
}
```

When the stack is empty, the user sees **"Your stack is empty."**

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

For example:

```tsx
<Stack
  selectedCards={selectedCards}
  removeFromStack={removeFromStack}
  removeAll={removeAll}
/>
```

Here, the parent passes data and functions to the `Stack` child component.

A child can send information back to the parent by calling a function that the parent passed through props.

For example:

```tsx
<button onClick={() => removeFromStack(card.id)}>✕</button>
```

The child calls the parent's `removeFromStack` function with the selected item's ID.

---

## 👨‍💻 Author

**Mostafijur**

---

⭐ Thanks for checking out **DevStack**!

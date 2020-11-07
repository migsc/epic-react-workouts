import React from "react";

type Props = {
  onSubmit: (values: { username: string; password: string }) => void;
  buttonText?: string;
};

export default function LoginForm({ onSubmit, buttonText = "Login" }: Props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value
    });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
}

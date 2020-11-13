import React from "react";

type Props = {
  onSubmit: (values: { username: string; password: string }) => void;
  buttonText?: string;
};

export default function LoginForm({ onSubmit, buttonText = "Login" }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username: any = event.currentTarget.elements.namedItem("username");
    const password: any = event.currentTarget.elements.namedItem("password");

    onSubmit({
      username: username.value || "",
      password: password.value || "",
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

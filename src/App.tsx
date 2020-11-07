import * as React from "react";
import { Global, jsx, css } from "@emotion/core";
import Logo from "./components/Logo";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import LoginForm from "./components/LoginForm";
import Button from "./components/Button";
import TypographyStyles from "./styles/typography";

export default function App() {
  const [loginModalVisible, setLoginModalVisible] = React.useState(false);
  const [registerModalVisible, setRegisterModalVisible] = React.useState(false);

  const handleSubmitLoginForm = ({ username, password }) => {
    console.log({ username, password });
  };

  return (
    <>
      <TypographyStyles />
      <div>
        <Logo />
        <h1>Workouts</h1>
        <div>
          <Button variant="primary" onClick={() => setLoginModalVisible(true)}>
            Login
          </Button>
          <Button
            variant="secondary"
            onClick={() => setRegisterModalVisible(true)}
          >
            Register
          </Button>
        </div>
      </div>
      <Dialog
        isOpen={loginModalVisible}
        onDismiss={() => setLoginModalVisible(false)}
      >
        <button
          className="close-button"
          onClick={() => setLoginModalVisible(false)}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <LoginForm onSubmit={handleSubmitLoginForm} />
      </Dialog>
      <Dialog
        isOpen={registerModalVisible}
        onDismiss={() => setRegisterModalVisible(false)}
      >
        <button
          className="close-button"
          onClick={() => setRegisterModalVisible(false)}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>register</p>
      </Dialog>
    </>
  );
}

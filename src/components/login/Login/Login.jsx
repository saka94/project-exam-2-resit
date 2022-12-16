import LoginTabs from "../LoginTabs/LoginTabs";
import LoginVideo from "../LoginVideo/LoginVideo";

export default function Login() {
  return (
    <>
      <LoginVideo />
      <main className="d-flex justify-content-center">
        <LoginTabs />
      </main>
    </>
  );
}

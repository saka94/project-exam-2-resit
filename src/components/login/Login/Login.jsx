import LoginTabs from "../LoginTabs/LoginTabs";
import LoginVideo from "../LoginVideo/LoginVideo";

export default function Login() {
  return (
    <main className="d-flex justify-content-center">
      <LoginVideo />
      <LoginTabs />
    </main>
  );
}

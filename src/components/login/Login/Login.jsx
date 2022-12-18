import LoginTabs from "../LoginTabs/LoginTabs";
import LoginVideo from "../LoginVideo/LoginVideo";

export default function Login() {
  return (
    <>
      <LoginVideo />
      <main className="d-flex justify-content-center" style={{ height: "100vh" }}>
        <LoginTabs />
      </main>
    </>
  );
}

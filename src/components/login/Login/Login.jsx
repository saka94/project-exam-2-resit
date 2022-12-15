import LoginTabs from "../LoginTabs/LoginTabs";
import LoginVideo from "../LoginVideo/LoginVideo";
import NavigationLogin from "../../common/navigation/NavigationLogin/NavigationLogin";

export default function Login() {
  return (
    <>
      <LoginVideo />
      <header>
        <NavigationLogin />
      </header>
      <main className="d-flex justify-content-center">
        <LoginTabs />
      </main>
    </>
  );
}

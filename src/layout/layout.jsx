import HeaderComponent from "./headerComponent";
import FooterCompnent from "./footerComponent";
import Main from "../main/main.jsx";

function Layout({ isSignin }) {
  return (
    <>
      <HeaderComponent isSignin={isSignin}></HeaderComponent>
      <Main />
      <FooterCompnent></FooterCompnent>
    </>
  );
}
export default Layout;

import HeaderComponent from "./headerComponent";
import FooterCompnent from "./footerComponent";

function Layout({ isSignin }) {
  return (
    <>
      <HeaderComponent isSignin={isSignin}></HeaderComponent>
      <FooterCompnent></FooterCompnent>
    </>
  );
}
export default Layout;

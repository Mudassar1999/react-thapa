import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
const Layout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") return <Loader />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet, useNavigation } from "react-router";

import Container from "../components/Container";
import Loader from "../components/Loader";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

export default function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;

  return (
    <div className="bg-base-300 grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return (
    <main>
      <Container> {children}</Container>
    </main>
  );
}

import { Outlet } from "react-router";

import Container from "../components/Container";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

export default function RootLayout() {
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

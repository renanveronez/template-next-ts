import { ReactNode } from "react";
import { Container, HeaderContainer, MainContainer, FooterContainer } from "./styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>
          {children}
        </MainContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </>
  );
};

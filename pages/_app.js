import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </SignedIn>
      </header>
    </ClerkProvider>
  );
}

export default MyApp;

import { CounterProvider } from "../context/CounterContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  );
};

export default MyApp;
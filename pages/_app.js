//importar los css de toda la app, funcionalidad de los componentes => Parte fuera del body
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../global.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

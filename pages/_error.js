import Layout from "../components/Layout";
const _error = ({ status }) => (
  <Layout>
    {status ? (
      <>
        <h1 className="text-center">{status}</h1>
        <p className="text-center">No se pudo cargar tu pagina</p>
      </>
    ) : (
      <p className="text-center">No se pudo cargar tu pagina</p>
    )}
  </Layout>
);

export default _error;

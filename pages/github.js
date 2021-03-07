import Layout from "../components/Layout";
import Error from "./_error";
const Github = ({ user, resStatus }) => {
  if (resStatus) {
    return <Error status={resStatus} />;
  } else {
    return (
      <Layout footer={false}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center">
              <h1>{user.name}</h1>
              <img src={user.avatar_url} alt="nombre de usuario" />
              <p>{user.bio}</p>
              <a
                href={user.blog}
                target="_blank"
                className="btn btn-outline-secondary my-2"
              >
                My Blog
              </a>
              <a
                href={user.html_url}
                target="_black"
                className="btn btn-outline-secondary"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/alberto120495");
  const data = await res.json();

  const resStatus = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
      resStatus,
    },
  };
}
export default Github;

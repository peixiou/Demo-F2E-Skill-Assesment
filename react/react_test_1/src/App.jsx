import Card from "./components/Card";
import Spinner from "./components/Spinner";

const App = () => {
  const url = "https://randomuser.me/api/?results=100";

  return (
    <div className="Container">
      <section className="section">
        <h1 className="is-size-2 has-text-centered mb-5">User Filter</h1>
        <input
          className="input mb-5"
          type="text"
          placeholder="search username"
        />
        <div className="columns is-multiline is-justify-content-center">
          <Spinner />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default App;

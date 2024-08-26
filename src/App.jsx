import Weather from "./components/Weather";

import useGeolocation from "./useGeolaction";

function App() {
  const { loading, error, location } = useGeolocation();

  if (loading) {
    return (
      <div className="container loading">
        <h1>Loading...</h1>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container loading">
        <h1>We need to know your location to show you the weather forecast.</h1>
      </div>
    );
  }

  return (
    <main className="container">
      <Weather location={location} />
    </main>
  );
}

export default App;

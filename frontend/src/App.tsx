import { useEffect, useState } from "react";

const API_URL = "http://localhost:8000";

function App() {
  const [apiStatus, setApiStatus] = useState<string>("sprawdzam...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("backend niedostępny"));
  }, []);

  return (
    <main>
      <h1>LordsOfBoards</h1>
      <p>Status backendu: {apiStatus}</p>
    </main>
  );
}

export default App;

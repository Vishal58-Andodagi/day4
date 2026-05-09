import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>📝 Smart Notes App</h1>

        <p className="subtitle">
          Save your thoughts quickly and securely 🚀
        </p>

        <div className="note-card">
          <input type="text" placeholder="Enter Note Title" />

          <textarea
            placeholder="Write your note here..."
            rows="6"
          ></textarea>

          <button>Save Note</button>
        </div>
      </div>
    </div>
  );
}

export default App;
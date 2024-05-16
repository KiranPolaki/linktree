function Input() {
  return (
    <div className="input-container">
      <div className="input-card">
        <input className="input-box" type="text" placeholder="Name: Sukuna.." />
        <input
          className="input-box"
          type="text"
          placeholder="Bio: I am king of curses.."
        />
        <input
          className="input-box"
          type="text"
          placeholder="Experience: 100+years from Heian period..."
        />
        <div className="input-links">
          <input
            className="input-box-links"
            type="text"
            placeholder="Links: one at a time.."
          />
          <button className="links-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export { Input };

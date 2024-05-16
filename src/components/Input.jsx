function Input() {
  return (
    <div className="input-container">
      <input className="input-box" type="text" placeholder="Name" />
      <input className="input-box" type="text" placeholder="Bio" />
      <input className="input-box" type="text" placeholder="experience" />
      <div>
        <input
          className="input-box"
          type="text"
          placeholder="links one at a time"
        />
        <button className="links-btn">Add</button>
      </div>
    </div>
  );
}

export { Input };

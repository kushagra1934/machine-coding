export default Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="basketball"
            checked={interests.includes("basketball")}
            onChange={handleDataChange}
          />
          Basketball
        </label>
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
    </div>
  );
};

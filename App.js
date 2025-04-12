import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue('');
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered the box!");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Event Handling Demo</h2>

      <button onClick={handleClick}>
        {clicked ? 'Clicked!' : 'Click Me'}
      </button>

      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder="Type something..." 
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div 
        onMouseEnter={handleMouseEnter} 
        style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}
      >
        Hover over this box!
      </div>
    </div>
  );
}

export default App;

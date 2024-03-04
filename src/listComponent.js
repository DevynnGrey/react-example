import React, { useState } from 'react';

function ListComponent() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (!newItemText) return; // Prevent adding empty items
    setItems([...items, newItemText]); // Add new item to the list
    setNewItemText(''); // Reset input field
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default ListComponent;

import React from 'react';
import Item from './Item';
import data from '../data.json';

export default function Main() {
  const items = data.map((item, index, array) => {
    return (
      <div key={index}>
        <Item 
          {...item}
          key = {index}
        />
        {(index < array.length - 1) && <hr/>}
      </div>
    );
  });
  console.log(items);
  return (
    <main className="main-content">
      {items}
    </main>
  );
};
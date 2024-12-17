import React from "react";
import { nanoid } from "nanoid";

interface ListItem {
  [key: string]: any;
}

interface ItemProps<T extends ListItem> {
  item: T;
  style: React.CSSProperties;
}

const ItemComponent = <T extends ListItem>({ item, style }: ItemProps<T>) => {
  const filteredKeys = Object.keys(item).filter(
    (key) => !key.toLowerCase().includes("id") && !key.includes("_")
  );

  return (
    <div style={style}>
      {filteredKeys.map((key) => (
        <div key={nanoid(8)}>
          <strong>{key}:</strong> {item[key]}
        </div>
      ))}
    </div>
  );
};

export { ItemComponent };

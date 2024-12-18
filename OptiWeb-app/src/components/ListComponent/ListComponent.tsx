import { List } from "react-virtualized/dist/es/List";
import { ItemComponent } from "../ItemComponent";

interface ListItem {
  [key: string]: any;
}

interface ListProps<T extends ListItem> {
  data: T[];
  listHeight: number;
  listWidth: number;
  rowHeight: number;
}

const ListComponent = <T extends ListItem>({
  data,
  listHeight,
  listWidth,
  rowHeight,
}: ListProps<T>) => {
  return (
    <List
      className="ListComponent-List"
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "0 20px",
      }}
      height={listHeight}
      width={listWidth}
      rowHeight={rowHeight}
      rowCount={data.length}
      rowRenderer={({ index, style }) => (
        <ItemComponent item={data[index]} style={style} />
      )}
    />
  );
};

export { ListComponent };

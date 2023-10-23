import MemoList from "./MemoList";
import AddButton from "./AddButton";
import Form from "./Form";

export default function Body({mode}) {
  return (
    <div>
      <MemoList memos={initialMemos}/>
      <AddButton />
      { mode === "edit" && <Form />}
    </div>
  );
}

const initialMemos = [
  { id: 1, content: "メモ1\nメモメモメモ\n11111" },
  { id: 2, content: "メモ2\nメモメモメモ\n22222" },
  { id: 3, content: "メモ3\nメモメモメモ\n33333" },
];

let nextId = 4;

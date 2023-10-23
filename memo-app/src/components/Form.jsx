export default function Form() {
  return(
    <div>
      <TextArea />
      <EditButton />
      <DeleteButton />
    </div>
  )
}

const TextArea = () => {
  return <textarea placeholder="メモを入力"></textarea>
}

const EditButton = () => {
  return <button>編集</button>
}

const DeleteButton = () => {
  return <button>削除</button>
}

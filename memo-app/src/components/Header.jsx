export default function Header({mode}) {
  let title

  switch (mode) {
    case 'index':
      title = "一覧"
      break;
    case 'edit':
      title = "編集"
      break;
    default:
      new Error("modeは一覧か編集のみしか許可されていません。")
  }

  return <h1>{title}</h1>
}
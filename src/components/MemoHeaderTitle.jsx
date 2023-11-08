export default function MemoHeaderTitle({ mode }) {
  let title;

  switch (mode) {
    case "index":
      title = "一覧";
      break;
    case "edit":
    case "new":
      title = "編集";
      break;
    default:
      new Error("modeは一覧か編集のみしか許可されていません。");
  }

  return <span className="header__title header__title--gray">{title}</span>;
}

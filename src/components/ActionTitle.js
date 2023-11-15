export default function ActionTitle({ action }) {
  let title;

  switch (action) {
    case "index":
      title = "一覧";
      break;
    case "edit":
    case "new":
      title = "編集";
      break;
    default:
      new Error("actionは一覧か編集のみしか許可されていません。");
  }

  return <span className="header__title header__title--gray">{title}</span>;
}

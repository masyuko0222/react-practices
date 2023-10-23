import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

export default function MemoApp() {

  return (
    <div>
      <Header mode="index" />
      <Body mode="index"/>
    </div>
  );
}

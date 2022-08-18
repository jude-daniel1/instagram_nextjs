import React from "react";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

export default function UploadModel() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h2>Upload Modal</h2>
      {!open && <h1>The Modal is open</h1>}
    </div>
  );
}

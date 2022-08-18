import React from "react";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";

export default function UploadModel() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-white border-2 rounded-md shadow-md outline-none "
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]"></div>
        </Modal>
      )}
    </div>
  );
}

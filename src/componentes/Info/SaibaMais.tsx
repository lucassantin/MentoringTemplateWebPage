import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { CustomModal } from "../CustomModal";

export function SaibaMais() {
  const [show, setShow] = useState(false);

  function HandleShow() {
    setShow(true);
  }

  function HandleShowFalse() {
    setShow(false);
  }

  return (
    <>
      <button className="focus:outline-none" onClick={() => HandleShow()}>
        <h4 className="text-white text-3xl underline cursor-pointer">
          Saiba Mais!
        </h4>
      </button>
      <CustomModal open={show} onClose={() => setShow(false)}>
        <div className="text-zinc-600 bg-[#F5F5DC] w-[960px] h-[520px] rounded-xl shadow-black shadow-2xl">
          <div className="relative flex justify-end p-3">
            <button onClick={() => HandleShowFalse()}>
              <X size={32} weight="bold" color="black" />
            </button>
          </div>
          oiiiiii
        </div>
      </CustomModal>
    </>
  );
}

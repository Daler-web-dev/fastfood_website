import React from "react";

function CartReviewChild() {
  return (
    <li className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <img src="/img/img1.svg" alt="" />
        <p className="text-xl">Картошка фри</p>
      </div>
      <div>
        <p className="text-xl">16 000 сум</p>
      </div>
    </li>
  );
}

export default CartReviewChild;

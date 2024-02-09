import { currencyFormatter } from "../util/formatting.js";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
  purpose,
  total
}) {
  return (
    <li className={purpose === "cart" ? "cart-item" : "checkout"}>
      <p>
        <b>{name}</b> : {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        {purpose === "cart" && (
          <>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
          </>
        )}
        
      </p>
    </li>
  );
}

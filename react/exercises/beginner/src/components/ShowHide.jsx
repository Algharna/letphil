import { useState } from "react";

export default function ShowHide() {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum ad cumque incidunt porro dolorem distinctio itaque, sit suscipit laborum rem doloribus, quod repellendus impedit! Enim minima saepe quae quia! Dolores, reprehenderit eligendi nobis similique iste mollitia, sequi eius quos libero quam nesciunt assumenda natus. Ut labore repellat maxime, debitis aut totam iure non neque ratione, dolorum iste a expedita.";

  const [btnText, setBtnText] = useState("Hide");
  const [p, setP] = useState(paragraph);

  function handleClick() {
    btnText === "Hide"
      ? (setP(""), setBtnText("Show"))
      : (setP(paragraph), setBtnText("Hide"));
  }

  return (
    <>
      <h2>Show/Hide Paragrah</h2>
      <button onClick={() => handleClick()}>{btnText}</button>
      <p>{p}</p>
    </>
  );
}

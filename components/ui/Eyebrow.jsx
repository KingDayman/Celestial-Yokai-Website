import SpiritMark from "./SpiritMark";

export default function Eyebrow({ children, align = "left" }) {
  return (
    <div
      className={`eyebrow ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      <SpiritMark />
      <span>{children}</span>
    </div>
  );
}

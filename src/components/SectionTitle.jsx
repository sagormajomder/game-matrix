export default function SectionTitle({ title, desc }) {
  return (
    <div className="text-center">
      <h2 className="heading-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

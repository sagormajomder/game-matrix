export default function GameNotFound({ message }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-heading text-4xl font-bold">{message}</p>
    </div>
  );
}

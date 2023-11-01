import './style.css';

export default function Loading() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
      <div className="loader" />
    </div>
  );
}

export default function WorkButton() {
  return (
    <button className="group/work relative overflow-hidden rounded-full bg-primary px-14 py-4 text-lg transition">
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-black/15 transition duration-300 ease-out group-hover/work:translate-y-14"></span>
      <span className="font-semibold text-black">Work with us</span>
    </button>
  );
}

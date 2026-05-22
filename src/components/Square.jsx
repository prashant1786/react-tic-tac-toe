const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 bg-white border text-4xl font-bold rounded-xl shadow-md hover:bg-gray-100 transition"
    >
      {value}
    </button>
  );
};

export default Square;

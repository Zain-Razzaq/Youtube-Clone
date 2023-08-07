const Button = ({ placeHolder }) => {
  return (
    <button className="p-2 border-2 border-red-600 rounded-lg text-red-600 font-semibold hover:text-white hover:bg-red-600">
      {placeHolder}
    </button>
  );
};

export default Button;

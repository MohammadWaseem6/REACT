/* eslint-disable react/prop-types */

function NumberSelector({ selectedNumber, setSelectedNumber, error }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
  };

  return (
    <div className="flex flex-col items-end">
      <p className="text-red-500 text-5xl ml-28">{error}</p>
      <div className="flex gap-24">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`h-10 w-10 border border-black flex items-center justify-center text-2xl font-bold 
            
            
            ${value === selectedNumber ? 'bg-black text-white' : 'bg-white text-black'
              }`}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-2xl font-bold mt-9">Select Number</p>
    </div>
  );
}

export default NumberSelector;

const Quantity = ({ formData, updateFormData }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-white">How many tickets do you want to book?</label>
    <div className="flex justify-center items-center space-x-2">
      <button
        type="button"
        onClick={() => updateFormData('tickets', Math.max(1, formData.tickets - 1))}
        className="text-white"
      >
        -
      </button>
      <input
        type="text"
        readOnly
        value={formData.quantity}
        className="border text-sm w-full rounded-lg block p-2.5 bg-gray-700 border-gray-600 text-white text-center"
      />
      <button
        type="button"
        onClick={() => updateFormData('quantity', formData.quantity + 1)}
        className="text-white"
      >
        +
      </button>
    </div>
  </div>
);

export default Quantity;

const DateQuestion = ({ formData, updateFormData }) => (
  <div>
    <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">What date do you want to go?</label>
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={(e) => updateFormData('date', e.target.value)}
      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
    />
  </div>
);

export default DateQuestion;

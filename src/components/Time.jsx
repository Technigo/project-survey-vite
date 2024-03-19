const Time = ({ formData, updateFormData }) => (
  <div>
    <label htmlFor="time" className="block mb-2 text-sm font-medium text-white">What time do you want to go?</label>
    <select
      name="time"
      value={formData.time}
      onChange={(e) => updateFormData('time', e.target.value)}
      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
    >
      <option value="12:00">12:00</option>
      <option value="19:00">19:00</option>
      <option value="22:00">22:00</option>
    </select>
  </div>
);

export default Time;

const Name = ({ formData, updateFormData }) => (
  <div>
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">What is your name?</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={(e) => updateFormData('name', e.target.value)}
      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
    />
  </div>
);

export default Name;

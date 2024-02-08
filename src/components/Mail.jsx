const Mail = ({ formData, updateFormData }) => (
  <div>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">What is your email address?</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={(e) => updateFormData('email', e.target.value)}
      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
    />
  </div>
);

export default Mail;

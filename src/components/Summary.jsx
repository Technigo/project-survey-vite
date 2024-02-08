const Summary = ({ formData }) => (
  <div>
    <h2 className="text-xl font-semibold p-2.5 text-center leading-tight tracking-tight md:text-2xl text-white">Your ticket:</h2>
    <ul className="text-white p-2.5">
      <li><span className="font-bold">Movie: </span>{formData.movie}</li>
      <li><span className="font-bold">Name: </span>{formData.name}</li>
      <li><span className="font-bold">Tickets: </span>{formData.quantity}</li>
      <li><span className="font-bold">Date: </span>{formData.date}</li>
      <li><span className="font-bold">Time: </span>{formData.time}</li>
      <li><span className="font-bold">Name: </span>{formData.name}</li>
      <li><span className="font-bold">Email: </span>{formData.email}</li>
    </ul>
  </div>
);

export default Summary;

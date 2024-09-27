export const Workrole = ({ updateFormData, value }) => {
  const WorkroleInput = (e) => updateFormData("workrole", e.target.value);
  return (
    <div>
      <label>What is your workrole called?</label>
      <select value={value} onChange={WorkroleInput}>
        <option value="">Select a role</option>
        <option value="ux-desinger">UX-designer</option>
        <option value="frontend-developer">Frontend Developer</option>
        <option value="backend-developer">Backend Developer</option>
        <option value="fullstack-developer">Fullstack Developer</option>
        <option value="system-developer">System Developer</option>
        <option value="manager">Manager</option>
        <option value="software-engineer">Software Engineer</option>
        <option value="project-manager">Project Manager</option>
        <option value="cloud-architect">Cloud Architect</option>
        <option value="cyber-security">Cybersecurity</option>
        <option value="other-role">Other role</option>
      </select>
    </div>
  );
};

import React from 'react';
import './Form.css'; // Import your CSS file

interface FormData {
  username: string;
  email: string;
  password: string;
}

const StyledForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign Up</h2>
      
      <div className="form-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default StyledForm;
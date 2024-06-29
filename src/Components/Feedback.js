import { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneno] = useState('');
  const [oit, setOit] = useState('');
  const [oot, setOot] = useState('');
  const [nobw, setNobw] = useState('');
  const [swl, setSwl] = useState('');
  const [sws, setSws] = useState('');
  const [breverage, setBreverage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log('Form Data:', { name, email, phone_number, oit, oot, nobw, swl, sws, breverage });

    const data = {
      Name: name,
      EMail: email,
      Phone_Number: phone_number,
      Office_in_Time: oit,
      Office_out_Time: oot,
      No_Breaks_you_want: nobw,
      Satisfied_with_Lunch: swl,
      Satisfied_with_Snacks: sws,
      Tea_or_Coffee: breverage,
    };

    // console.log('Sending Data:', data);

    try {
      const response = await axios.post('https://sheet.best/api/sheets/95954490-6478-4ddd-9399-9ca796da69c6', data);
    //   console.log('Response:', response);
      setName('');
      setEmail('');
      setPhoneno('');
      setOit('');
      setOot('');
      setNobw('');
      setSwl('');
      setSws('');
      setBreverage('');
      alert('success');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Container">
      <br />
      <h1>Feedback Form</h1>
      <br />

      <form autoComplete="off" className="form-g" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          required
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email-ID"
          required
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />

        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          required
          className="form-control"
          onChange={(e) => setPhoneno(e.target.value)}
          value={phone_number}
        />
        <br />

        <label>Office in Time</label>
        <input
          type="text"
          placeholder="Enter in time, (ex- 09:35 AM/PM)"
          required
          className="form-control"
          onChange={(e) => setOit(e.target.value)}
          value={oit}
        />
        <br />

        <label>Office out Time</label>
        <input
          type="text"
          placeholder="Enter out time, (ex- 06:00 AM/PM)"
          required
          className="form-control"
          onChange={(e) => setOot(e.target.value)}
          value={oot}
        />
        <br />

        <label>Number of Breaks Want</label>
        <input
          type="text"
          placeholder="Enter Number of Breaks you Want"
          required
          className="form-control"
          onChange={(e) => setNobw(e.target.value)}
          value={nobw}
        />
        <br />

        <label>Satisfied with Lunch</label>
        <input
          type="text"
          placeholder="Enter Your Opinion, (ex- Yes/No)"
          required
          className="form-control"
          onChange={(e) => setSwl(e.target.value)}
          value={swl}
        />
        <br />

        <label>Satisfied with Snack</label>
        <input
          type="text"
          placeholder="Enter Your Opinion, (ex- Yes/No)"
          required
          className="form-control"
          onChange={(e) => setSws(e.target.value)}
          value={sws}
        />
        <br />

        <label>Select Your Beverage</label>
        <input
          type="text"
          placeholder="Enter Your Beverage, (ex- Tea / Coffee)"
          required
          className="form-control"
          onChange={(e) => setBreverage(e.target.value)}
          value={breverage}
        />
        <br />

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

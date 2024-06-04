import PersonaReact from 'persona-react';
import QRCode from "react-qr-code";

import './App.css';

const TID="itmpl_7Xty3tejkequXAmUYgJhGadfos5u";
const EID="env_7PnQDYEUPrSZpGSzJqaUYp3UbE5r"

function App() {
  const params = new URLSearchParams(window.location.search);
  const iid = params.get('iid');
  if (!iid || !iid.match(/inq_[a-zA-Z0-9]*/)) {
    return (
      <div className='App'>
        <p>Error</p>
      </div>
    )
  }
  return (
    <div className="App">
      <div className='persona pad'>
      <PersonaReact
      inquiryId={iid}
      environmentId={EID}
      onComplete={({ inquiryId, status, fields }) => {
        // Inquiry completed. Optionally tell your server about it.
        console.log(`Sending finished inquiry ${inquiryId} to backend`);
      }}
    />
    </div>
    <div className='qr pad'>
      <p>Continue on another device...</p>
      <QRCode className='code' value={`https://www.skellige.xyz?iid=${iid}`} />
    </div>
    </div>
  );
}

export default App;

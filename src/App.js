import PersonaReact from 'persona-react';
import QRCode from "react-qr-code";

import './App.css';

const TID="itmpl_7Xty3tejkequXAmUYgJhGadfos5u";
const EID="env_7PnQDYEUPrSZpGSzJqaUYp3UbE5r"

function App() {
  const params = new URLSearchParams(window.location.search);
  const iid = params.get('iid');
  if (!iid.match(/inq_[a-zA-Z0-9]*/)) {
    return <p>Error</p>
  }
  return (
    <div className="App">
      <PersonaReact
      inquiryId={iid}
      environmentId={EID}
      onComplete={({ inquiryId, status, fields }) => {
        // Inquiry completed. Optionally tell your server about it.
        console.log(`Sending finished inquiry ${inquiryId} to backend`);
      }}
    />
    <QRCode value={`https://www.skellige.xyz?inquiry-template-id=${TID}&environment-id=${EID}`} />
    </div>
  );
}

export default App;

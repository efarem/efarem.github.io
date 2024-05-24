import PersonaReact from 'persona-react';
import QRCode from "react-qr-code";

import './App.css';

const TID="itmpl_iysj7t8MNyLvRWPBP1NoMEJewjRS";
const IID="inq_DGtZQbGEPWwvt2dp4Kj2rJb5BHs5";
const EID="env_FZvJki2dGQ3ngyMpgoWYBZyGCiQu"

function App() {
  return (
    <div className="App">
      <PersonaReact
      inquiryId={IID}
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

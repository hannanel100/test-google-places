import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import * as key from "./apiKey.js";

function App() {
  const [address, setAddress] = useState("");
  return (
    <div className='App'>
      <GooglePlacesAutocomplete
        apiKey={key.apiKey.key}
        apiOptions={{ language: "iw", region: "iw" }}
        selectProps={{
          value: address,
          onChange: setAddress,
        }}
      />
    </div>
  );
}

export default App;

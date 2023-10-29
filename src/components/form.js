import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      return;
    }

    const newData = {
      name,
      email,
      id: Date.now(),
    };

    onAddItem(newData);
    // console.log(newData);
    setName("");
    setEmail("");
  }

  return (
    <div className="form">
      <Stack direction="row" spacing={2}>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button color="success" variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </form>
      </Stack>
    </div>
  );
}

import { Stack } from "@mui/material";

export default function ActualData({ data, onHandleDelete }) {
  return (
    <div className="data">
      <ul>
        <h4>{data.name}</h4>
        <h4>{data.email}</h4>
        <Stack>
          <button
            variant="contained"
            color="error"
            className="button-val"
            onClick={() => onHandleDelete(data.id)}
          >
            ❌
          </button>
        </Stack>
      </ul>
    </div>
  );
}

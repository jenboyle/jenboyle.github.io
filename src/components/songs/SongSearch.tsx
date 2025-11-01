//import styles from './SongSearch.module.css'
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

interface SongSearchProps {
  onClick: () => void;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function SongSearch({ onClick, onChange }: Readonly<SongSearchProps>) {
  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange((e.target as HTMLTextAreaElement).value);
  };
  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search for song..."
        onClick={onClick}
        onChange={inputHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SongSearch;

import { AppBar, Toolbar } from "@mui/material";


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="flex-bold">TODO</div>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;

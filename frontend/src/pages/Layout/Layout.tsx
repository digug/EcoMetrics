import { AppBar, Stack, Toolbar } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import leaf from "../../assets/leaf.svg";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        style={{
          flexGrow: 1,
          backgroundColor: "#242424",
          backdropFilter: "none",
          boxShadow: "none",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        position="fixed"
      >
        <Toolbar style={{ opacity: "100%" }}>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={leaf}
            width={50}
            height={50}
            style={{ cursor: "pointer" }}
          />

          <div
            style={{ textAlign: "start", flexGrow: 1, fontSize: "1.5rem" }}
          ></div>
          <Stack direction="row" spacing={10}>
            {/* <button onClick={() => {navigate("/")}} style={{backgroundColor: 'transparent', fontSize: '1rem'}}></button> */}
            {/* <button onClick={() => {navigate("/about")}} style ={{backgroundColor: 'transparent'}}> About</button> */}
            <button
              onClick={() => {
                navigate("/evaluate");
              }}
              style={{
                borderRadius: "5px",
                paddingBlock: "0.8",
                fontSize: "1rem",
                backgroundColor: "#35AC43",
              }}
              className="evaluate button"
            >
              Evaluate my Portfolio
            </button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Layout;

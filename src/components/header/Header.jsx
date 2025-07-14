import "./Header.css";
import logo from "../../assets/merch/horror-logo.png";
import { Search, ShoppingBag, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Drawer, Button, Box, TextField } from "@mui/material";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`colores ${showHeader ? "" : "hide-header"}`}>
      <header className="cabecera">
        <div className="left">
          <span
            className="search-icon"
            onClick={toggleDrawer(true)}
            tabIndex={0}
          >
            <Search></Search>
          </span>
        </div>
        <div className="center">
          <img src={logo} alt="logo" className="img-logo" />
        </div>
        <div className="right">
          <span>
            <ShoppingBag></ShoppingBag>
          </span>
        </div>
      </header>
      <nav>
        <ul>
          <li>MASK</li>
          <li>MERCH</li>
          <li>ACCESORIES AND OTHER</li>
          <li>INFO</li>
        </ul>
      </nav>
      <div className="separador"></div>

      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ height: 170, padding: 2, backgroundColor: "#f0f0f0" }}
          role="presentation"
        >
          <div className="drawer-content">
            <TextField
              autoFocus
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              style={{ width: 500 }}
            />
            <Button onClick={toggleDrawer(false)}>
              <X />
            </Button>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

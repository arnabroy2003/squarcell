import { useEffect, useState } from "react";
import SquarcellLanding from "./DesktopApp";
import MobileApp from "./MobileApp";

function App() {

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <>
      {isMobile ? <MobileApp /> : <SquarcellLanding />}
    </>
  );
}

export default App;
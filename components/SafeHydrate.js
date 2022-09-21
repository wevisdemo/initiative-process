import { useState, useEffect } from "react";
function SafeHydrate({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && children;
}

export default SafeHydrate;

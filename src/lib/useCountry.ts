import { useEffect, useState } from "react";

export function useCountry() {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name || null))
      .catch(() => setCountry(null));
  }, []);

  return country;
}

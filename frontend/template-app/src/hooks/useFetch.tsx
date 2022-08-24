/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export type User = {
  id: number;
  name: string;
};

export function useFetch<T>(url: string, apiInstance: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<T | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiInstance(url);
        const json = await res.json();
        setData(json);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
}

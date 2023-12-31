import { useState, useEffect } from 'react';
import api from '../lib/api';

const useDailyHabits = (apiUrl) => {
  const [dailyHabits, setDailyHabits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(apiUrl, { withCredentials: true });

        setDailyHabits(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { dailyHabits, loading, error };
};

export default useDailyHabits;

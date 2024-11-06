import { useState } from 'react';

function useSubmitData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitData = async (url, data) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer cadastro.');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { submitData, loading, error };
}

export default useSubmitData;
const fetchData = async (endpoint, method, body = null) => {
  const fetchOptions = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if (body) {
    fetchOptions.body = JSON.stringify(body)
  };

  try {
    const response = await fetch(endpoint, fetchOptions);
    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        data,
      };
    } else {
      return {
        success: false,
        errorData: data
      };
    };
  } catch (error) {
    console.error("net error", error);
    throw {
      success: false,
      errorData: {
        status: 500,
        error: 'Network error.',
        message: 'An unexpected error occurred. Please try again later.'
      }
    };
  };
};

export default fetchData;
export const fetchDataHighlights = async () => {
  try {
    const response = await fetch("https://admin.naxa.com.np/api/projects");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

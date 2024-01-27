async function getAndFilterPostsByTitle(title) {
    try {
      // Fetch data from the mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      // Parse the JSON data
      const posts = await response.json();
  
      // Filter posts based on the title
      const filteredPosts = posts.filter(post => post.title.includes(title));
  
      // Console the filtered posts
      console.log(filteredPosts);
      return filteredPosts;
    } catch (error) {
      // Handle errors
      console.error('Error fetching or filtering posts:',error);
        throw error;
    }
  }
  
  // Example usage:

  const titleToFilter = 'magnam';
  
  getAndFilterPostsByTitle(titleToFilter);
  
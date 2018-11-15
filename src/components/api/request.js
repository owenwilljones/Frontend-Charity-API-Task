export default async () => {
  const response = await fetch('https://api.justgiving.com/51ac3aab/v1/charity/183092/donations', {
    headers: {'Accept': 'application/json'}
  });

  if(response.status >= 400) {
    throw(new Error('Error fetching latest donations'));
  } else {
    return await response.json();
  }
}
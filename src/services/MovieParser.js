export default async function themoviedbParser(query) {
    const apiKey = '2e2ac1a061cf12eb29ec957f9e593f57';
    const URL = `https://api.themoviedb.org/3/${query}api_key=${apiKey}`;
    
    try {
        const response = await fetch(URL);
        if (!response.ok) return null;
        if (response) return await response.json();
    }
    catch (error) { return null }
}
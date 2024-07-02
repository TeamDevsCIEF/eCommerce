export default class WallapopService {
  static async fetchSuggestions(keyword) {
    const url = `https://api.wallapop.com/api/v3/suggesters/nonlocated?keyword=${encodeURIComponent(keyword)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching suggestions: ${response.statusText}`);
      }
      const data = await response.json();
      return data.suggestions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

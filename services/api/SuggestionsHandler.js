import WallapopService from './WallapopService.js';

export default class SuggestionsHandler {
  constructor() {
    this.suggestions = [
      { id: 1, text: "iPhone 12", subtitle: "Electrónicos" },
      { id: 2, text: "iPhone 12", subtitle: "Electrónicos", type: "history" },
      { id: 3, text: "iPhone 11", subtitle: "", type: "history" },
      { id: 4, text: "iPhone SE", subtitle: "Electrónicos", type: "suggestion" },
      { id: 5, text: "iPhone 14", subtitle: "Juguetes", type: "favorite" },
      { id: 6, text: "iPhone 88", subtitle: "", type: "favorite" },
      { id: 7, text: "iPhone 87", subtitle: "Decoraciones", type: "favorite" },
      { id: 8, text: "iPhone 86", subtitle: "Decoraciones", type: "favorite" },
      { id: 9, text: "iPhone 58", subtitle: "", type: "favorite" },
      { id: 10, text: "iPhone 8", subtitle: "Decoraciones", type: "favorite" },
      { id: 11, text: "iPhone 4", subtitle: "", type: "history" },
      { id: 12, text: "iPhone 102", subtitle: "Electrónicos", type: "suggestion" },
      { id: 13, text: "iPhone 9", subtitle: "Electrónicos", type: "suggestion" },
      { id: 14, text: "iPhone X", subtitle: "Electrónicos", type: "suggestion" },
      { id: 15, text: "iPhone XR", subtitle: "", type: "suggestion" },
      { id: 16, text: "iPhone XS", subtitle: "Electrónicos", type: "suggestion" },
      { id: 17, text: "iPhone 7", subtitle: "Electrónicos", type: "history" },
      { id: 18, text: "iPhone 5", subtitle: "Decoraciones", type: "favorite" }
    ];
    this.suggestions2 = [];
  }

  async updateSuggestions2(keyword) {
    const apiSuggestions = await WallapopService.fetchSuggestions(keyword);
    this.suggestions2 = this.transformSuggestions(apiSuggestions);
  }

  transformSuggestions(apiSuggestions) {
    return apiSuggestions.map((suggestion, index) => {
      const id = this.suggestions.length + index + 1;
      let text, subtitle;

      if (suggestion.categorized_suggestion) {
        text = suggestion.categorized_suggestion.suggestion.text;
        subtitle = suggestion.categorized_suggestion.suggestion.subtitle;
      } else if (suggestion.regular_suggestion) {
        text = suggestion.regular_suggestion.suggestion.text;
        subtitle = suggestion.regular_suggestion.suggestion.subtitle;
      }

      return {
        id,
        text,
        subtitle,
        type: "suggestion"
      };
    });
  }
}

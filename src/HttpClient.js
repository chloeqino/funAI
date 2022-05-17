export default {
  getResponse(prompt = "Write a poem about jacaranda tree") {
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 264,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    return fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
        body: JSON.stringify(data),
      }
    );
  },
};

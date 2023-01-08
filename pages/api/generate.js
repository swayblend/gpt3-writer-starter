import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
configuration;
const basePromptPrefix = `
List 20 bands from around the world in numeric order that contain the qualities prompted. Add their country of origin related to each band. Referencing music theory in the style of music journalism, explain the musical commonalities of this list starting with "Analysis:". If there's a promt that makes no sense, print only the prompt that makes no sense along with "There may be an error with your prompt": 
`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 1,
    max_tokens: 1000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

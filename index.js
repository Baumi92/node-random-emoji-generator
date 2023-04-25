import emoji from 'node-emoji';

const randomEmoji = emoji.random();

if (!emojiName) {
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (foundEmoji) {
  const foundEmoji = emoji.find(emojiName);
  if (foundEmoji) {
    console.log(foundEmoji.emoji);
  } else {
    console.log('Invalid emoji name');
  }
}

let str: string | string[] =
  "hello. how are you! anything you want to do? Im here!!! I mean for you";

str = str.split(" ");

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].replace(/!+$/, (c) => c.concat(c));
  str[i] = str[i].replace(/\.$/, "!");
}

console.log(str.join(" "));

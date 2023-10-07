const baseURL:string = "https://v6.exchangerate-api.com/v6/bbe9f9dd89d585b3296957ee"

const urls = {
  UAHCurs: `${baseURL}/latest/UAH`,
  pair:(currency1:string, currency2: string):string => `${baseURL}/pair/${currency1}/${currency2}`,
}

export {urls}

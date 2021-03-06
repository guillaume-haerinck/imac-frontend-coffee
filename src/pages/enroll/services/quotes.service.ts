import { Quote } from "./quote";

export class QuotesService {
    async getQuote(): Promise<Quote> {
        return new Promise((resolve, reject) => {
            fetch("https://talaikis.com/api/quotes/random/")
                .then((response) => {
                    return response.json();
                })
                .then((json: Quote) => {
                    resolve(json);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

}
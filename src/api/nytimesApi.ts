import { Article, ArticleSearchResponse } from "./models"
import axios, { AxiosResponse } from 'axios';

const API = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export class NYTimesAPI {

    private static instance: NYTimesAPI;

    public static get Instance(): NYTimesAPI {
        return this.instance || (this.instance = new this());
    }

    public async getNews(query: string, page = 0): Promise<Article[]> {
        return await axios.get(API, {
            params: {
                'q': query,
                'api-key': '',
                'page': page,
                'sort': 'relevance',
            }
        })
            .then((response: AxiosResponse<ArticleSearchResponse>) => {
                let arr: Article[] = response.data.response.docs;
                return arr;
            });
    }
}

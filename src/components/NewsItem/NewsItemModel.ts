export type MediaItem = {
    subtype: string,
    url: string,
    type: string
}

export type Headline = {
    main: string,
    print_headline: string
}

export interface Article {
    abstract:  string,
    lead_paragraph: string,
    web_url: string,
    multimedia: MediaItem[],
    headline: Headline,
    pub_date: string,
    _id: string
}
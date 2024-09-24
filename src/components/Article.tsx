import { Card, CardEyebrow, CardTitle, CardDescription, CardCta } from "./Card"

export const Article: React.FC<{ article: any }> = ({ article }) => {
    return (
        <Card as="article">
            <CardTitle as="h3" href={article.url}>
                {article.title}
            </CardTitle>
            <CardDescription>{article.description}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
    )
}
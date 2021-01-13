import Head from 'next/head';

export default function Seo({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width,minimum-scale=1,initial-scale=1"
            />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta
                name="og:description"
                property="og:description"
                content={description}
            />
            <meta property="og:site_name" content="Proper Noun" />
    
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@propernounco" />
            <meta name="twitter:creator" content="@propernounco" />
   
             
        </Head>
    )

}
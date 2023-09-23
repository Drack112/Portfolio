import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class NextDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="Seja bem vindo ao meu site pessoal, me chame de João Vitor, ou nas redes sociais que uso, pode me chamar de Drack também. E é um prazer ter você aqui explorando meu WebSite."
          />
          <meta name="author" content="João Vitor Alcântara Cavalcante" />
          <meta name="categories" content="Portfolio" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Portfolio" />
          <meta
            property="og:description"
            content="Seja bem vindo ao meu site pessoal, me chame de João Vitor, ou nas redes sociais que uso, pode me chamar de Drack também. E é um prazer ter você aqui explorando meu WebSite."
          />
          <meta property="og:type" content="video.movie" />
          <meta property="og:url" content="https://drack112.vercel.app/" />
          <meta
            property="og:image"
            content="https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/09/25071317/26-ecosystem-of-gadgets.png.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio" />
          <meta
            name="twitter:description"
            content="Seja bem vindo ao meu site pessoal, me chame de João Vitor, ou nas redes sociais que uso, pode me chamar de Drack também. E é um prazer ter você aqui explorando meu WebSite."
          />
          <meta name="twitter:site" content="Portfolio" />
          <meta
            name="twitter:creator"
            content="João Vitor Alcântara Cavalcante"
          />
          <meta
            name="twitter:image"
            content="https://d3ui957tjb5bqd.cloudfront.net/uploads/2020/09/25071317/26-ecosystem-of-gadgets.png.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icon.png"
          />
          <title>Drack</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

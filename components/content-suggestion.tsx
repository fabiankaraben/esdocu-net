import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type ContentSuggestionProps = {
  num: number
}

let nums = []

export function ContentSuggestion({
  num,
}: ContentSuggestionProps): ReactElement {

  function randomInt(min: number, max: number): number {
    return Math.floor((Math.random() * ((max + 1) - min) + min))
  }

  const articles = [
    {
      title: 'Variables en JavaScript',
      description: 'Una variable es una ubicación con nombre para almacenar datos en la memoria de la computadora.',
      url: 'https://esdocu.dev/javascript/variables',
    },
    {
      title: 'Operadores básicos en JavaScript',
      description: 'En esta lección, exploraremos los diferentes tipos de operadores en JavaScript.',
      url: 'https://esdocu.dev/javascript/operadores-basicos',
    },
    {
      title: 'Funciones en JavaScript',
      description: 'Las funciones son una forma de agrupar código que se puede reutilizar o ejecutar tantas veces como sea necesario.',
      url: 'https://esdocu.dev/javascript/funciones',
    },
    // {
    //   title: '',
    //   description: '',
    //   url: '',
    // },
  ]

  function getArticle() {
    if (nums.length >= articles.length) nums = []
    let randNum = -1
    while (randNum === -1) {
      let newNum = randomInt(0, articles.length - 1)
      if (!nums.includes(newNum)) {
        randNum = newNum
        nums.push(newNum)
        console.log(num + ': ' + nums)
      }
    }

    return articles[randNum]
  }

  const [article, setArticle] = useState({ title: '', description: '', url: '' })

  useEffect(() => {
    setArticle(getArticle)
  }, [])

  return (
    <div className="mt-8 px-4 py-5 border-l-4 border-green-600 bg-green-600 bg-opacity-5">
      <p className="text-xs text-green-600 tracking-widest font-medium title-font mb-2">
        DE NUESTRO <strong>CURSO DE JAVASCRIPT</strong>
      </p>
      <Link href={article.url} target="_blank" className="title-font sm:text-2xl text-xl mb-3 font-medium text-gray-900 dark:text-white">
        {article.title}
      </Link>
      <p className="mb-2">
        {article.description}
      </p>
      <Link href={article.url} target="_blank" className="text-sm text-blue-500 hover:text-blue-700 tracking-widest font-medium title-font">
        » Aprende más sobre {article.title} ↗
      </Link>
    </div>
  )
}
"use client"
import { DrawQuestion } from '@/features/quizzes/DrawQuestion'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import styles from './page.module.css'

export default function Home({ Component, pageProps }) {
  
  DrawQuestion()
  console.log("test")
  console.log(DrawQuestion())

  return (
    <Layout>
    </Layout>
  )
}

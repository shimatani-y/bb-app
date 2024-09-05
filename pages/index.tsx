import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/organisms/header'

const Home: NextPage = () => {
  return (
    <Header name="家計簿アプリ" />
  )
}

export default Home

import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home({ news }) {
  const { locale } = useRouter()
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{locale==='ar'?'كلية الهندسة':'Faculty of Engineering'}</h1>
        <div>
          <Link href="/" locale="ar">عربي</Link> | <Link href="/" locale="en">EN</Link>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl">{locale==='ar'?'أحدث الأخبار':'Latest News'}</h2>
        <ul className="mt-3">
          {news.map(n => (
            <li key={n.id} className="py-2 border-b">
              <Link href={`/news/${n.id}`} locale={locale}>{locale==='ar'?n.title_ar:n.title_en}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getServerSideProps({ locale }){
  try{
    const res = await axios.get(process.env.API_URL || 'http://api:4000/api/news')
    const news = res.data
    return { props: { news } }
  }catch(err){
    return { props: { news: [] } }
  }
}

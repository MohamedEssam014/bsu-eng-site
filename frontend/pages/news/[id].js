import axios from 'axios'
import { useRouter } from 'next/router'

export default function NewsPage({ item }){
  const { locale } = useRouter()
  if(!item) return <div className="p-6">Not found</div>
  return (
    <div className="container p-6">
      <h1 className="text-2xl font-bold">{locale==='ar'?item.title_ar:item.title_en}</h1>
      <p className="mt-4">{locale==='ar'?item.body_ar:item.body_en}</p>
    </div>
  )
}

export async function getServerSideProps({ params }){
  try{
    const res = await axios.get((process.env.API_URL || 'http://api:4000')+`/api/news/${params.id}`)
    return { props: { item: res.data } }
  }catch(e){
    return { props: { item: null } }
  }
}

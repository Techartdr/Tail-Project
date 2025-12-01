// app/default/[slug]/page.tsx
import Link from 'next/link';
//import { personnes } from '../../../data/annuaire';
//import { notFound } from 'next/navigation';

//http://localhost:3000/default/test
export default async function DefaultPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    return <div>My Default Page for {slug}</div>;
}
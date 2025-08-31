// pages/codex/search.tsx
import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/app/AppLayout';
import { codexData } from '../../lib/mockCodex'; // Reuse our mock data

const CodexSearchPage = () => {
    const [query, setQuery] = useState('');
    const allChapters = codexData.flatMap(book => book.chapters.map(ch => ({...ch, bookTitle: book.title})));

    const results = query ? allChapters.filter(
        ch => ch.title.toLowerCase().includes(query.toLowerCase()) || ch.content.toLowerCase().includes(query.toLowerCase())
    ) : [];

    return (
        <div style={{maxWidth: '900px', margin: '0 auto', padding: '2rem'}}>
            <Head><title>Search the Codex</title></Head>
            <h1>Search the Chromatic Codex</h1>
            <input 
                type="search" 
                placeholder="Search by keyword, e.g., 'Guardian's Desk' or 'Sovereign'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{width: '100%', padding: '1rem', fontSize: '1.2rem', backgroundColor: '#12121e', border: '1px solid #a0a0b0', color: '#fff', borderRadius: '8px', marginBottom: '2rem'}}
            />
            <div>
                {results.length > 0 ? (
                    results.map(ch => (
                        <div key={ch.id} style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                            <h3 style={{marginTop: 0}}><Link href={`/codex/chapter/${ch.id}`}>{ch.title}</Link></h3>
                            <p style={{color: '#a0a0b0'}}>{ch.content.substring(0, 150)}...</p>
                            <small>From: {ch.bookTitle}</small>
                        </div>
                    ))
                ) : (
                    <p style={{color: '#a0a0b0'}}>{query ? 'No results found.' : 'Enter a term to search the Codex.'}</p>
                )}
            </div>
        </div>
    );
};
CodexSearchPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default CodexSearchPage;
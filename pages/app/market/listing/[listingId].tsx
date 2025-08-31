// pages/app/market/listing/[listingId].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../../styles/ListingDetail.module.css';
import AppLayout from '../../../../components/app/AppLayout';

// Mock data representing all types of listings
const allListings = [
    { type: 'sale', id: 'l001', hex: '#FF5733', name: 'Crimson Blaze', price: 150, seller: 'Vectorios' },
    { type: 'sale', id: 'l002', hex: '#F1C40F', name: 'Sunstone', price: 220, seller: 'MagmaFlow' },
    { type: 'auction', id: 'a001', hex: '#8E44AD', name: 'Royal Amethyst', currentBid: 450, timeLeft: '1h 15m 30s', seller: 'Vectorios' },
    { type: 'auction', id: 'a003', hex: '#3357FF', name: 'Cobalt Dream', currentBid: 875, timeLeft: '1d 2h 05m', seller: 'NeonDreamer' },
    { type: 'trade', id: 't001', hex: '#FF5733', name: 'Crimson Blaze', offering: 'This color', seeking: 'Any "Glacier" type color', seller: 'Vectorios' },
    { type: 'bounty', id: 'b002', target: 'Sovereign Color #FFC0CB (Pink)', reward: 1200, issuer: 'NeonDreamer', description: 'I need this specific color for a new palette I\'m designing. Willing to pay a premium!' },
];

const ListingDetailPage = () => {
    const router = useRouter();
    const { listingId } = router.query;
    
    const listing = allListings.find(l => l.id === listingId);

    if (!listing) {
        return (
            <div className={styles.notFound}>
                <h1>Listing Not Found</h1>
                <Link href="/app/market">Return to Market</Link>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{listing.name || listing.target} - Unified Market</title>
            </Head>
            <div className={styles.pageContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.colorDisplay}>
                        {/* For bounties, we can show a placeholder */}
                        <div className={styles.swatch} style={{ backgroundColor: listing.hex || '#333' }}></div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <h1>{listing.name || listing.target}</h1>
                        {listing.hex && <p className={styles.hexCode}>{listing.hex}</p>}
                        <p className={styles.ownerInfo}>
                            Listed by <Link href={`/app/users/${listing.seller || listing.issuer}`} legacyBehavior><a className={styles.ownerLink}>{listing.seller || listing.issuer}</a></Link>
                        </p>

                        {/* --- Action Box: Renders content based on listing type --- */}
                        <div className={styles.actionBox}>
                            {listing.type === 'sale' && (
                                <>
                                    <div className={styles.label}>Price</div>
                                    <div className={styles.priceValue}>{listing.price} <span>PRISMS</span></div>
                                    <button className={styles.buyButton}>Buy Now</button>
                                </>
                            )}
                            {listing.type === 'auction' && (
                                <>
                                    <div className={styles.label}>Current Bid</div>
                                    <div className={styles.bidValue}>{listing.currentBid} <span>PRISMS</span></div>
                                    <div className={styles.timer}>{listing.timeLeft} remaining</div>
                                    <div className={styles.bidInputContainer}>
                                        <input type="number" className={styles.bidInput} placeholder={`> ${listing.currentBid}`} />
                                        <button className={styles.bidButton}>Place Bid</button>
                                    </div>
                                </>
                            )}
                            {/* We can add trade and bounty details here later */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
ListingDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default ListingDetailPage;
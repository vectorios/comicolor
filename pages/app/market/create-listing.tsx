// pages/app/market/create-listing.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import styles from '../../../styles/CreateListing.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for the user's own colors
const myColors = [
  { hex: '#FF5733', name: 'Crimson Blaze' },
  { hex: '#8E44AD', name: 'Royal Amethyst' },
  { hex: '#D35400', name: 'Pumpkin Spice' },
];

type ListingType = 'sale' | 'auction' | 'trade';

const CreateListingPage = () => {
  const [listingType, setListingType] = useState<ListingType>('sale');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New ${listingType} listing created!`);
    // Logic to submit form data to the backend
  };

  return (
    <>
      <Head>
        <title>Create Listing - The Unified Market</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create a New Listing</h1>
          <p className={styles.subtitle}>Place your assets on the market for sale, auction, or trade.</p>
        </header>

        <div className={styles.formContainer}>
          <div className={styles.tabContainer}>
            <button
              onClick={() => setListingType('sale')}
              className={`${styles.tabButton} ${listingType === 'sale' ? styles.active : ''}`}
            >
              Fixed Price
            </button>
            <button
              onClick={() => setListingType('auction')}
              className={`${styles.tabButton} ${listingType === 'auction' ? styles.active : ''}`}
            >
              Auction
            </button>
            <button
              onClick={() => setListingType('trade')}
              className={`${styles.tabButton} ${listingType === 'trade' ? styles.active : ''}`}
            >
              Trade
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="colorSelect" className={styles.label}>Select Color to List</label>
              <select id="colorSelect" className={styles.select}>
                {myColors.map(color => (
                  <option key={color.hex} value={color.hex}>
                    {color.name} ({color.hex})
                  </option>
                ))}
              </select>
            </div>

            {listingType === 'sale' && (
              <div className={styles.formGroup}>
                <label htmlFor="price" className={styles.label}>Set Price</label>
                <div className={styles.priceInputContainer}>
                  <input type="number" id="price" className={styles.input} placeholder="e.g., 250" />
                  <span className={styles.currencyLabel}>PRISMS</span>
                </div>
              </div>
            )}

            {listingType === 'auction' && (
              <>
                <div className={styles.formGroup}>
                  <label htmlFor="startBid" className={styles.label}>Starting Bid</label>
                  <div className={styles.priceInputContainer}>
                    <input type="number" id="startBid" className={styles.input} placeholder="e.g., 100" />
                    <span className={styles.currencyLabel}>PRISMS</span>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="duration" className={styles.label}>Auction Duration</label>
                  <select id="duration" className={styles.select}>
                    <option value="1d">1 Day</option>
                    <option value="3d">3 Days</option>
                    <option value="7d">7 Days</option>
                  </select>
                </div>
              </>
            )}

            {listingType === 'trade' && (
              <div className={styles.formGroup}>
                <label htmlFor="seeking" className={styles.label}>Seeking in Return</label>
                <input type="text" id="seeking" className={styles.input} placeholder="e.g., Any 'Oceanic' type color" />
              </div>
            )}
            
            <button type="submit" className={styles.submitButton}>
              Create {listingType.charAt(0).toUpperCase() + listingType.slice(1)}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
CreateListingPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreateListingPage;
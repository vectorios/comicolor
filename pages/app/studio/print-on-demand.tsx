// pages/app/studio/print-on-demand.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Studio.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data
const mockProducts = [
  { id: 'mug', name: 'Ceramic Mug' },
  { id: 'tshirt', name: 'Organic Cotton T-Shirt' },
  { id: 'poster', name: 'A3 Matte Poster' },
];

const myAssets = [
  { id: 'c1', hex: '#FF5733', name: 'Crimson Blaze' },
  { id: 'c2', hex: '#8E44AD', name: 'Royal Amethyst' },
  { id: 'c3', hex: '#1ABC9C', name: 'Turquoise Sea' },
];

const PODStudioPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const [selectedAsset, setSelectedAsset] = useState(myAssets[0]);

  return (
    <>
      <Head>
        <title>Print-on-Demand Studio - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Materialization Workshop</h1>
        </header>
        <div className={styles.studioLayout}>
          {/* Left Panel: Configuration */}
          <aside className={styles.configPanel}>
            <div className={styles.configSection}>
              <h3>1. Choose a Product</h3>
              <div className={styles.productList}>
                {mockProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`${styles.productItem} ${selectedProduct.id === product.id ? styles.active : ''}`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.configSection}>
              <h3>2. Select Your Color</h3>
              <div className={styles.assetList}>
                {myAssets.map(asset => (
                   <button
                    key={asset.id}
                    onClick={() => setSelectedAsset(asset)}
                    className={`${styles.assetItem} ${selectedAsset.id === asset.id ? styles.active : ''}`}
                  >
                    <div className={styles.assetSwatch} style={{ backgroundColor: asset.hex }}></div>
                    {asset.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Panel: Preview */}
          <main className={styles.previewPanel}>
            <div className={styles.previewWindow}>
              {/* This is a simplified preview. A real app would have more complex components here. */}
              {selectedProduct.id === 'mug' && (
                <div className={styles.mockupMug} style={{ backgroundColor: selectedAsset.hex }} />
              )}
              {selectedProduct.id === 'tshirt' && (
                <div style={{ fontSize: '10rem' }}>👕</div> // Placeholder
              )}
               {selectedProduct.id === 'poster' && (
                <div style={{ width: '250px', height: '350px', border: '1px solid #fff', backgroundColor: selectedAsset.hex }} />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
PODStudioPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default PODStudioPage;
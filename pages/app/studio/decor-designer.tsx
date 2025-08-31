// pages/app/studio/decor-designer.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import styles from '../../../styles/DecorDesigner.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for user's colors
const myColors = [
  { id: 'c1', hex: '#6D7B8D', name: 'Slate' },
  { id: 'c2', hex: '#C3B091', name: 'Parchment' },
  { id: 'c3', hex: '#F7F9F9', name: 'Glacier White' },
  { id: 'c4', hex: '#34495E', name: 'Asphalt' },
  { id: 'c5', hex: '#1ABC9C', name: 'Turquoise Sea' },
  { id: 'c6', hex: '#E74C3C', name: 'Cinnabar' },
  { id: 'c7', hex: '#F1C40F', name: 'Sunstone' },
  { id: 'c8', hex: '#8E44AD', name: 'Amethyst' },
];

const DecorDesignerPage = () => {
  const [activeColor, setActiveColor] = useState(myColors[0].hex);
  const [roomColors, setRoomColors] = useState({
    wall: '#34495E',
    floor: '#C3B091',
    sofa: '#6D7B8D',
    cushion: '#E74C3C',
  });

  const handleApplyColor = (part: keyof typeof roomColors) => {
    setRoomColors(prev => ({
      ...prev,
      [part]: activeColor,
    }));
  };

  return (
    <>
      <Head>
        <title>Decor Designer - ColorVerse Studio</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Decor Designer</h1>
        </header>
        <div className={styles.designerLayout}>
          {/* Left Panel: Controls */}
          <aside className={styles.controlsPanel}>
            <h3>Your Color Palette</h3>
            <div className={styles.colorPalette}>
              {myColors.map(color => (
                <div
                  key={color.id}
                  className={`${styles.swatch} ${activeColor === color.hex ? styles.active : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setActiveColor(color.hex)}
                  title={color.name}
                />
              ))}
            </div>
            {/* We could add more sections for furniture, textures, etc. */}
          </aside>

          {/* Right Panel: Preview */}
          <main className={styles.previewPanel}>
            {/* This is a simple SVG representing a room. Clicking a part applies the active color. */}
            <svg viewBox="0 0 800 600" className={styles.roomPreview}>
              <rect className={styles.roomPart} x="0" y="0" width="800" height="400" fill={roomColors.wall} onClick={() => handleApplyColor('wall')} />
              <polygon className={styles.roomPart} points="0,400 800,400 600,600 200,600" fill={roomColors.floor} onClick={() => handleApplyColor('floor')} />
              <rect className={styles.roomPart} x="250" y="300" width="300" height="150" rx="10" fill={roomColors.sofa} onClick={() => handleApplyColor('sofa')} />
              <circle className={styles.roomPart} cx="320" cy="350" r="40" fill={roomColors.cushion} onClick={() => handleApplyColor('cushion')} />
            </svg>
          </main>
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
DecorDesignerPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default DecorDesignerPage;
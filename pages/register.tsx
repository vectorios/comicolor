import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';
import { PayPalButtons, OnApproveData } from "@paypal/react-paypal-js";

// Un composant simple pour la liste des pays
const CountrySelector = ({ value, onChange }: { value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => (
    <select id="country" className={styles.input} value={value} onChange={onChange} required>
        <option value="">Select a country...</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        {/* Ajoutez plus de pays ici */}
    </select>
);

const RegisterPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Un seul état pour toutes les infos de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setUserInfo(prev => ({ ...prev, [id]: value }));
  };

  const goToNextStep = () => setStep(prev => prev + 1);
  const goToPrevStep = () => setStep(prev => prev - 1);

  // Logique appelée après l'approbation du paiement PayPal
  const onApprove = async (data: OnApproveData) => {
    setIsLoading(true);
    setError('');

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userInfo, paymentId: data.orderID }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Welcome to ColorVerse! Your account has been activated.");
      router.push('/app/dashboard');
    } else {
      setError(result.message || 'An error occurred during final registration.');
      setStep(1); // Revenir à la première étape
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register - Become a Guardian</title>
      </Head>
      <div className={styles.authContainer}>
        <div className={styles.authForm} style={{maxWidth: '550px'}}>
          <h1 className={styles.title}>Become a Guardian</h1>
          <p className={styles.subtitle}>Step {step} of 3: {step === 1 ? "Account Information" : step === 2 ? "Starter Pack" : "Activation"}</p>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          {/* --- ÉTAPE 1: INFORMATIONS DU COMPTE --- */}
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); goToNextStep(); }}>
              <div style={{display: 'flex', gap: '1rem'}}>
                  <div className={styles.formGroup} style={{flex: 1}}><label htmlFor="firstName" className={styles.label}>First Name</label><input type="text" id="firstName" className={styles.input} value={userInfo.firstName} onChange={handleInputChange} required /></div>
                  <div className={styles.formGroup} style={{flex: 1}}><label htmlFor="lastName" className={styles.label}>Last Name</label><input type="text" id="lastName" className={styles.input} value={userInfo.lastName} onChange={handleInputChange} required /></div>
              </div>
              <div className={styles.formGroup}><label htmlFor="username" className={styles.label}>Guardian Name</label><input type="text" id="username" className={styles.input} value={userInfo.username} onChange={handleInputChange} required /></div>
              <div className={styles.formGroup}><label htmlFor="email" className={styles.label}>Email Address</label><input type="email" id="email" className={styles.input} value={userInfo.email} onChange={handleInputChange} required /></div>
              <div className={styles.formGroup}><label htmlFor="password" className={styles.label}>Password</label><input type="password" id="password" className={styles.input} value={userInfo.password} onChange={handleInputChange} required /></div>
              <div className={styles.formGroup}><label htmlFor="country" className={styles.label}>Country</label><CountrySelector value={userInfo.country} onChange={handleInputChange} /></div>
              <button type="submit" className={styles.submitButton}>Next Step</button>
            </form>
          )}

          {/* --- ÉTAPE 2: PRÉSENTATION DU PACK --- */}
          {step === 2 && (
            <div style={{textAlign: 'center'}}>
                <h2>Your Guardian Starter Pack</h2>
                <div style={{backgroundColor: 'rgba(0,0,0,0.1)', padding: '1.5rem', borderRadius: '8px', margin: '2rem 0'}}>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>✔ 1 Exclusive Sovereign Color</p>
                    <small>A unique, high-influence color to start your collection.</small>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1.5rem'}}>✔ 100 PRISMS</p>
                    <small>The official currency of the Verse to trade on the market.</small>
                </div>
                <h3>Total Price: $24.00 (Lifetime Access)</h3>
                <button onClick={goToNextStep} className={styles.submitButton}>Proceed to Payment</button>
                <button onClick={goToPrevStep} style={{background: 'none', border: 'none', color: '#6c757d', cursor: 'pointer', marginTop: '1rem'}}>Back</button>
            </div>
          )}

          {/* --- ÉTAPE 3: PAIEMENT & PROFITS --- */}
          {step === 3 && (
            <div style={{textAlign: 'center'}}>
              <h3>Activate Your Account</h3>
              <p style={{color: '#6c757d', marginBottom: '2rem'}}>Complete the one-time payment of $24.00 to receive your assets and join the Verse.</p>
              <h4>How can you profit?</h4>
              <p style={{fontSize: '0.9rem', textAlign: 'left', lineHeight: '1.6'}}>
                - <strong>Trade Your Colors:</strong> Sell your Sovereign Colors on the Unified Market.<br/>
                - <strong>License Your Assets:</strong> Grant commercial usage rights to brands for a fee.<br/>
                - <strong>Create & Sell:</strong> Design unique palettes and creations and sell them as valuable assets.
              </p>
              {isLoading ? <p>Finalizing your registration...</p> : (
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => actions.order.create({ purchase_units: [{ description: "ColorVerse Guardian Starter Pack", amount: { value: "24.00" } }] })}
                  onApprove={onApprove}
                  onError={(err) => { setError("An error occurred with the PayPal transaction. Please try again."); console.error(err); }}
                />
              )}
               <button onClick={goToPrevStep} style={{background: 'none', border: 'none', color: '#6c757d', cursor: 'pointer', marginTop: '1rem'}}>Back</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
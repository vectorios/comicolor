// pages/initiation/index.tsx
import React, { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InitiationLayout from '../../components/initiation/InitiationLayout';
import styles from '../../styles/Initiation.module.css';
import { PayPalButtons, OnApproveData } from "@paypal/react-paypal-js";

// ====================================================================================
// COMPOSANT PRINCIPAL : ORCHESTRATEUR
// ====================================================================================
const InitiationPage = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const nextStep = (data: object = {}) => {
    setUserData(prev => ({ ...prev, ...data }));
    setStep(s => s + 1);
  };
  
  const prevStep = () => setStep(s => s - 1);

  return (
    <div>
      {step === 1 && <Step1 onComplete={nextStep} />}
      {step === 2 && <Step2 onComplete={nextStep} onBack={prevStep} />}
      {step === 3 && <Step3 onComplete={nextStep} onBack={prevStep} userData={userData} />}
      {step === 4 && <Step4 onBack={prevStep} userData={userData} />}
    </div>
  );
};
InitiationPage.getLayout = (page: ReactElement) => <InitiationLayout>{page}</InitiationLayout>;
export default InitiationPage;


// ====================================================================================
// ÉTAPE 1 : L'INTERROGATOIRE
// ====================================================================================
const Step1 = ({ onComplete }: { onComplete: (data: object) => void }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', country: '', username: '', email: '', password: '' });
    const [usernameStatus, setUsernameStatus] = useState({ checking: false, message: '', available: false });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (id === 'username') checkUsername(value);
    };

    const checkUsername = debounce(async (username: string) => {
        if (username.length < 3) { setUsernameStatus({ checking: false, message: '', available: false }); return; }
        setUsernameStatus({ checking: true, message: 'Verifying...', available: false });
        const res = await fetch('/api/auth/check-username', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username }) });
        const data = await res.json();
        setUsernameStatus({ checking: false, message: data.message, available: data.available });
    }, 500);

    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if(usernameStatus.available) onComplete(formData); };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}><p className={styles.terminalText}>[SYSTEM]: State your true name. (First & Last)</p><div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}><span className={styles.terminalText}>&gt;</span><input id="firstName" type="text" placeholder="First Name" className={styles.terminalInput} value={formData.firstName} onChange={handleInputChange} required style={{flex:1}} /><input id="lastName" type="text" placeholder="Last Name" className={styles.terminalInput} value={formData.lastName} onChange={handleInputChange} required style={{flex:1}} /></div></div>
            <div className={styles.formGroup}><p className={styles.terminalText}>[SYSTEM]: Specify your terrestrial origin. (Country)</p><div style={{display: 'flex', alignItems: 'center'}}><span className={styles.terminalText}>&gt;</span><select id="country" className={styles.select} value={formData.country} onChange={handleInputChange} required><option value="">Select country...</option><option value="US">United States</option><option value="CA">Canada</option><option value="FR">France</option></select></div></div>
            <div className={styles.formGroup}><p className={styles.terminalText}>[SYSTEM]: The Verse will know you by another name. Choose it wisely.</p><div style={{display: 'flex', alignItems: 'center'}}><span className={styles.terminalText}>&gt;</span><input id="username" type="text" className={styles.terminalInput} value={formData.username} onChange={handleInputChange} required minLength={3} /></div>{usernameStatus.message && <small style={{marginLeft: '2rem', color: !usernameStatus.available ? '#e94560' : '#00ff41'}}>{usernameStatus.message}</small>}</div>
            <div className={styles.formGroup}><p className={styles.terminalText}>[SYSTEM]: We require a secure channel. (Email)</p><div style={{display: 'flex', alignItems: 'center'}}><span className={styles.terminalText}>&gt;</span><input id="email" type="email" className={styles.terminalInput} value={formData.email} onChange={handleInputChange} required /></div></div>
            <div className={styles.formGroup}><p className={styles.terminalText}>[SYSTEM]: Devise an access key. It will shield your identity.</p><div style={{display: 'flex', alignItems: 'center'}}><span className={styles.terminalText}>&gt;</span><input id="password" type="password" className={styles.terminalInput} value={formData.password} onChange={handleInputChange} required minLength={8} /></div></div>
            <button type="submit" className={styles.button} disabled={usernameStatus.checking || !usernameStatus.available}>Swear the Oath & Continue</button>
        </form>
    );
};

// ====================================================================================
// ÉTAPE 2 : LE TEST DE PHILOSOPHIE
// ====================================================================================
const philosophyQuestions = [
    { id: 'q1', question: 'A blank canvas inspires in you...', options: [{ text: 'The thrill of infinite possibility.', value: 'Creator' }, { text: 'The challenge of finding the single perfect element.', value: 'Archivist' }, { text: 'The desire to organize chaos into harmony.', value: 'Strategist' }] },
    { id: 'q2', question: 'A rare color appears. Your instinct is to...', options: [{ text: 'Use it in a new creation.', value: 'Creator' }, { text: 'Acquire and hold it for its future value.', value: 'Strategist' }, { text: 'See how it interacts with your existing colors.', value: 'Archivist' }] },
    { id: 'q3', question: 'The Chromatic Codex is primarily...', options: [{ text: 'A system to master for economic advantage.', value: 'Strategist' }, { text: 'A historical record to preserve and study.', value: 'Archivist' }, { text: 'A guide, but true creativity transcends rules.', value: 'Creator' }] }
];
const Step2 = ({ onComplete, onBack }: { onComplete: (data: object) => void, onBack: () => void }) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const handleAnswerChange = (qId: string, val: string) => setAnswers(prev => ({...prev, [qId]: val}));
    const handleSubmit = () => {
        const counts: Record<string, number> = { Creator: 0, Strategist: 0, Archivist: 0 };
        Object.values(answers).forEach(ans => counts[ans]++);
        const archetype = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, 'Creator');
        onComplete({ archetype });
    };
    return (
        <div>
            <p className={styles.terminalText}>[SYSTEM]: A Guardian's philosophy defines their path. Respond.</p>
            {philosophyQuestions.map(q => (<div key={q.id} className={styles.questionBlock}><p className={styles.terminalText}>{q.question}</p><ul className={styles.optionsList}>{q.options.map(opt => (<li key={opt.value}><label className={styles.optionLabel}><input type="radio" name={q.id} value={opt.value} checked={answers[q.id] === opt.value} onChange={() => handleAnswerChange(q.id, opt.value)} className={styles.radioInput}/><span>{opt.text}</span></label></li>))}</ul></div>))}
            <div className={styles.buttonContainer}><button onClick={onBack} className={styles.button}>&lt; Back</button><button onClick={handleSubmit} className={styles.button} disabled={Object.keys(answers).length < philosophyQuestions.length}>Submit for Analysis</button></div>
        </div>
    );
};

// ====================================================================================
// ÉTAPE 3 : LE VERDICT & L'OFFRE
// ====================================================================================
const archetypeInfo: Record<string, string> = {
    Creator: "Your profile shows an inclination towards creation. You see colors as ingredients.",
    Strategist: "Your profile indicates a keen eye for value. You see the spectrum as a chessboard of opportunity.",
    Archivist: "Your profile reveals an appreciation for history. You see colors as interconnected artifacts."
};
const Step3 = ({ onComplete, onBack, userData }: { onComplete: (data: object) => void, onBack: () => void, userData: any }) => {
    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const archetype = userData.archetype || 'Creator';
    useEffect(() => { const timer = setTimeout(() => setIsAnalyzing(false), 3000); return () => clearTimeout(timer); }, []);

    if (isAnalyzing) return (<div className={styles.analysisContainer}><p className={styles.terminalText}>[ANALYZING PSYCHOMETRIC PROFILE...]</p><div className={styles.loader}><div className={styles.loaderBar}></div></div></div>);

    return (
        <div>
            <div className={styles.verdict}>[ANALYSIS COMPLETE. ARCHETYPE IDENTIFIED: <span className={styles.archetype}>{archetype.toUpperCase()}</span>]</div>
            <p className={styles.explanation}>{archetypeInfo[archetype]}</p>
            <p className={styles.terminalText}>[SYSTEM]: The Council has approved the standard Endowment package for your initiation.</p>
            <div className={styles.endowmentContainer}><div className={styles.packDescription}><h3>Guardian Starter Kit</h3><ul><li>✔ 1 Sovereign Color Deed</li><li>✔ 100 PRISMS Currency</li><li>✔ Lifetime Citizenship</li></ul><div className={styles.price}>Total: $24.00</div></div><div className={styles.archetypeDescription}><h3>Your Path as a {archetype}</h3><p style={{color: '#c0c0d0'}}>Your Genesis Color will be chosen to reflect your nature.</p></div></div>
            <div className={styles.buttonContainer}><button onClick={onBack} className={styles.button}>&lt; Re-evaluate</button><button onClick={() => onComplete({})} className={styles.button}>Accept & Finalize Pact</button></div>
        </div>
    );
};

// ====================================================================================
// ÉTAPE 4 : LE PAIEMENT SACRIFICIEL
// ====================================================================================
const Step4 = ({ onBack, userData }: { onBack: () => void, userData: any }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const onApprove = async (data: OnApproveData) => {
        setIsProcessing(true);
        setError('');
        const response = await fetch('/api/auth/register-initiate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...userData, paymentId: data.orderID }) });
        const result = await response.json();
        if (response.ok) {
            const { name, hex } = result.genesisColor;
            const username = result.user.username;
            router.push(`/welcome?colorName=${encodeURIComponent(name)}&colorHex=${hex}&username=${username}`);
        } else {
            setError(result.message || 'A critical error occurred.');
            setIsProcessing(false);
        }
    };
    
    return (
        <div className={styles.paymentContainer}>
            {!isProcessing ? (
                <>
                    <p className={styles.sacrificeText}>A sacrifice is required to bind your essence to the Verse.</p>
                    <div className={styles.paypalContainer}><PayPalButtons style={{ layout: "vertical", color: "black" }} createOrder={(data, actions) => actions.order.create({ purchase_units: [{ description: "ColorVerse Guardian Starter Pack", amount: { value: "24.00" } }] })} onApprove={onApprove} onError={(err) => { setError("PayPal transaction failed."); console.error(err); }}/></div>
                    {error && <p style={{color: '#e94560', marginTop: '1rem'}}>{error}</p>}
                    <button onClick={onBack} className={styles.button} style={{marginTop: '1rem'}}>&lt; Back</button>
                </>
            ) : (
                <div className={styles.processingContainer}>
                    <p className={styles.statusLine}>[SYSTEM]: Payment Approved. Validating Guardian Name: {userData.username}...</p>
                    <p className={styles.statusLine}>[SYSTEM]: Analyzing psychometric profile: {userData.archetype}...</p>
                    <p className={styles.statusLine}>[SYSTEM]: Allocating a fitting Genesis Color Deed...</p>
                    <p className={styles.statusLine}>[SYSTEM]: Depositing 100 PRISMS into your new wallet...</p>
                    <p className={styles.statusLine}>[SYSTEM]: Ratifying Citizenship... Complete!</p>
                </div>
            )}
        </div>
    );
};

// ====================================================================================
// FONCTION UTILITAIRE DE DEBOUNCE
// ====================================================================================
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
}
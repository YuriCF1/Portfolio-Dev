'use client'

import { useContext, useState, useEffect } from 'react';
import styles from './CookiesConsent.module.css';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal';
import { LanguageContext } from '@/app/context/toggleConext';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mouseOverYes, setMouseOverYes] = useState(false)

  const { language } = useContext(LanguageContext)

  useEffect(() => {
    console.log(language)
  }, [language])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    if (window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
      console.log('Consent granted for analytics storage');
    } else {
      console.log('gtag is not defined');
    }
  };

  const handleDecline = () => {
    setIsVisible(false);
    if (window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
      console.log('Consent denied for analytics storage');
    } else {
      console.log('gtag is not defined');
    }
  };

  if (!isVisible) {
    return null;
  }

  const changeEmoji = (valor: boolean) => {
    setMouseOverYes(valor)
  }


  return (
    <>
      {language === "portuguese" ?
        <>
          <div className={styles.cookieConsent}>
            <div className={styles.decisao}>
              <p>
                Para me ajudar a ter uma noção do alcance do meu portfolio, eu também utilizei o Google Analytics para saber algumas informações sobre quem acessa este site. Você concorda em ceder tais informações?
              </p>
              <div>
                <button
                  onClick={handleAccept}
                  onMouseOver={() => changeEmoji(true)}
                  onMouseOut={() => changeEmoji(false)}
                >
                  Claro, boa sorte! {mouseOverYes ? '🤗' : '😇'}
                </button>
                <button onClick={handleDecline}>não... &#128542;</button>
              </div>
            </div>
            <div className={styles.privacy}>
              <p>
                Você pode saber mais sobre os dados que terei acesso lendo minha
              </p>
              <button onClick={() => setIsModalOpen(true)} className={styles.privacyLink}>Política de Privacidade</button>
            </div>
          </div>
          <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
        :
        <>
          <div className={styles.cookieConsent}>
            <div className={styles.decisao}>
              <p>
                To help me get a sense of the reach of my portfolio, I also used Google Analytics to find out some information about who accesses this site. Do you agree to provide such information?
              </p>
              <div>
                <button
                  onClick={handleAccept}
                  onMouseOver={() => changeEmoji(true)}
                  onMouseOut={() => changeEmoji(false)}
                >
                  Sure, good luck! {mouseOverYes ? '🤗' : '😇'}
                </button>
                <button onClick={handleDecline}>no... &#128542;</button>
              </div>
            </div>
            <div className={styles.privacy}>
              <p>
                You can learn more about the data I will have access to by reading my
              </p>
              <button onClick={() => setIsModalOpen(true)} className={styles.privacyLink}>Privacy Policy</button>
            </div>
          </div>
          <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      }
    </>
  );
};

export default CookieConsent;

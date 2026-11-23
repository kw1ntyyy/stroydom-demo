import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Calculator from './components/Calculator';
import Packages from './components/Packages';
import Stages from './components/Stages';
import Guarantees from './components/Guarantees';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import Dialogs from './components/Dialogs';
import Toast from './components/Toast';

export default function App() {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);

  const openModal = useCallback((type, data) => setModal({ type, data }), []);
  const closeModal = useCallback(() => setModal(null), []);
  const closeToast = useCallback(() => setToast(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section">
          <div className="container row row--catalog">
            <Catalog onOpen={openModal} />
            <Calculator />
          </div>
        </section>

        <section className="section section--split">
          <div className="container row row--split">
            <Packages onOpen={openModal} />
            <Stages onOpen={openModal} />
          </div>
        </section>

        <section className="section section--last">
          <div className="container row row--cta">
            <Guarantees onOpen={openModal} />
            <LeadForm
              onSuccess={(name) =>
                setToast({
                  title: `Спасибо, ${name}!`,
                  text: 'Это демонстрационная форма — заявка никуда не отправлена.',
                })
              }
            />
          </div>
        </section>
      </main>
      <Footer />
      <Dialogs modal={modal} onClose={closeModal} />
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    question: "Combien de chambres possède le Park Hôtel Lubumbashi ?",
    answer:
      "Le Park Hôtel dispose de 77 chambres confortables, incluant des chambres standard, supérieures et Le Jardin, toutes équipées de salles de bain privées, climatisation et Wi-Fi gratuit.",
  },
  {
    question: "Quels types de cuisine propose le restaurant ?",
    answer:
      "Notre restaurant propose une cuisine congolaise authentique et européenne. Petit-déjeuner de 6h à 10h, déjeuner de 12h à 15h, dîner de 18h à 22h.",
  },
  {
    question: "Le Park Hôtel dispose-t-il d'un spa ?",
    answer:
      "Oui, notre spa propose des massages aux pierres chaudes, soins du visage, aromathérapie et soins corporels pour un bon moment de détente.",
  },
  {
    question: "Où se situe le Park Hôtel Lubumbashi ?",
    answer:
      "Nous sommes situés Avenue Munongo n°50, en plein centre-ville de Lubumbashi, près de la Grande Poste. Facilement accessible depuis les principaux points d'intérêt.",
  },
  {
    question: "Y a-t-il des salles de réunion disponibles ?",
    answer:
      "Oui, nous disposons de salles de réunion de différentes capacités, équipées de vidéoprojecteur, Wi-Fi et service de restauration sur demande.",
  },
  {
    question: "Comment puis-je réserver une chambre ou une table ?",
    answer:
      "Vous pouvez réserver directement sur notre site via le formulaire de réservation, par téléphone au +243 997 032 330, par WhatsApp, ou par email à info@parkhotelcongo.com.",
  },
  {
    question: "Un distributeur automatique est-il disponible sur place ?",
    answer:
      "Oui, un ATM est disponible 24h/24, 7j/7 dans l'enceinte de l'hôtel pour vos retraits et transactions bancaires.",
  },
  {
    question: "La réception est-elle ouverte en permanence ?",
    answer:
      "Oui, notre réception est ouverte 24h/24, 7j/7. Notre équipe est toujours disponible pour répondre à vos besoins.",
  },
];

const FAQSection = () => {
  useEffect(() => {
    // Inject FAQPage schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-hotel max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="title-section mt-3 mb-4">Questions Fréquentes</h2>
          <p className="subtitle">
            Retrouvez les réponses aux questions les plus posées sur le Park
            Hôtel Lubumbashi.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

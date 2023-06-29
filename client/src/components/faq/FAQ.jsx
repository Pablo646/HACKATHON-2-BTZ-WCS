import React, { useState } from 'react';
import './faq.css';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Comment estimer la valeur d'un téléphone d'occasion ?",
      answer:
        "La valeur d'un téléphone d'occasion est basée sur plusieurs critères tels que la marque, le modèle, l'année du téléphone, la capacité de stockage, la mémoire RAM, le statut de blocage, la taille de l'écran, le statut du téléphone, le score Antutu, et le prix estimé.",
    },
    {
      question:
        "Quels critères sont pris en compte pour décider de la valeur d'un téléphone d'occasion ?",
      answer:
        "Les critères suivants sont pris en compte pour décider de la valeur d'un téléphone d'occasion : marque, modèle, année du téléphone, capacité de stockage, mémoire RAM, statut de blocage, taille de l'écran, statut du téléphone, score Antutu et prix estimé.",
    },
    {
      question:
        "Comment puis-je estimer la valeur d'un téléphone d'occasion avec Emmaus Connect ?",
      answer:
        "Pour estimer la valeur d'un téléphone d'occasion avec Emmaus Connect, vous devez prendre en compte des critères tels que la marque, le modèle, l'année du téléphone, la capacité de stockage, la mémoire RAM, le statut de blocage, la taille de l'écran, le statut du téléphone, le score Antutu et le prix estimé.",
    },
    {
      question:
        "Quels critères sont pris en compte pour évaluer la marque d'un téléphone ?",
      answer:
        "Les critères pris en compte pour évaluer la marque d'un téléphone sont la réputation de la marque sur le marché, la qualité de fabrication, les performances passées des modèles de la marque et la demande des utilisateurs pour cette marque spécifique.",
    },
    {
      question: 'Comment puis-je connaître le modèle exact de mon téléphone ?',
      answer:
        "Pour connaître le modèle exact de votre téléphone, vous pouvez vérifier les informations figurant sur l'étiquette du téléphone, dans les paramètres du téléphone ou sur la boîte d'emballage d'origine.",
    },
    {
      question: "Est-ce que l'année du téléphone affecte sa valeur ?",
      answer:
        "Oui, l'année du téléphone peut affecter sa valeur. En général, les téléphones plus récents ont tendance à avoir une valeur plus élevée que les modèles plus anciens.",
    },
    {
      question:
        'Comment puis-je déterminer la capacité de stockage de mon téléphone ?',
      answer:
        'Pour déterminer la capacité de stockage de votre téléphone, vous pouvez vérifier les paramètres du téléphone ou consulter les spécifications du modèle sur le site du fabricant.',
    },
    {
      question:
        "Est-ce que la mémoire RAM influence la valeur d'un téléphone d'occasion ?",
      answer:
        "Oui, la mémoire RAM peut influencer la valeur d'un téléphone d'occasion. Les téléphones avec une mémoire RAM plus élevée ont généralement de meilleures performances, ce qui peut augmenter leur valeur.",
    },
    {
      question: 'Comment savoir si un téléphone est bloqué ou débloqué ?',
      answer:
        "Vous pouvez vérifier le statut de blocage d'un téléphone en insérant une carte SIM d'un opérateur différent et en vérifiant s'il fonctionne correctement. Si le téléphone fonctionne avec différentes cartes SIM, il est probablement débloqué.",
    },
    {
      question:
        "Pourquoi la taille de l'écran est-elle importante dans l'estimation de la valeur d'un téléphone ?",
      answer:
        "La taille de l'écran peut influencer la valeur d'un téléphone car elle peut affecter l'expérience utilisateur. Les téléphones avec des écrans plus grands peuvent être plus demandés, ce qui peut augmenter leur valeur.",
    },
    {
      question:
        "Qu'est-ce que le statut du téléphone signifie dans l'estimation de sa valeur ?",
      answer:
        ' Le statut du téléphone fait référence à son état général, comme neuf, légèrement utilisé ou usagé. Un téléphone en meilleur état aura généralement une valeur plus élevée.',
    },
    {
      question:
        "Qu'est-ce que le score Antutu et comment cela affecte-t-il la valeur d'un téléphone ?",
      answer:
        " Le score Antutu est une mesure des performances d'un téléphone. Plus le score Antutu est élevé, meilleures sont les performances du téléphone, ce qui peut augmenter sa valeur sur le marché de l'occasion.",
    },
    {
      question: 'Comment puis-je obtenir le score Antutu de mon téléphone ?',
      answer:
        " Vous pouvez télécharger l'application Antutu Benchmark depuis le Google Play Store ou l'App Store, puis exécuter le test pour obtenir le score Antutu de votre téléphone.",
    },
    {
      question:
        "Qu'est-ce que le prix estimé dans le contexte d'Emmaus Connect ?",
      answer:
        " Le prix estimé fait référence à la valeur approximative d'un téléphone d'occasion, calculée en fonction de ses caractéristiques et des critères pris en compte dans Emmaus Connect.",
    },
    {
      question:
        "Comment puis-je connaître le prix estimé d'un téléphone avec Emmaus Connect ?",
      answer:
        " Pour connaître le prix estimé d'un téléphone avec Emmaus Connect, vous devez fournir les informations sur la marque, le modèle, l'année, la capacité de stockage, la mémoire RAM, le statut de blocage, la taille de l'écran et le score Antutu. Le système utilisera ces informations pour estimer la valeur du téléphone.",
    },
    {
      question:
        "Est-ce que la présence de rayures ou de dommages physiques affecte la valeur d'un téléphone d'occasion ?",
      answer:
        " Oui, la présence de rayures ou de dommages physiques peut affecter la valeur d'un téléphone d'occasion. Les téléphones en meilleur état esthétique ont généralement une valeur plus élevée.",
    },
    {
      question:
        'Comment puis-je savoir si mon téléphone est en bon état de fonctionnement ?',
      answer:
        " Pour vérifier si votre téléphone est en bon état de fonctionnement, assurez-vous que toutes les fonctionnalités clés sont opérationnelles, telles que les appels, les messages, le Wi-Fi, l'appareil photo, le haut-parleur, etc.",
    },
    {
      question:
        "Quelle est l'importance de l'emballage d'origine dans l'estimation de la valeur d'un téléphone d'occasion ?",
      answer:
        " L'emballage d'origine peut avoir une certaine influence sur la valeur d'un téléphone d'occasion. Certains acheteurs préfèrent les téléphones avec leur emballage d'origine car cela peut indiquer que le téléphone a été bien entretenu.",
    },
    {
      question:
        'Comment puis-je obtenir une estimation précise de la valeur de mon téléphone avec Emmaus Connect ?',
      answer:
        ' Pour obtenir une estimation précise de la valeur de votre téléphone avec Emmaus Connect, assurez-vous de fournir des informations précises et détaillées sur toutes les caractéristiques du téléphone.',
    },
    {
      question:
        "Emmaus Connect accepte-t-il tous les modèles de téléphones d'occasion ?",
      answer:
        " Non, Emmaus Connect accepte un large éventail de modèles de téléphones d'occasion mais se réserve certains critères. Vous pouvez soumettre les détails de votre téléphone et obtenir une estimation de sa valeur, quelle que soit la marque ou le modèle.",
    },
    {
      question:
        'Comment puis-je soumettre les informations de mon téléphone à Emmaus Connect pour obtenir une estimation ?',
      answer:
        " Pour soumettre les informations de votre téléphone à Emmaus Connect, connectez-vous à l'outil et recherchez l'option permettant d'ajouter un nouveau téléphone. Remplissez tous les champs requis avec les détails de votre téléphone, tels que la marque, le modèle, l'année, la capacité de stockage, la mémoire RAM, le statut de blocage, la taille de l'écran, le score Antutu, etc. Une fois que vous avez fourni toutes les informations demandées, le système vous donnera une estimation de la valeur du téléphone.",
    },
    {
      question:
        'Comment puis-je soumettre les informations de mon téléphone à Emmaus Connect pour obtenir une estimation ?',
      answer:
        " Pour soumettre les informations de votre téléphone à Emmaus Connect, connectez-vous via votre compte au formulaire et recherchez l'option permettant d'ajouter un nouveau téléphone. Remplissez tous les champs requis avec les détails de votre téléphone, tels que la marque, le modèle, l'année, la capacité de stockage, la mémoire RAM, le statut de blocage, la taille de l'écran, le score Antutu, etc. Une fois que vous avez fourni toutes les informations demandées, le système vous donnera une estimation de la valeur du téléphone.",
    },
    {
      question:
        "Que faire si je ne trouve pas mon modèle de téléphone dans la liste d'Emmaus Connect ?",
      answer:
        " Si vous ne trouvez pas votre modèle de téléphone dans la liste proposée par Emmaus Connect, vous pouvez sélectionner une option similaire qui correspond le mieux à votre téléphone en termes de spécifications et de caractéristiques. Si vous avez des doutes, vous pouvez contacter l'équipe d'assistance d'Emmaus Connect pour obtenir de l'aide supplémentaire.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_container">
      <h1>Foire Aux Questions</h1>
      <h4>
        Vous trouverez ci-dessous notre FAQ qui vous guidera dans l'appréhension
        et l'utilisation de notre outils dédié à l'estimation des téléphones
        reçus lors de donnation. Cela vous permettra ainsi d'esstimer le prix
        potentiel de vente de chaque appareils pour votre point de vente.
      </h4>
      {faqData.map((item, index) => (
        <div className="qa_container" key={index}>
          <span
            className="question_container"
            onClick={() => handleToggle(index)}>
            {item.question}
          </span>
          {activeIndex === index && (
            <p className="answer_container">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

import React from 'react';
import PropTypes from 'prop-types';
import featuresData from '../../../Datas/featuresData';
import chatIcon from '../../../assets/images/icon-chat.webp';
import moneyIcon from '../../../assets/images/icon-money.webp';
import securityIcon from '../../../assets/images/icon-security.webp';

function FeatureItem({id,title,description}) {
  const iconMap = {
  1: chatIcon,
  2: moneyIcon,
  3: securityIcon,
};

const icon = iconMap[id] || chatIcon;

  return (
    <div className={`feature-item feature-${id}`}>
      <img src={icon} alt={`Feature Icon ${id}`} className={`feature-icon feature-icon-${id}`} />
      <h3 className={`feature-item-title feature-title-${id}`}>{title}</h3>
      <p className={`feature-description-${id}`}>{description}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function FeaturesBody() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </section>
  );
}

export default FeaturesBody;

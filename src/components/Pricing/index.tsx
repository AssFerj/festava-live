'use client';

import React from 'react';
import Button from '@/components/Button';
import {
  PricingSection,
  Title,
  PricingPlan,
  PricingHeader,
  PricingPrice,
  PricingBody,
  PricingFooter,
} from './styles';

const pricingData = [
  {
    title: 'Lote 1',
    price: 120,
    features: [
      'Passe para o Dia Inteiro',
      'Acesso à After-Party',
      'Vouchers de Comida',
      'Camiseta do Festival',
    ],
    popular: false,
  },
  {
    title: 'Pista',
    price: 240,
    features: [
      'Passe para o Dia Inteiro',
      'Acesso à After-Party',
      'Vouchers de Comida',
      'Produto Oficial',
    ],
    popular: true,
  },
  {
    title: 'VIP',
    price: 360,
    features: [
      'Assento VIP',
      'Encontro com Artistas',
      'Acesso ao Backstage',
      'Comida de Rua Premium',
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <PricingSection id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Title>Planos para você</Title>
          </div>

          {pricingData.map((plan, index) => (
            <div key={index} className="col-lg-4 col-12">
              <PricingPlan className={plan.popular ? 'pricing-popular' : ''}>
                <PricingHeader>
                  <h4>{plan.title}</h4>
                </PricingHeader>

                <PricingPrice>
                  <h2>R$ {plan.price}</h2>
                  <span>/pessoa</span>
                </PricingPrice>

                <PricingBody>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </PricingBody>

                <PricingFooter>
                  <Button href="#" variant="secondary" className="ctaBtn">
                    Comprar Ingresso
                  </Button>
                </PricingFooter>
              </PricingPlan>
            </div>
          ))}
        </div>
      </div>
    </PricingSection>
  );
};

export default Pricing;

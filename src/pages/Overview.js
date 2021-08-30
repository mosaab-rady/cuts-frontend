import React, { useEffect, useState } from 'react';
import '../css/overview.css';
import { request } from '../js/axios';
import { isInViewport } from '../js/viewport';
import Comparison from '../component/Comparison';
import Cut from '../component/Cut';
import Hero from '../component/Hero';
import Product from '../component/Product';
import Section from '../component/Section';

export default function Overview() {
  const [mainCollection, setMainCollection] = useState('');
  const [collections, setCollections] = useState('');
  const [midGroup, setMidGroup] = useState('');
  // const [thirdCollection, setThirdCollection] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await request(
        'GET',
        `/api/v1/collections/display?mode=main`
      );
      if (response) {
        if (response.data.status === 'success') {
          setMainCollection(response.data.data.collection[0]);
        }
      }

      const FirstResponse = await request(
        'GET',
        '/api/v1/collections/display?mode=second'
      );
      if (FirstResponse) {
        if (FirstResponse.data.status === 'success') {
          setCollections(FirstResponse.data.data.collection[0]);
        }
      }

      response = await request(
        'GET',
        'api/v1/collections/display/products?mode=first&limit=3'
      );
      if (response) {
        if (response.data.status === 'success') {
          setMidGroup(response.data.data.collection);
        }
      }

      // response = await request('GET', '/api/v1/collections/display?mode=third');
      // if (response) {
      //   if (response.data.status === 'success') {
      //     setThirdCollection(response.data.data.collection[0]);
      //   }
      // }
    };
    getData();
  }, []);

  const myFn = () => {
    const div = document.getElementById('our--mission');
    if (div) {
      if (isInViewport(div)) {
        document.getElementById('our--mission').className = 'slideUp';
      } else if (!isInViewport(div)) {
        document.getElementById('our--mission').className =
          'overview__our--mission';
      }
    }
  };

  window.onscroll = function () {
    myFn();
  };

  return (
    <section className='overview'>
      {mainCollection ? (
        <div className='overview__hero'>
          <Hero
            img={mainCollection.imageHero}
            name={mainCollection.name}
            id={mainCollection.id}
            btn={true}
          />
        </div>
      ) : (
        ''
      )}
      <div className='overview__our--mission' id='our--mission'>
        <h4 className='overview__our--mission__h4'>our mission</h4>
        <h3 className='overview__our--mission__h3'>
          We're here to outfit the world’s most ambitious people.
        </h3>
      </div>

      <section className='overview__collections'>
        <Section
          image='image/best-sellers/image'
          name='best sellers'
          collection='best-sellers'
        />
        {collections ? (
          <Section
            image={collections.image}
            name={collections.name}
            id={collections.id}
          />
        ) : (
          ''
        )}
      </section>

      {midGroup ? (
        <section className='overview__mid--group'>
          <h3 className='overview__mid--group__h3'>{midGroup.name}</h3>
          <div className='overview__mid--group__products'>
            {midGroup.products.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </div>
        </section>
      ) : (
        ''
      )}

      <section className='third--collection'>
        <Section
          image='image/new-releases/imageHero'
          name='new releases'
          collection='new-releases'
        />
      </section>

      <section className='overview__cuts--container'>
        <h3 className='overview__cuts__h3'>shop by cut</h3>
        <div className='overview__cuts'>
          <Cut top={true} name='crew' img='crew.webp' />
          <Cut top={true} name='v-neck' img='v-neck.webp' />
          <Cut top={true} name='hanly' img='hanly.webp' />
          <Cut top={false} name='classic' img='classic.webp' />
          <Cut top={false} name='split' img='split.webp' />
          <Cut top={false} name='elongated' img='elongated.webp' />
        </div>
      </section>
      <section className='overview__cuts--comparison'>
        <div className='overview__cuts--comparison__header'>
          <h3 className='overview__cuts--comparison__h3'>cuts comparison</h3>
          <h4 className='overview__cuts--comparison__h4'>
            Define your look with every Cut. Here’s how each shape can elevate
            your style.
          </h4>
        </div>
        <div className='overview__cuts--comparison__imgs'>
          <Comparison
            img='curve-hem.webp'
            nb={1}
            name='classic curve hem'
            info={[
              'Elevated regular bottom cut',
              'Curved hem to eliminate bunching around the waist',
              'Traditional fitting body',
            ]}
          />
          <Comparison
            img='split-hem.webp'
            nb={2}
            name='split-hem'
            info={[
              'Dynamic functionality lends to a casual yet distinctive look',
              'Split-Hem provides more room throughout the body',
            ]}
          />
          <Comparison
            img='elongated-hem.webp'
            nb={3}
            name='elongated-hem'
            info={[
              'Crafted with the modern man in mind',
              'Longer torso: 1.5” longer than the Curve-Hem',
              'Extended curve demonstrates true class with urban feel',
            ]}
          />
        </div>
      </section>
      <section className='overview__footer'></section>
    </section>
  );
}

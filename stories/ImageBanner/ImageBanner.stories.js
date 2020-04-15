import Vue from 'vue';
import { action } from '@storybook/addon-actions';
import ImageBanner from './ImageBanner.component';

import '../../styles/buttons.scss';

export default {
  component: ImageBanner,
  title: 'ImageBanner',
};

export const Banner1 = () => ({
  components: { ImageBanner },
  template: `
    <ImageBanner :imageDesktop="imageDesktop" :imageMobile="imageMobile">
      <template v-slot:title>
        <h1>This is the title</h1>
      </template>
      <template v-slot:subtitle>
        <h3>This is the subtitle</h3>
      </template>
      <template v-slot:button>
        <button>Shop Now</button>
      </template>
    </ImageBanner>
  `,
  data: () => ({
    imageDesktop: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image.jpg',
    imageMobile: 'https://pressed-product-images.s3-us-west-1.amazonaws.com/shopify/pages/bragg-landing/hero-image-mobile.jpg',
  })
});

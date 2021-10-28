import { request } from './axios';

export const update = async (e, collection) => {
  const name = e.target.name.value;
  const mode = e.target.mode.value;
  const imageHero = e.target.imageHero.files[0];
  const imageCover = e.target.imageCover.files[0];
  const image = e.target.image.files[0];
  const imageDetail = e.target.imageDetail.files[0];

  const formData = new FormData();
  if (collection.name !== name) {
    formData.append('name', name);
  }

  if (collection.mode !== mode) {
    formData.append('mode', mode);
  }

  if (imageHero) {
    formData.append('imageHero', imageHero);
  }

  if (imageCover) {
    formData.append('imageCover', imageCover);
  }

  if (image) {
    formData.append('image', image);
  }

  if (imageDetail) {
    formData.append('imageDetail', imageDetail);
  }

  const res = await request(
    'PATCH',
    `api/v1/collections/${collection.id}`,
    formData
  );
  if (res) {
    console.log(res);
    if (res.data.status === 'success') {
      console.log(res);
    }
  }
};

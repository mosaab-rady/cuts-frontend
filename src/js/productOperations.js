import { request } from './axios';

export const create = async (e) => {
  const formData = new FormData();
  formData.append('name', e.target.name.value);
  formData.append('type', e.target.type.value);
  formData.append('cut', e.target.cut.value);
  formData.append('collar', e.target.collar.value);
  formData.append('fabric', e.target.fabric.value);
  formData.append(
    'fabricFeatures',
    JSON.stringify({
      stretch: e.target.stretch.checked,
      antiPilling: e.target.antiPilling.checked,
      butterySoft: e.target.butterySoft.checked,
      preShrunk: e.target.preShrunk.checked,
      wrinkleFree: e.target.wrinkleFree.checked,
      colorAndFitRetention: e.target.colorAndFitRetention.checked,
      breathable: e.target.breathable.checked,
      durable: e.target.durable.checked,
      lightweight: e.target.lightweight.checked,
      naturalSoftness: e.target.naturalSoftness.checked,
    })
  );
  if (e.target.sizeAndFit.value) {
    e.target.sizeAndFit.value.split('\n').forEach((element) => {
      formData.append('sizeAndFit', element);
    });
  }
  if (e.target.materialAndCare.value) {
    e.target.materialAndCare.value.split('\n').forEach((element) => {
      formData.append('materialAndCare', element);
    });
  }
  if (e.target.reason.value) {
    formData.append('reason', e.target.reason.value);
  }

  formData.append('summary', e.target.summary.value);
  formData.append('price', e.target.price.value);
  formData.append('sale', e.target.sale.value);
  formData.append('color', e.target.color.value);
  formData.append('colorHex', e.target.colorHex.value);
  formData.append(
    'size',
    JSON.stringify({
      small: e.target.small.value,
      medium: e.target.medium.value,
      large: e.target.large.value,
      xLarge: e.target.xLarge.value,
      xxLarge: e.target.xxLarge.value,
    })
  );
  formData.append('imageCover', e.target.imageCover.files[0]);
  formData.append('imageDetail', e.target.imageDetail.files[0]);
  if (e.target.img_1.files[0]) {
    formData.append('images', e.target.img_1.files[0]);
  }
  if (e.target.img_2.files[0]) {
    formData.append('images', e.target.img_2.files[0]);
  }
  if (e.target.img_3.files[0]) {
    formData.append('images', e.target.img_3.files[0]);
  }

  const res = await request('POST', 'api/v1/products', formData);
  if (res) {
    console.log(res);
    if (res.data.status === 'success') {
      const successDiv = document.getElementById('add__product--success');
      successDiv.insertAdjacentHTML(
        'afterbegin',
        `<h4 class='success--div__h4' >added product successfully</li> </h4>`
      );
      setTimeout(() => {
        window.location.replace(`${window.location.origin}/account/products`);
      }, 1500);
    } else {
      const errDiv = document.getElementById('add__product--err');
      errDiv.insertAdjacentHTML(
        'afterbegin',
        `<h4 class='err--div__h4' >the following error occur :<li> ${res.data.message}</li> </h4>`
      );
    }
  }
};

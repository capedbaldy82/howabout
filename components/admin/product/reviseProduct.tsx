import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/input';
import media from '../../../libs/media';
import ButtonBig from '../../common/buttonBig';
import { useRouter } from 'next/router';
import Textarea from '../../common/testarea';
import useMutation from '../../../hooks/useMutation';
import { BASE_URL } from '../../../constants/server';
import cookies from 'react-cookies';

interface ProductForm {
  id?: number;
  name: string;
  brand: string;
  type: string;
  image: string;
  status: boolean;
  until: string;
  rank: number;
  description: string;
}

const ReviseProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm<ProductForm>();
  const [productPreview, setProductPreview] = useState('');
  const [update, { data, loading, error }] = useMutation(
    'POST',
    `${BASE_URL}/product/update`,
    cookies.load('accessToken')
  );
  const productImage = watch('image');

  useEffect(() => {
    if (router.query) {
      setValue('name', router.query.name + '');
      setValue('brand', router.query.brand + '');
      setValue('type', router.query.type + '');
      setValue('status', !!router.query.status);
      setValue('until', router.query.until + '');
      setValue('rank', +(router.query.rank + ''));
      setValue('description', router.query.description + '');
      setValue('image', router.query.image + '');
      // setProductPreview(router.query.image + '');
    }
  }, []);

  const onValid = async (value: ProductForm) => {
    if (loading) return;

    const token = cookies.load('accessToken');

    console.log('delete 시작');

    // CloudFlare에 기존 업로드 된 이미지 삭제
    // 동기 처리 불필요
    const response_delete = fetch(`${BASE_URL}/product/deleteimage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image: router.query.image }),
    })
      .then((res) => res.json())
      .catch((err) => alert(err));

    console.log('delete 끝');

    console.log('getUploadURL 시작');

    // CloudFlare로 업로드URL 받아오기
    const response = await fetch(`${BASE_URL}/product/fileurl`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
    });

    const { uploadURL } = await response.json();

    console.log('getUploadURL 끝');
    console.log('postNewImage 시작');

    // 받은 업로드URL을 통해 CF에 파일 올리기
    const form = new FormData();
    form.append('file', value.image[0], value.name);
    const res = await fetch(uploadURL, { method: 'POST', body: form });

    const result = await res.json();

    console.log('postNewImage 끝');

    // 예외 처리 필요
    // 이미지 업로드가 됐으면 돌려 받은 imageID를 받아서 BE에 전송
    const imageID = result.result.id;

    console.log({ ...value, rank: +value.rank, status: !!value.status });

    update({
      ...value,
      id: router.query.id,
      rank: +value.rank,
      status: !!value.status,
      image: imageID,
    });

    console.log(value);
  };

  const onUnValid = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    if (productImage !== router.query.image && productImage?.length > 0) {
      const file = productImage[0];
      const blob = new Blob([file]);

      setProductPreview(URL.createObjectURL(blob));
    }
  }, [productImage]);

  return (
    <CreateProductForm onSubmit={handleSubmit(onValid, onUnValid)}>
      <ProductImageRegister
        bg={
          productPreview ||
          `https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${router?.query?.image}/product`
        }>
        <label htmlFor="picture">
          {productPreview ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <input {...register('image')} id="picture" type="file" accept="image/*" />
        </label>
      </ProductImageRegister>
      <div>
        <Input register={register('name', { required: true })} name="name" place="상품명" />
        <Input register={register('brand', { required: true })} name="brand" place="브랜드" />
        <Input register={register('type', { required: true })} name="type" place="카테고리" />
        <Input register={register('status', { required: true })} name="status" place="상태" />
        <Input register={register('until', { required: true })} name="until" place="대여기간" />
        <Input register={register('rank', { required: true })} name="rank" place="등급" />

        <Textarea
          register={register('description', { required: true })}
          name="description"
          place="상품설명"
        />
        <ButtonBig>{loading ? 'Loading..' : '등록하기'}</ButtonBig>
      </div>
    </CreateProductForm>
  );
};

export default ReviseProduct;

const CreateProductForm = styled.form`
  ${media.tablet`display: flex`}
  ${media.tablet`justify-content: space-around`};

  & > div {
    width: 100%;
    ${media.tablet`width: 45%`}
  }
`;

const ProductImageRegister = styled.div<{ bg: string }>`
  margin-bottom: 12px;
  width: 100%;
  height: 200px;
  ${media.tablet`height:550px`};
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url(${(props) => props.bg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    & > svg {
      width: 36px;
      height: 36px;
    }

    & > input {
      width: 1px;
      height: 1px;
      visibility: hidden;
    }
  }
`;

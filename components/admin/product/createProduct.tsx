import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/input';
import media from '../../../libs/client/media';
import ButtonBig from '../../common/buttonBig';

interface ProductForm {
  name: string;
  brand: string;
  type: string;
  image: string;
  status: string;
  until: string;
  rank: string;
  description: string;
}

const CreateProduct = () => {
  const { register, handleSubmit, watch } = useForm<ProductForm>();
  const [productPreview, setProductPreview] = useState('');
  const productImage = watch('image');

  const onValid = (value: ProductForm) => {
    console.log(value);
  };

  const onUnValid = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    if (productImage && productImage.length > 0) {
      const file = productImage[0];
      console.log(file);

      // setProductPreview(URL.createObjectURL(file));
    }
  }, [productImage]);

  return (
    <CreateProductForm onSubmit={handleSubmit(onValid, onUnValid)}>
      <ProductImageRegister bg={productPreview}>
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
      <Input register={register('name', { required: true })} name="name" place="상품명" />
      <Input register={register('brand', { required: true })} name="brand" place="브랜드" />
      <Input register={register('type', { required: true })} name="type" place="카테고리" />
      <Input register={register('status', { required: true })} name="status" place="상태" />
      <Input register={register('until', { required: true })} name="until" place="대여기간" />
      <Input register={register('rank', { required: true })} name="rank" place="등급" />
      <Input
        register={register('description', { required: true })}
        name="description"
        place="상품설명"
      />
      <ButtonBig>등록하기</ButtonBig>
    </CreateProductForm>
  );
};

export default CreateProduct;

const CreateProductForm = styled.form`
  width: 75%;
`;

const ProductImageRegister = styled.div<{ bg: string }>`
  margin-bottom: 12px;
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};
  height: 200px;
  ${media.tablet`height:300px`};
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

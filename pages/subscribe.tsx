import styled from '@emotion/styled';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { representative } from '../constants/style';
import media from '../libs/client/media';

const Subscribe: NextPage = () => {
  const [membership, setMembership] = useState(1);

  const selectMembership = (type: number): void => {
    setMembership(type);
  };

  return (
    <SubscribeWrapper>
      <h2 className="screen_out">구독</h2>
      <ProcessWrapper>
        <h3>이용 방법</h3>
        <ProcessImage>
          <Image
            src="https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/10b5b696-e37c-43ed-dc43-043940735400/product"
            width={600}
            height={600}
          />
        </ProcessImage>
        <ProcessDetail>
          <div>
            <h4>1. 멤버십 결제</h4>
            <ol>
              <li>- 구독 페이지 내 멤버십 선택 후 결제</li>
            </ol>
          </div>
          <div>
            <h4>2. 주문</h4>
            <ol>
              <li>- 원하는 상품을 장바구니에 담고 대여 신청</li>
            </ol>
          </div>
          <div>
            <h4>3. 수령</h4>
            <ol>
              <li>- 신청 완료된 상품을 택배 배송을 통한 수령</li>
            </ol>
          </div>
          <div>
            <h4>4. 이용</h4>
            <ol>
              <li>- 한달 간 이용</li>
            </ol>
          </div>
          <div>
            <h4>5. 새 주문</h4>
            <ol>
              <li>- 기간 만료 일주일 이내로 새 상품 신청</li>
            </ol>
          </div>
          <div>
            <h4>6. 교환</h4>
            <ol>
              <li>- 새 상품 수령과 동시에 사용 상품 반납</li>
            </ol>
          </div>
        </ProcessDetail>
      </ProcessWrapper>
      <TicketWrapper membership={membership || 1}>
        <h3>멤버십</h3>
        <div>
          <div onClick={() => selectMembership(1)}>
            <p>베이직</p>
          </div>
          <div onClick={() => selectMembership(2)}>
            <p>스탠다드</p>
          </div>
          <div onClick={() => selectMembership(3)}>
            <p>프리미엄</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>월 요금</td>
              <td>19,900원</td>
              <td>29,900원</td>
              <td>39,900원</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>토큰</td>
              <td>3개</td>
              <td>5개</td>
              <td>8개</td>
            </tr>
          </tbody>
        </table>
        <button>구독하기</button>
      </TicketWrapper>
      <NoticeWrapper>
        <h3>필독 사항</h3>
        <ol>
          <li>1. 반납 기간을 반드시 지켜주셔야합니다.</li>
          <li>2. 반납 기간 미준수 시 미 반납 상품은 자동 대여 상태가 됩니다.</li>
          <li>
            3. 대여 중 발생하는 복구 가능한 데미지는 자체적으로 복구합니다.
            <br />
            (미세한 스크래치, 실밥 풀림 등)
          </li>
          <li>
            4. 대여 중 발생하는 복구 불가능한 데미지는 제품을 구매하셔야합니다.(음식물 오염, 큰
            스크래치)
          </li>
          <li>5. 사랑합니다.</li>
        </ol>
      </NoticeWrapper>
    </SubscribeWrapper>
  );
};

export default Subscribe;

const SubscribeWrapper = styled.section`
  margin: 0 auto;
  padding-top: 120px;
  width: 100%;
  max-width: ${representative.maxWidth};
  background-color: black;
  color: white;

  & > article {
    margin: 0 auto;
    padding-bottom: 120px;
    width: 100%;
    ${media.tablet`width:60%`};

    & > h3 {
      font-size: 32px;
      margin-bottom: 64px;
      text-align: center;
    }
  }
`;

const ProcessWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const ProcessImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const ProcessDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'MICEGothic';
  padding-left: 8px;
  ${media.tablet`padding-left:0px`};

  & > div {
    line-height: 28px;
    margin-bottom: 24px;

    & > h4 {
      font-size: 16px;
      ${media.tablet`font-size:18px`};
      font-weight: 800;
    }
    & > ol {
      color: rgba(255, 255, 255, 0.75);
      ${media.tablet`font-size:14px`};
    }
  }
`;

const TicketWrapper = styled.article<{ membership: number }>`
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  & > div:first-of-type {
    display: flex;
    justify-content: space-around;
    margin: 16px 0;

    & > div {
      position: relative;
      border: 1px solid gray;
      width: 96px;
      height: 96px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    & > div:nth-of-type(${(props) => props.membership}) {
      background-color: red;
      border: 1px solid red;
    }

    & > div:nth-of-type(${(props) => props.membership}):after {
      content: '';
      position: absolute;
      bottom: -40px;
      left: calc(50%-10px);
      border-top: 20px solid red;
      border-bottom: 20px solid transparent;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
    }
  }

  & > table {
    width: 100%;
    font-size: 18px;

    & > thead,
    tbody {
      & > tr {
        display: flex;
        flex-wrap: wrap;
        text-align: center;

        & > td {
          margin: 16px 0;
          width: 33.3333%;
          color: gray;
        }

        & > td:nth-of-type(${(props) => props.membership + 1}) {
          color: white;
          font-size: 20px;
        }

        & > td + td + td {
          border-left: 1px solid white;
        }

        & > td:first-of-type {
          width: 100%;
        }
      }
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    margin: 60px auto;
    padding: 1em;
    max-width: 200px;
    border: 1px solid red;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 16px;
    cursor: pointer;

    width: 60%;
    ${media.tablet`width:40%`};
  }
`;

const NoticeWrapper = styled.article`
  font-weight: 800;

  padding-left: 8px;
  ${media.tablet`padding-left:0px`};
  font-size: 14px;
  ${media.tablet`font-size:18px`};

  & > ol {
    & > li {
      margin-bottom: 8px;
    }
  }
`;

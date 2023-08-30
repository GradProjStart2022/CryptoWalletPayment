import classes from "./BlockchainManage.module.css";
import { useQuery } from "react-query";
const fetchBlockchainList = async () => {
  const response = await fetch('https://asia-northeast3-nangnang-b59c0.cloudfunctions.net/api/brofucntions/sangyunbro/BlockchainOne/readMainBlockchainList');
  if (!response.ok) {
    throw new Error('API 호출이 실패했습니다.');
  }
  return response.json();
};

const fetchSellerChosenList = async () => {
  const response = await fetch('https://asia-northeast3-nangnang-b59c0.cloudfunctions.net/api/brofucntions/sangyunbro/BlockchainTwo/readSellersChosenMainBlockchain?seller_id=seller1001');
  if (!response.ok) {
    throw new Error('API 호출이 실패했습니다.');
  }
  return response.json();
};


const BlockchainManage = () => {
  const { data: firstData, isLoading: isLoadingFirst } = useQuery('firstData', fetchBlockchainList);


  const { data: secondData, isLoading: isLoadingSecond } = useQuery('secondData', fetchSellerChosenList);

  const sellerChosen = secondData?.data || [];


  return (
    <div className={classes.blockchainmanage_wrap}>
      <div className={classes.blockchainmanage}>
        <div className={classes.blockchainmanage_text}>블록체인관리</div>
        <br />
        <span>결제 가능한 블록체인</span>
        <br />
        <div>
          {/* <h1>First Data:</h1> */}
          {isLoadingFirst ? (
            <p>Loading list data...</p>
          ) : (
            <div>
              {/* <pre>{JSON.stringify(firstData, null, 2)}</pre> */}

              {/* <h1>Second Data:</h1> */}
              {isLoadingSecond ? (
                <p>Loading chosen data...</p>
              ) : (
                <ul>
                  {Object.entries(firstData.data).map(([key, value]) => (
                    <li
                      key={key}
                      style={{
                        color: sellerChosen.includes(key) ? 'red' : 'black',
                      }}
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <button onClick={``}>수정</button>
      </div>
    </div >
  );
};

export default BlockchainManage;

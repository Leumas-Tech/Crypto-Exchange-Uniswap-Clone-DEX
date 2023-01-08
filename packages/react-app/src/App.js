import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import { LeumasLogo } from "./assets";
import { Exchange, Loader, WalletButton, AsideMenu , Header} from "./components";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div>

 <div className="flex flex-row p-2">
<Header /><WalletButton />
 </div>
<AsideMenu />
    <div className="content absolute border-t-2 border-black p-4">
      



        <div className="form-box relative p-2 flex flex-col  align-items justify-center text-center " id="form-box" >
        <div>
          <h1 className={styles.headTitle}>Leumas Exchange 2.0</h1>
          <p className={styles.subTitle}>Purchase LMS || LMSS in seconds</p>
        </div>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
            
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>

            </div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default App;

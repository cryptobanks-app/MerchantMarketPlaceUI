import { useHistory } from "react-router-dom";

function MerchantSignIn() {

  let history = useHistory();

  function handleSignInClick() {
    history.push('/merchants/merchant-products');
  };

  return (
    <div className="MerchantSignIn">
      <header className="App-header">
          Signin Merchant
      </header>

      <form>
        <section>
          <label> Email </label>
          <input type="email">
            
          </input>
        </section>

        <section>
          <label> Password </label>
          <input type="password">

          </input>  
        </section> 

        <button type="button" onClick={handleSignInClick}>
          Sign in
        </button>
      </form>
      
    </div>
  );
}

export default MerchantSignIn;

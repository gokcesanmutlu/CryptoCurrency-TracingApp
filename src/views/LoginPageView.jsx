import { inputs } from './../constants';
import InputFieldView from './InputFieldView';

const LoginPageView = ({formik}) => {
    return (
        <div className="login-page">
          <div className="container my-5">
            <h2 className="d-flex gap-3 justify-content-center align-items-center">
              <img height={60} src="/c-logo.png" />
              <span>Coinmania</span>
            </h2>
    
            <form onSubmit={formik.handleSubmit}>
              {inputs.map((data, key) => (
                <InputFieldView formik={formik} data={data} key={key}/>
              ))}
    
              <button className="" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      );
}

export default LoginPageView
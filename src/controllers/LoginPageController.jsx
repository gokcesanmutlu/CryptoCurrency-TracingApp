import { useFormik } from 'formik';
import LoginPageView from '../views/LoginPageView';
import { schema } from '../schema';
import { useNavigate } from 'react-router-dom';

const LoginPageController = () => {
    const navigate = useNavigate();

    // useformik()'i tanımladığımız anda bize bir değer döndürür onu da formik değişkenine atarız
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },

        // validasyon şeması tanımlandığında, formik inputlardaki verilerin şemadaki koşullara uygun olmasını bekler
        // uygun değilse içindeki error state'ini günceller, error state'inde hataları tutar
        validationSchema: schema,

        // form gönderilince çalıştır. (bu onsubmitin normal onsubmitten farkı: aldığı parametreler)
        //1.param:obje formatında inputların valuesi,
        //2.actionsın içinde -console ile görebilirsin param formda bazı aksiyonlar gerçekleştirmemizi örn sıfırlama
        onSubmit: (values, actions) => {
            // kaydol'a bastığımda form eksikse yönlendirmicek, formu doğru doldurduğumda yönlendircek
            navigate("/home") // örn bir authentication api'miz olsaydı burda ona istek atardık öyle anasayfaya yönlendirirdikF
        },
    });

    // console.log(formik.touched)
    // console.log(formik);
    return <LoginPageView formik={formik} />
}

export default LoginPageController
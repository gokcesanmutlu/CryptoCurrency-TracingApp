import * as yup from "yup";

//min 1 uppercase, min 1 lowercase, min 1 number, min 1 special character, min 5 character
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//formdaki inputların geçerli olması gerekli koşulları tanımladığımız yapı shape'e kadar olan kısım klasık, 
// yani yup diyo ki formik için bu şemayı kullanacaksan bu formatta kullan
// input alanı koşullarını tanımlarkan ilk tanımlanması gereken şey veri tipi devamına ise zincirleme fonk. şeklinde koşulları sıralarız
// koşulların çalışıp çalışmadığını kontrol etmek için schemayı değişkene aktarıp export ediyoruz
// exporttan sonra loginpagede kullanmamız lazım

export const schema = yup.object().shape({
    // requirement for email
    email: yup.string().email("lütfen geçerli bir email formatı giriniz").required(),
    // requirement for age
    age: yup.number().min(18).max(100).integer().required(),
    // requirement for password
    password: yup.string().min(5).matches(regex).required(), // min numberda büyüklük, stringte karakter uzunluğu
    // kontrolü yapar şifre yukarıda tanımladığım regex kurallarına uyuyor mu bunu kontrol etmem lazım,
    // matches() metotu bunun için var, matches methodu regex'i ve isterseniz uymaması halinde çıkacak uyarıyı param olarak alır
    // requirement for passwordConfirm
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords aren't same.").required(),
    //oneof bir dizi string alır, şifre onay kısmına yazılan yazı bu stringlerden herhangi birine eşit mi bunu kontol eder.
    //notoneof ise bu da eşleşmiyor mu kontrolü yapar yani selam yazarsan hata verir
    //ref() farklı input alanlarındaki veriyi çağırmaya yarar
});

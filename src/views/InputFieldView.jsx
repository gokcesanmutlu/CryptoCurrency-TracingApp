
const InputField = ({formik, data}) => {
    const { label, name, type } = data;
    return (
        // data parametresinde bir obje şeklinde bileşenin verilerini alıcaz


        <div>
            <label>{label}</label>
            <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name={name}
                className={`form-control mt-2 ${formik.touched[name] && formik.errors[name] && 'error'
                    }`}
                type={type} />

            {/* bir objenin bir özelliğine dinamik erişmek için aşağıdaki yöntem formik.touched[name] */}
            {formik.touched[name] && formik.errors[name] && (
                <span>{formik.errors[name]}</span>
            )}
        </div>
    )
}

export default InputField
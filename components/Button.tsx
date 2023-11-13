type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    variant: 'btn_light_green'
}

const Button = ({ type, title, variant}: ButtonProps) => {
  return (
    <button
    className={` gap-3 rounded-full ${variant}`}
     type={type}
     >
      <label className="">{title}</label>
    </button>
  )
}

export default Button
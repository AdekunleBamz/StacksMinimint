import './Spinner.css'

function Spinner({ size = 'medium', color = 'primary' }) {
  return (
    <div className={`spinner spinner--${size} spinner--${color}`}>
      <div className="spinner__ring"></div>
    </div>
  )
}

export default Spinner

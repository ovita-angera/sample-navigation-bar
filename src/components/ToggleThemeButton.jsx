import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd';
import PropTypes from 'prop-types'

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
        <Button onClick={toggleTheme}>
            { darkTheme ? <HiOutlineSun /> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

ToggleThemeButton.propTypes = {
    darkTheme: PropTypes.bool,
    toggleTheme: PropTypes.func
}

export default ToggleThemeButton
import PropTypes from 'prop-types';
import styles from '../FeadbackOptions/FeedbackOptions.module.css'
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(element => (
        <button
        className={styles.button}
          key={element}
          type="button"
          onClick={onLeaveFeedback}
        >
          {element}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
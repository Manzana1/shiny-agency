import PropTypes from 'prop-types'
import styled from 'styled-components'

function Card({ label, title, picture }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center',
      }}
    >
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  // isRequired pour exiger une prop
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

export default Card
